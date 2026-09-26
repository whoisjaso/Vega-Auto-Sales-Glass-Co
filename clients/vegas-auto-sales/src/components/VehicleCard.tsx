import { Link } from 'react-router-dom';
import { currency, estimatePayment, miles, vehicleTitle, type Vehicle } from '../data/inventory';
import { CarSilhouette } from './CarSilhouette';
import { IconArrowRight } from './Icons';

/** The vehicle on a pale studio sweep, or its first photograph. */
export function VehicleStage({ v, large = false }: { v: Vehicle; large?: boolean }) {
  return (
    <div className={`stage ${large ? 'stage--large' : ''}`}>
      {v.photos?.length ? (
        <img src={v.photos[0]} alt={vehicleTitle(v)} loading="lazy" />
      ) : (
        <>
          <CarSilhouette body={v.body} paint={v.paint} className="stage__car" title={`${v.exterior} ${vehicleTitle(v)}`} />
          <span className="stage__note">Photos on request</span>
        </>
      )}
    </div>
  );
}

export function VehicleCard({ v, index = 0 }: { v: Vehicle; index?: number }) {
  return (
    <article className="vcard reveal" style={{ transitionDelay: `${(index % 3) * 0.06}s` }}>
      <Link to={`/inventory/${v.slug}`} className="vcard__link">
        <VehicleStage v={v} />
        <div className="vcard__body">
          <p className="vcard__make">{v.make}</p>
          <h3 className="vcard__title">
            {v.year} {v.model}
            {v.trim && <span> {v.trim}</span>}
          </h3>
          <p className="vcard__meta">
            {miles(v.mileage)} · {v.drivetrain} · {v.exterior}
          </p>
          <div className="vcard__foot">
            <div>
              <strong>{currency(v.price)}</strong>
              <span>est. {currency(estimatePayment(v.price))}/mo</span>
            </div>
            <span className="arrow-btn arrow-btn--ink" aria-hidden="true">
              <IconArrowRight size={18} />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
