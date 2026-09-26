import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { LoneStar, StarGlint } from '../components/Brand';
import { CarSilhouette } from '../components/CarSilhouette';
import { GlassReveal } from '../components/GlassReveal';
import { VehicleCard } from '../components/VehicleCard';
import { business, isOpenNow } from '../data/business';
import { currency, estimatePayment } from '../data/inventory';
import { getFeatured, getInventory } from '../lib/inventoryStore';
import { useReveal } from '../lib/useReveal';

const MARQUES = ['Porsche', 'Mercedes-Benz', 'BMW', 'Lexus', 'Audi', 'Land Rover', 'Cadillac', 'Toyota', 'Ford', 'Chevrolet', 'Ram', 'GMC'];

function Hero() {
  return (
    <section className="hero">
      <div className="hero__sky" aria-hidden="true">
        <LoneStar size={30} className="hero__vega" />
      </div>
      <div className="container hero__inner">
        <p className="eyebrow hero__eyebrow">Pre-owned automobiles · Auto glass · Houston</p>
        <h1 className="hero__title">
          Brilliance,
          <br />
          <em>seen clearly.</em>
        </h1>
        <p className="hero__lede">
          Hand-selected cars, trucks and SUVs with easy credit, and precise auto glass replacement. One lot on Galveston Road, one standard for both.
        </p>
        <div className="hero__cta">
          <Link to="/inventory" className="btn btn--gold">
            Explore the Collection
          </Link>
          <Link to="/glass" className="btn btn--ghost">
            Request a Glass Quote
          </Link>
        </div>
      </div>
      <div className="hero__car" aria-hidden="true">
        <CarSilhouette body="Coupe" variant="line" className="hero__car-line" />
        <CarSilhouette body="Coupe" paint="#111214" className="hero__car-solid" />
        <div className="hero__sheen" />
        <StarGlint size={22} className="hero__glint" />
        <div className="hero__floor" />
      </div>
      <div className="hero__scroll" aria-hidden="true">
        <span />
      </div>
    </section>
  );
}

function ProofStrip() {
  const openNow = isOpenNow();
  return (
    <section className="proof" aria-label="At a glance">
      <div className="container proof__row">
        <div className="proof__item">
          <strong>
            {business.rating.score}
            <LoneStar size={13} className="gold" />
          </strong>
          <span>{business.rating.count} Google reviews</span>
        </div>
        <div className="proof__item">
          <strong>Easy credit</strong>
          <span>Payments that make sense</span>
        </div>
        <div className="proof__item">
          <strong>{openNow ? 'Open now' : 'Mon – Sat'}</strong>
          <span>9:00 AM – 6:00 PM</span>
        </div>
        <div className="proof__item">
          <strong>Se habla español</strong>
          <span>Bilingual team</span>
        </div>
      </div>
    </section>
  );
}

