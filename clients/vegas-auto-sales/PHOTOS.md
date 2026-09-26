# Photos for the Vega's site

Every large picture on the site is a named slot in `src/data/media.ts`. A slot
with no photo shows a drawn scene, so the site is never broken while images
are pending. Send a finished image and it is cropped, compressed and mapped.

**Real vehicles always come from Vega's own photos** (their Facebook posts or
the lot). The generated images below are mood and brand pictures only: no
badges, no plates, nothing that claims to be a car in stock.

## House style (paste at the end of every prompt)

> Photorealistic automotive advertising photograph. Golden-hour Texas light,
> low warm sun, crisp reflections, rich contrast, subtle film grain. Full-frame
> camera, 50mm lens, f/2.8, eye level. Premium and cinematic, like a Porsche or
> Range Rover campaign. No text, no logos, no badges or emblems on any vehicle,
> no licence plate lettering, no people unless described.

## Page headers (wide 16:9, subject right, left 45% calm and darker for the title)

| Slot | Page | Prompt |
|---|---|---|
| `inventory` | The Collection | A black full-size SUV and a silver four-door sedan parked side by side at a slight angle on the right of the frame, on clean pale concrete beside a low stucco wall with live oak shadows. The left side is open wall and sky. |
| `glass` | Auto Glass | Close-up of the windshield and A-pillar of a black pickup truck, the glass perfectly clean and reflecting a warm sunset sky and oak branches, a soft bead of sealant visible along the edge. Subject on the right, dark soft background on the left. |
| `financing` | Financing | A hand holding a single car key in an open palm, in sharp focus on the right of the frame, with a black pickup truck softly out of focus behind it at golden hour. Only the hand and wrist are visible. |
| `visit` | Visit & Contact | A real phone photo of the lot at Galveston Road is better here. If generating: a quiet Houston street at blue hour, warm streetlights and palm trees, glowing tail-lights receding, no storefronts, no signs. |

## Body-type cards on the home page (square 1:1, vehicle in the lower middle, top quarter empty and dark for the word)

A real vehicle's photo replaces these automatically once that body type is in stock.

| Slot | Prompt |
|---|---|
| `body-suv` | A black full-size three-row SUV, three-quarter front view, in a dark showroom with three long ceiling light strips reflecting on its roof and hood, on a polished dark floor with a soft reflection. |
| `body-sedan` | A silver four-door executive sedan, three-quarter front view, in the same dark showroom with ceiling light strips and a polished dark floor. |
| `body-truck` | A white crew-cab pickup truck, three-quarter front view, in the same dark showroom with ceiling light strips and a polished dark floor. |
| `body-coupe` | A deep red two-door sports coupe, three-quarter front view, in the same dark showroom with ceiling light strips and a polished dark floor. |

## Already in place

- `hero` / `hero-mobile`: the black truck at sunset (brand image, not a vehicle in stock).
