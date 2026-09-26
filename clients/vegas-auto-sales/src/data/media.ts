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
  | 'hero-credit'
  | 'visit'
  | 'glass-band';

export const photos: Partial<Record<PhotoSlot, string>> = {
  // Brand image, generated for the site (not a vehicle in stock).
  hero: '/photos/hero-truck.webp',
  'hero-mobile': '/photos/hero-truck-mobile.webp',
};

/** Where the hero photo's subject sits, so phones crop to it. */
export const heroFocus = '72% 50%';
