/**
 * Real photography.
 *
 * Every large image on the site is a named slot. Until a photograph exists,
 * the slot renders a lit studio scene instead, so nothing is ever broken or
 * borrowed. To use a real photo: put the file in `public/photos/` and map the
 * slot to it here, e.g. `hero: '/photos/hero-truck.jpg'`.
 *
 * Use Vega's own photographs only: the lot, the shop, real cars in stock.
 */
export type PhotoSlot =
  /** The opening picture: one fixed image, landscape, subject right of centre. */
  | 'hero'
  /** Optional portrait crop of the same picture for phones. */
  | 'hero-mobile'
  /** Inner page headers: wide, subject on the right, calm left side for the title. */
  | 'inventory'
  | 'glass'
  | 'financing'
  | 'visit'
  /** Body-type cards on the home page (square). A real vehicle's photo wins when one exists. */
  | 'body-suv'
  | 'body-sedan'
  | 'body-truck'
  | 'body-coupe'
  /** The three glass tiles on the home page (4:3). */
  | 'glass-windshield'
  | 'glass-door'
  | 'glass-back'
  /** The drag-to-compare windshield: the same frame, cracked and replaced (5:3). */
  | 'glass-before'
  | 'glass-after'
  /** Vehicles on white beside the inventory search (transparent PNG). */
  | 'finder'
  /** The 404 page. */
  | 'not-found';

export const photos: Partial<Record<PhotoSlot, string>> = {
  // Brand image, generated for the site (not a vehicle in stock).
  hero: '/photos/hero-truck.webp',
  'hero-mobile': '/photos/hero-truck-mobile.webp',
};

/** Where the hero photo's subject sits, so phones crop to it. */
export const heroFocus = '72% 50%';
