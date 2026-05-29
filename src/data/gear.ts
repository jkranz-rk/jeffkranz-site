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
    image: '/images/placeholder.svg',
  },
  {
    name: 'Ibanez 540S',
    category: 'Guitar',
    note: 'A late-80s shredder with a fast neck and a tone that cuts right through.',
    image: '/images/placeholder.svg',
  },
  {
    name: 'Ibanez AZS2209',
    category: 'Guitar',
    note: 'Modern Prestige craftsmanship with a versatile voice and impeccable playability.',
    image: '/images/placeholder.svg',
  },
  {
    name: 'Regal Acoustic',
    category: 'Guitar',
    note: 'Warm, unplugged tone for when the room just needs a guitar and nothing else.',
    image: '/images/placeholder.svg',
  },
  {
    name: 'Marshall DSL40',
    category: 'Amplifier',
    note: 'Classic British tone stack. Clean headroom, a snarl when pushed, and enough volume to wake the neighbors.',
    image: '/images/placeholder.svg',
  },
  {
    name: 'Dunlop JH-1 Wah',
    category: 'Pedal',
    note: 'The classic Hendrix wah — expressive, vocal, and impossible to put down.',
    image: '/images/placeholder.svg',
  },
  {
    name: 'MXR Phase 90',
    category: 'Pedal',
    note: 'Smooth, sweeping phaser. One knob, infinite texture.',
    image: '/images/placeholder.svg',
  },
  {
    name: 'Boss Turbo Overdrive OD-2R',
    category: 'Pedal',
    note: 'Tight, responsive overdrive with a turbo mode that adds extra harmonic grit.',
    image: '/images/placeholder.svg',
  },
  {
    name: 'Keeley Phat Mod Full Range Overdrive',
    category: 'Pedal',
    note: 'A transparent, full-frequency overdrive that pushes the amp without coloring the tone.',
    image: '/images/placeholder.svg',
  },
  {
    name: 'DOD Grunge (Modified)',
    category: 'Pedal',
    note: 'Heavily modified — new capacitors, clipping options, and a bias trim. It sounds like nothing else on the board.',
    image: '/images/placeholder.svg',
  },
];
