import { brand } from "@/lib/dealership-config";
import StarGlint from "@/components/site/shared/StarGlint";

/**
 * The royal cypher: the owner's Gothic triple-J monogram, delivered
 * 29 Aug 2026. Copper is the artwork's own color and belongs on paper
 * surfaces; cream carries dark surfaces (the homescreen header per the
 * owner: the cipher alone, never the full name); ink is for print,
 * because copper turns to mud on a photocopier.
 */

type Props = {
  /** Rendered height in px. Width follows the artwork's aspect. */
  height?: number;
  tone?: "copper" | "cream" | "ink";
  className?: string;
  /** Accessible name. Omit when adjacent visible text already names it. */
  title?: string;
};

/** The delivered artwork's intrinsic proportions (w:h). */
const ASPECT = 740 / 1122;

export default function Monogram({
  height = 44,
  tone = "copper",
  className,
  title,
}: Props) {
  const width = Math.round(height * ASPECT);
  const src = brand.monogramArtwork[tone];
  // No crest on file: the glint alone is Vega's monogram. Gold on screen,
  // ink for print (a photocopier turns gold to grey).
  if (!src) {
    return (
      <span className={className} role={title ? "img" : undefined} aria-label={title || undefined} aria-hidden={title ? undefined : true}>
        <StarGlint size={Math.round(height * 0.72)} color={tone === "ink" ? "var(--tj-ink)" : "#d6b77a"} />
      </span>
    );
  }
  return (
    // Plain img: this renders in headers, loaders and print letterheads.
    // No inline display so consumers can hide/show responsively.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      width={width}
      height={height}
      alt={title ?? brand.full}
      className={className}
      style={{ width, height }}
    />
  );
}
