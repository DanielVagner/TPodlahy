// All images from assets/imgs – auto-imported via Vite glob
const allModules = import.meta.glob('../assets/imgs/*.{jpg,jpeg,png,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

export const allImages: string[] = Object.values(allModules).sort();

// Manually curated best 6 for the homepage gallery preview
import img1 from '../assets/imgs/WhatsApp Image 2026-04-17 at 20.41.49 (1).jpeg';
import img2 from '../assets/imgs/WhatsApp Image 2026-04-17 at 20.52.12.jpeg';
import img3 from '../assets/imgs/WhatsApp Image 2026-04-17 at 20.52.14 (2).jpeg';
import img4 from '../assets/imgs/WhatsApp Image 2026-04-17 at 20.41.48 (1).jpeg';
import img5 from '../assets/imgs/WhatsApp Image 2026-04-17 at 20.57.24 (3).jpeg';
import img6 from '../assets/imgs/WhatsApp Image 2026-04-17 at 20.57.24 (7).jpeg';

export const featuredImages: string[] = [img1, img2, img3, img4, img5, img6];
