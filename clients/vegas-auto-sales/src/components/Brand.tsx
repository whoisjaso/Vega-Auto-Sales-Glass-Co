import type { CSSProperties } from 'react';

/** Four-point glint: light catching on glass. Used for sheen effects, not as the brand mark. */
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

/** The lone star from Vega's emblem: the brand mark in type and small places. */
export function LoneStar({ size = 18, className = '', style }: { size?: number; className?: string; style?: CSSProperties }) {
  return (
    <svg className={className} style={style} width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <path d="M24 2 L29.9 17.9 L46.8 18.6 L33.5 29.1 L38.1 45.4 L24 36 L9.9 45.4 L14.5 29.1 L1.2 18.6 L18.1 17.9 Z" fill="currentColor" />
    </svg>
  );
}

/** Vega's emblem: the gold ring, the Texas flag and the black SS. */
export function Logo({ size = 64, className = '', priority = false }: { size?: number; className?: string; priority?: boolean }) {
  const small = size <= 160;
  const base = small ? '/brand/vegas-logo-sm' : '/brand/vegas-logo';
  return (
    <picture className={`logo ${className}`}>
      <source srcSet={`${base}.webp`} type="image/webp" />
      <img
        src={`${base}.png`}
        alt="Vega's Auto Sales & Glass Co."
        width={size}
        height={Math.round(size * 0.783)}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
      />
    </picture>
  );
}

export function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`wordmark ${compact ? 'wordmark--compact' : ''}`}>
      <Logo size={compact ? 58 : 84} className="wordmark__logo" priority />
      <span className="wordmark__text">
        <span className="wordmark__name">
          VEGA<LoneStar size={compact ? 10 : 13} className="wordmark__star" />S
        </span>
        <span className="wordmark__sub">Auto Sales · Glass Co.</span>
      </span>
    </span>
  );
}
