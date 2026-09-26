import { Link } from 'react-router-dom';
import { currency, estimatePayment, miles, vehicleTitle, type Vehicle } from '../data/inventory';
import { CarSilhouette } from './CarSilhouette';

export function VehicleStage({ v, large = false }: { v: Vehicle; large?: boolean }) {
  if (v.photos?.length) {
    return (
      <div className={`stage ${large ? 'stage--large' : ''}`}>
        <img src={v.photos[0]} alt={vehicleTitle(v)} loading="lazy" />
      </div>
    );
  }
  return (
    <div className={`stage ${large ? 'stage--large' : ''}`}>
      <div className="stage__light" />
      <CarSilhouette body={v.body} paint={v.paint} className="stage__car" title={`${v.exterior} ${vehicleTitle(v)}`} />
      <div className="stage__floor" />
      <span className="stage__note">Photos on request</span>
    </div>
  );
}

export function VehicleCard({ v, index = 0 }: { v: Vehicle; index?: number }) {
  return (
    <article className="vcard reveal" style={{ transitionDelay: `${(index % 3) * 0.08}s` }}>
      <Link to={`/inventory/${v.slug}`} className="vcard__link">
        <VehicleStage v={v} />
        <div className="vcard__body">
          <div className="vcard__make eyebrow">{v.make}</div>
          <h3 className="vcard__title">
            {v.year} {v.model}
            {v.trim && <span className="vcard__trim"> {v.trim}</span>}
          </h3>
          <div className="vcard__meta">
            <span>{miles(v.mileage)}</span>
            <span>{v.drivetrain}</span>
            <span>{v.exterior}</span>
          </div>
          <div className="vcard__price">
            <strong>{currency(v.price)}</strong>
            <span className="muted">est. {currency(estimatePayment(v.price))}/mo</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
