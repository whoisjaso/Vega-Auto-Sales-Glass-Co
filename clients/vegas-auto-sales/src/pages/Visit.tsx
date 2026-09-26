import { LeadForm } from '../components/LeadForm';
import { useReveal } from '../lib/useReveal';
import { VisitBlock } from './Home';

export function Visit() {
  useReveal();
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Visit & contact</p>
          <h1 className="display display--xl">
            Come see it <em>in person.</em>
          </h1>
          <p className="section__lede">Walk the lot, sit in the car, bring your vehicle in for glass. We’re on Galveston Road six days a week.</p>
        </div>
      </section>
      <VisitBlock />
      <section className="section section--tight">
        <div className="container split">
          <div className="reveal">
            <p className="eyebrow">Write to us</p>
            <h2 className="display">
              Questions, trade-ins, <em>anything.</em>
            </h2>
            <p className="section__lede">Leave a note and a number. A real person from our team will call or text you back. Se habla español.</p>
          </div>
          <div className="card reveal">
            <LeadForm
              type="contact"
              fields={[
                { name: 'topic', label: 'Topic', type: 'select', options: ['Buying a vehicle', 'Financing', 'Auto glass', 'Selling / trade-in', 'Something else'], required: true },
                { name: 'language', label: 'Preferred language', type: 'select', options: ['English', 'Español'], half: true },
                { name: 'contactBy', label: 'Best way to reach you', type: 'select', options: ['Text', 'Call', 'Email'], half: true },
              ]}
              submitLabel="Send message"
            />
          </div>
        </div>
      </section>
    </>
  );
}
