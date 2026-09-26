import type { ReactNode } from 'react';
import type { BodyStyle } from '../data/inventory';
import { Scene, type SceneKind } from './Scene';

interface Props {
  title: string;
  lede?: ReactNode;
  kind?: SceneKind;
  body?: BodyStyle;
  paint?: string;
  photo?: string;
  children?: ReactNode;
}

/** An inner page's stage: a shorter picture plane with the title set low-left. */
export function PageHero({ title, lede, kind = 'studio', body, paint, photo, children }: Props) {
  return (
    <section className="page-hero">
      <Scene kind={kind} body={body} paint={paint} photo={photo} className="page-hero__scene" />
      <div className="page-hero__copy container">
        <h1 className="page-hero__title">{title}</h1>
        {lede && <p className="page-hero__lede">{lede}</p>}
        {children}
      </div>
    </section>
  );
}
