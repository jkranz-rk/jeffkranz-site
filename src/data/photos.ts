export type Photo = {
  src: string;
  alt: string;
  caption?: string;
};

export const photos: Photo[] = [
  { src: '/images/photos/DSC_0095.JPG', alt: 'Image of a tree on Pennsylvania Mountain' },
  { src: '/images/photos/DSC_0099.JPG', alt: 'Image of hiking trail at the base of Pennsylvania Mountain looking out at the mountain range on the horizon' },
  { src: '/images/placeholder.svg', alt: 'Photo 3' },
  { src: '/images/placeholder.svg', alt: 'Photo 4' },
  { src: '/images/placeholder.svg', alt: 'Photo 5' },
  { src: '/images/placeholder.svg', alt: 'Photo 6' },
];
