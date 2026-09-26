import { useEffect, useState } from 'react';
import { Logo } from './Brand';

const SEEN_KEY = 'vegas.intro.seen';

function alreadySeen(): boolean {
  try {
    return sessionStorage.getItem(SEEN_KEY) === '1';
  } catch {
    return false;
  }
}

/**
 * Intro sequence: the emblem rises out of the dark, a Texas tricolour line
 * draws beneath it, the wordmark resolves, a sheen passes like light across
 * glass, and the curtain lifts. Plays once per session.
 */
export function Loader() {
  const [phase, setPhase] = useState<'play' | 'exit' | 'done'>(() => (alreadySeen() ? 'done' : 'play'));

  useEffect(() => {
    if (alreadySeen()) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.documentElement.classList.add('is-loading');
    // Releasing `is-loading` as the curtain lifts starts the hero choreography underneath.
    const t1 = window.setTimeout(() => {
      setPhase('exit');
      document.documentElement.classList.remove('is-loading');
    }, reduced ? 300 : 2600);
    const t2 = window.setTimeout(() => {
      setPhase('done');
      try {
        sessionStorage.setItem(SEEN_KEY, '1');
      } catch {
        /* ignore */
      }
    }, reduced ? 600 : 3500);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      document.documentElement.classList.remove('is-loading');
    };
  }, []);

  if (phase === 'done') return null;

  const letters = ['V', 'E', 'G', 'A', '’', 'S'];
  return (
    <div className={`loader ${phase === 'exit' ? 'loader--exit' : ''}`} role="presentation">
      <div className="loader__stage">
        <Logo size={240} className="loader__emblem" priority />
        <div className="loader__horizon" />
        <div className="loader__word" aria-hidden="true">
          {letters.map((l, i) => (
            <span key={i} style={{ animationDelay: `${0.9 + i * 0.08}s` }}>
              {l}
            </span>
          ))}
        </div>
        <div className="loader__sub">Auto Sales · Glass Co. · Houston</div>
        <div className="loader__sheen" />
      </div>
      <div className="loader__curtain" />
    </div>
  );
}
