export type GearItem = {
  name: string;
  category: 'Guitar' | 'Amplifier' | 'Pedal';
  note: string;
  image: string;
};

export const gear: GearItem[] = [
  {
    name: 'Gibson Les Paul',
    category: 'Guitar',
    note: 'Autographed by Les Paul himself — a piece of history as much as an instrument.',
    image: '/images/lespaul.JPG',
  },
  {
    name: 'Ibanez 540S',
    category: 'Guitar',
    note: 'An early 90s shredder with a fast neck and a tone that cuts right through.',
    image: '/images/ibanez540S.JPG',
  },
  {
    name: 'Ibanez AZS2209',
    category: 'Guitar',
    note: 'Modern Prestige craftsmanship with a versatile voice and impeccable playability.',
    image: '/images/ibanezAZS2209.JPG',
  },
  {
    name: 'Regal Acoustic',
    category: 'Guitar',
    note: 'Warm, unplugged tone for when the room just needs a guitar and nothing else.',
    image: '/images/regal.JPG',
  },
  {
    name: 'Marshall DSL40CR',
    category: 'Amplifier',
    note: 'Classic British tone stack. Clean headroom, a snarl when pushed, and enough volume to wake the neighbors.',
    image: '/images/dsl40cr.JPG',
  },
  {
    name: 'Dunlop JH-1 Wah',
    category: 'Pedal',
    note: 'The classic Hendrix wah — expressive, vocal, and impossible to put down.',
    image: '/images/pedals/dunlopJH1.JPG',
  },
  {
    name: 'MXR Phase 90',
    category: 'Pedal',
    note: 'Smooth, sweeping phaser. One knob, infinite texture.',
    image: '/images/pedals/phase90.JPG',
  },
  {
    name: 'Boss Turbo Overdrive OD-2R',
    category: 'Pedal',
    note: 'Tight, responsive overdrive with a turbo mode that adds extra harmonic grit.',
    image: '/images/pedals/bossODR2.JPG',
  },
  {
    name: 'Keeley Phat Mod Full Range Overdrive',
    category: 'Pedal',
    note: 'A transparent, full-frequency overdrive that pushes the amp without coloring the tone.',
    image: '/images/pedals/phatmod.JPG',
  },
  {
    name: 'DOD Grunge (Modified)',
    category: 'Pedal',
    note: 'Heavily modified — new capacitors, clipping options, and a bias trim. It sounds like nothing else on the board.',
    image: '/images/pedals/dodgrunge.JPG',
  },
];
