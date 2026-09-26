import type { CSSProperties } from 'react';

/** Four-point glint — Vega, the brightest star of Lyra, and light catching on glass. */
export function StarGlint({ size = 18, className = '', style }: { size?: number; className?: string; style?: CSSProperties }) {
  return (
    <svg className={className} style={style} width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <path
        d="M24 0 C25.2 14 27.4 20.6 48 24 C27.4 27.4 25.2 34 24 48 C22.8 34 20.6 27.4 0 24 C20.6 20.6 22.8 14 24 0 Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`wordmark ${compact ? 'wordmark--compact' : ''}`}>
      <span className="wordmark__name">
        VEGA<StarGlint size={compact ? 11 : 14} className="wordmark__star" />S
      </span>
      <span className="wordmark__sub">Auto Sales · Glass Co.</span>
    </span>
  );
}
