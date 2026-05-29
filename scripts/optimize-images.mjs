#!/usr/bin/env node
/**
 * Optimizes staged images in public/images/ before commit.
 * - Converts JPEG/PNG to JPEG at 82% quality
 * - Resizes to max 2400px on the long edge (never upscales)
 * - Skips SVGs and already-optimized files (marked by EXIF comment)
 * - Re-stages the files so the optimized version is what gets committed
 */

import { execSync } from 'child_process';
import { readFileSync, writeFileSync } from 'fs';
import path from 'path';
import sharp from 'sharp';

const MAX_PX = 2400;
const QUALITY = 82;
const MARKER = 'jk-optimized';

// Get files staged for this commit
const staged = execSync('git diff --cached --name-only --diff-filter=ACM', { encoding: 'utf8' })
  .split('\n')
  .filter(f => /^public\/images\/.+\.(jpe?g|png)$/i.test(f));

if (staged.length === 0) process.exit(0);

let optimized = 0;
let skipped = 0;

for (const file of staged) {
  const abs = path.resolve(file);
  const buf = readFileSync(abs);

  // Skip if already marked as optimized by this script
  const meta = await sharp(buf).metadata();
  if (meta.exif) {
    const exifStr = meta.exif.toString('latin1');
    if (exifStr.includes(MARKER)) {
      skipped++;
      continue;
    }
  }

  const { width = 0, height = 0 } = meta;
  const needsResize = width > MAX_PX || height > MAX_PX;

  let pipeline = sharp(buf);
  if (needsResize) {
    pipeline = pipeline.resize({
      width: MAX_PX,
      height: MAX_PX,
      fit: 'inside',
      withoutEnlargement: true,
    });
  }

  const outBuf = await pipeline
    .jpeg({ quality: QUALITY, mozjpeg: true })
    .withMetadata({ exif: { IFD0: { ImageDescription: MARKER } } })
    .toBuffer();

  const savedKB = Math.round((buf.length - outBuf.length) / 1024);
  writeFileSync(abs, outBuf);
  execSync(`git add "${file}"`);

  const tag = needsResize ? `resized + compressed` : `compressed`;
  console.log(`  ✓ ${file} — ${tag}, saved ${savedKB}KB`);
  optimized++;
}

if (optimized > 0) console.log(`\nOptimized ${optimized} image(s).`);
if (skipped > 0) console.log(`Skipped ${skipped} already-optimized image(s).`);
