/**
 * Real photography.
 *
 * Every large image on the site is a named slot. Until a photograph exists,
 * the slot renders a lit studio scene instead, so nothing is ever broken or
 * borrowed. To use a real photo: put the file in `public/photos/` and map the
 * slot to it here, e.g. `'hero-collection': '/photos/lot-front.jpg'`.
 *
 * Use Vega's own photographs only: the lot, the shop, real cars in stock.
 */
export type PhotoSlot =
  | 'hero-collection'
  | 'hero-glass'
  | 'hero-credit'
  | 'visit'
  | 'glass-band';

export const photos: Partial<Record<PhotoSlot, string>> = {};