function TwoCrafts() {
  return (
    <section className="section">
      <div className="container">
        <header className="section__head reveal">
          <p className="eyebrow">The House of Vega’s</p>
          <h2 className="display">
            Two crafts. <em>One standard.</em>
          </h2>
          <p className="section__lede">
            We sell the car, and we can replace the glass you look through. The work is different, but we inspect, price and hand over both the same careful way.
          </p>
        </header>
        <div className="crafts">
          <Link to="/inventory" className="craft reveal">
            <div className="craft__art">
              <CarSilhouette body="SUV" paint="#1b1e24" className="craft__car" />
            </div>
            <div className="craft__body">
              <span className="craft__num">I.</span>
              <h3>The Collection</h3>
              <p>Pre-owned cars, trucks and SUVs, from daily sedans to European marques. Each one priced plainly.</p>
              <span className="link-arrow">View inventory</span>
            </div>
          </Link>
          <Link to="/glass" className="craft reveal" style={{ transitionDelay: '0.1s' }}>
            <div className="craft__art craft__art--glass">
              <div className="pane">
                <div className="pane__sheen" />
              </div>
            </div>
            <div className="craft__body">
              <span className="craft__num">II.</span>
              <h3>The Glass Atelier</h3>
              <p>Windshield, door and back glass replacement, fitted cleanly and sealed properly, for nearly any make.</p>
              <span className="link-arrow">Get a glass quote</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

function Featured() {
  const featured = getFeatured();
  const total = getInventory().length;
  return (
    <section className="section section--tight">
      <div className="container">
        <header className="section__head section__head--split reveal">
          <div>
            <p className="eyebrow">On the lot</p>
            <h2 className="display">
              The <em>Collection.</em>
            </h2>
          </div>
          <Link to="/inventory" className="link-arrow">
            All {total} vehicles
          </Link>
        </header>
        <div className="grid grid--4">
          {featured.map((v, i) => (
            <VehicleCard key={v.slug} v={v} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const row = [...MARQUES, ...MARQUES];
  return (
    <section className="marquee" aria-label="Marques we source">
      <div className="marquee__track">
        {row.map((m, i) => (
          <span key={i} className="marquee__item">
            {m}
            <LoneStar size={11} className="gold" />
          </span>
        ))}
      </div>
    </section>
  );
}

function GlassSection() {
  return (
    <section className="section glass-section">
      <div className="container split">
        <div className="reveal">
          <p className="eyebrow">The Glass Atelier</p>
          <h2 className="display">
            A clear view is <em>not optional.</em>
          </h2>
          <p className="section__lede">
            A cracked windshield changes how you see the road. We replace it with properly fitted glass and a clean seal, and we do it at the same address where we sell cars.
          </p>
          <ul className="ticks">
            <li>Windshield replacement</li>
            <li>Door, vent & quarter glass</li>
            <li>Back glass & rear windows</li>
            <li>Cars, trucks, SUVs, work vans</li>
          </ul>
          <div className="hero__cta">
            <Link to="/glass" className="btn btn--gold">
              Request a Quote
            </Link>
            <a href={business.phoneHref} className="btn btn--ghost">
              Call the shop
            </a>
          </div>
        </div>
        <div className="reveal" style={{ transitionDelay: '0.12s' }}>
          <GlassReveal />
          <p className="caption">Drag across the glass to compare.</p>
        </div>
      </div>
    </section>
  );
}

function PaymentTeaser() {
  const [price, setPrice] = useState(18000);
  const monthly = useMemo(() => estimatePayment(price), [price]);
  return (
    <section className="section finance-band">
      <div className="container split split--center">
        <div className="reveal">
          <p className="eyebrow">Financing</p>
          <h2 className="display">
            Reasonable payments. <em>Easy credit.</em>
          </h2>
          <p className="section__lede">
            That’s how customers describe buying here. First-time buyers, rebuilding credit, or paid in cash: tell us where you are and we’ll show you the payment before you choose the car.
          </p>
          <Link to="/financing" className="btn btn--gold">
            Get Pre-Qualified
          </Link>
        </div>
        <div className="calc reveal" style={{ transitionDelay: '0.1s' }}>
          <div className="calc__row">
            <span className="eyebrow">Vehicle price</span>
            <strong>{currency(price)}</strong>
          </div>
          <input
            type="range"
            min={6000}
            max={60000}
            step={500}
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            aria-label="Vehicle price"
            className="range"
          />
          <div className="calc__out">
            <span className="calc__num">{currency(monthly)}</span>
            <span className="muted">/ month, estimated</span>
          </div>
          <p className="fine">
            Illustration only: 15% down, 12.9% APR, 48 months. Your rate and terms depend on credit approval.
          </p>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="section">
      <div className="container">
        <header className="section__head reveal">
          <p className="eyebrow">From our customers</p>
          <h2 className="display">
            {business.rating.score} stars, <em>{business.rating.count} reviews.</em>
          </h2>
          <p className="section__lede">
            {business.rating.fiveStar} of our {business.rating.count} Google reviews are five stars. Here’s what people say.
          </p>
        </header>
        <div className="quotes">
          {business.reviews.map((r, i) => (
            <figure key={r.author} className="quote reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              <LoneStar size={17} className="gold" />
              <blockquote>“{r.quote}”</blockquote>
              {'translation' in r && r.translation && <p className="muted quote__tr">{r.translation}</p>}
              <figcaption>
                {r.author} <span className="muted">· {r.source}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function VisitBlock() {
  const openNow = isOpenNow();
  return (
    <section className="section visit">
      <div className="container split split--center">
        <div className="reveal">
          <p className="eyebrow">Visit the lot</p>
          <h2 className="display">
            7722 <em>Galveston Road.</em>
          </h2>
          <p className="section__lede">
            In Edgebrook, {business.crossStreets.toLowerCase()}. Come see the cars in person, bring your vehicle in for a glass estimate, or just come by and talk it through.
          </p>
          <dl className="facts">
            <div>
              <dt>Hours</dt>
              <dd>
                Mon – Sat, 9 AM – 6 PM <span className={`status ${openNow ? 'status--open' : ''}`}><span className="status__dot" />{openNow ? 'Open now' : 'Closed now'}</span>
                <br />
                <span className="muted">Sunday closed</span>
              </dd>
            </div>
            <div>
              <dt>Phone</dt>
              <dd>
                <a href={business.phoneHref}>{business.phoneDisplay}</a>
              </dd>
            </div>
            <div>
              <dt>We accept</dt>
              <dd>{business.payments.join(' · ')}</dd>
            </div>
          </dl>
          <div className="hero__cta">
            <a href={business.mapsHref} target="_blank" rel="noreferrer" className="btn btn--gold">
              Get Directions
            </a>
            <a href={business.smsHref} className="btn btn--ghost">
              Text Us
            </a>
          </div>
        </div>
        <div className="map reveal" aria-hidden="true">
          <svg viewBox="0 0 400 320">
            <defs>
              <radialGradient id="map-glow" cx="0.5" cy="0.5" r="0.5">
                <stop offset="0" stopColor="#d9a54e" stopOpacity="0.35" />
                <stop offset="1" stopColor="#d9a54e" stopOpacity="0" />
              </radialGradient>
            </defs>
            <g stroke="#2b2c30" strokeWidth="1">
              {Array.from({ length: 11 }).map((_, i) => (
                <line key={`h${i}`} x1="0" x2="400" y1={i * 32} y2={i * 32 + 14} />
              ))}
              {Array.from({ length: 13 }).map((_, i) => (
                <line key={`v${i}`} y1="0" y2="320" x1={i * 34} x2={i * 34 - 18} />
              ))}
            </g>
            <path d="M-10 40 C120 110 250 170 420 290" stroke="#6b6d72" strokeWidth="6" fill="none" />
            <path d="M-10 40 C120 110 250 170 420 290" stroke="#0b0b0c" strokeWidth="1.2" strokeDasharray="6 8" fill="none" />
            <path d="M300 -10 C300 120 290 220 250 330" stroke="#3d3f44" strokeWidth="10" fill="none" />
            <text x="40" y="84" className="map__label" transform="rotate(22 40 84)">GALVESTON RD</text>
            <circle cx="198" cy="148" r="70" fill="url(#map-glow)" className="map__pulse" />
            <circle cx="198" cy="148" r="6" fill="#d9a54e" />
            <circle cx="198" cy="148" r="14" fill="none" stroke="#d9a54e" strokeOpacity="0.6" className="map__ring" />
            <text x="214" y="136" className="map__pin">VEGA’S</text>
            <text x="214" y="152" className="map__sub">7722 Galveston Rd</text>
          </svg>
        </div>
      </div>
    </section>
  );
}

export function Home() {
  useReveal();
  return (
    <>
      <Hero />
      <ProofStrip />
      <TwoCrafts />
      <Featured />
      <Marquee />
      <GlassSection />
      <PaymentTeaser />
      <Reviews />
      <VisitBlock />
    </>
  );
}
