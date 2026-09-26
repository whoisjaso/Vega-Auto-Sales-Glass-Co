import { Link, useParams } from 'react-router-dom';
import { LeadForm } from '../components/LeadForm';
import { VehicleCard, VehicleStage } from '../components/VehicleCard';
import { business } from '../data/business';
import { currency, estimatePayment, miles, vehicleTitle } from '../data/inventory';
import { getInventory, getVehicle } from '../lib/inventoryStore';
import { useReveal } from '../lib/useReveal';

export function VehicleDetail() {
  const { slug = '' } = useParams();
  const v = getVehicle(slug);
  useReveal([slug]);

  if (!v) {
    return (
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Not found</p>
          <h1 className="display">
            This one has <em>already left the lot.</em>
          </h1>
          <Link to="/inventory" className="btn btn--gold">
            Back to the Collection
          </Link>
        </div>
      </section>
    );
  }

  const title = vehicleTitle(v);
  const smsBody = encodeURIComponent(`Hi Vega's, I'm interested in the ${title} (stock ${v.stock}) listed at ${currency(v.price)}.`);
  const related = getInventory()
    .filter((o) => o.slug !== v.slug && (o.body === v.body || o.make === v.make))
    .slice(0, 3);
  const specs: [string, string][] = [
    ['Mileage', miles(v.mileage)],
    ['Exterior', v.exterior],
    ['Interior', v.interior],
    ['Engine', v.engine],
    ['Transmission', v.transmission],
    ['Drivetrain', v.drivetrain],
    ['Body', v.body],
    ['Stock #', v.stock],
  ];

  return (
    <>
      <section className="detail">
        <div className="container">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/inventory">The Collection</Link> <span>/</span> <span>{v.make}</span>
          </nav>
          <div className="detail__grid">
            <div>
              <VehicleStage v={v} large />
            </div>
            <aside className="detail__panel">
              <p className="eyebrow">{v.make}</p>
              <h1 className="detail__title">
                {v.year} {v.model}
                {v.trim && <em> {v.trim}</em>}
              </h1>
              <div className="detail__price">
                <strong>{currency(v.price)}</strong>
                <span className="muted">est. {currency(estimatePayment(v.price))}/mo with approved credit</span>
              </div>
              <div className="detail__actions">
                <a className="btn btn--gold btn--block" href={`${business.smsHref}?&body=${smsBody}`}>
                  Text about this car
                </a>
                <a className="btn btn--ghost btn--block" href={business.phoneHref}>
                  Call {business.phoneDisplay}
                </a>
                <Link className="btn btn--ghost btn--block" to={`/financing?vehicle=${v.slug}`}>
                  Get pre-qualified
                </Link>
              </div>
              <ul className="ticks ticks--compact">
                {v.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </aside>
          </div>

          <div className="detail__lower">
            <div className="reveal">
              <h2 className="h3">Specifications</h2>
              <dl className="specs">
                {specs.map(([k, val]) => (
                  <div key={k}>
                    <dt>{k}</dt>
                    <dd>{val}</dd>
                  </div>
                ))}
              </dl>
              <p className="fine">
                Price excludes tax, title, license and dealer fees. Vehicle history report available on request. Please confirm availability before visiting.
              </p>
            </div>
            <div className="card reveal">
              <h2 className="h3">Schedule a viewing</h2>
              <p className="muted">Pick a time and we’ll have it pulled up front, washed and ready.</p>
              <LeadForm
                type="vehicle-inquiry"
                vehicle={`${title} · ${v.stock}`}
                fields={[
                  { name: 'when', label: 'Preferred day', type: 'select', options: ['Today', 'Tomorrow', 'This week', 'Just have questions'], half: true },
                  { name: 'trade', label: 'Trading in?', type: 'select', options: ['No', 'Yes'], half: true },
                ]}
                submitLabel="Request viewing"
                successTitle="Your viewing request is in."
              />
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section section--tight">
          <div className="container">
            <h2 className="display reveal">
              You may <em>also consider.</em>
            </h2>
            <div className="grid grid--3">
              {related.map((r, i) => (
                <VehicleCard key={r.slug} v={r} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
