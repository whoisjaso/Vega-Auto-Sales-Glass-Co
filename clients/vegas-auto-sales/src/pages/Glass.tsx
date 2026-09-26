import { GlassReveal } from '../components/GlassReveal';
import { LeadForm } from '../components/LeadForm';
import { StarGlint } from '../components/Brand';
import { business } from '../data/business';
import { useReveal } from '../lib/useReveal';

const SERVICES = [
  {
    title: 'Windshield replacement',
    body: 'Cracks spread with Houston heat and potholes. We remove the damaged glass, prep the frame and set a new windshield with a proper urethane seal.',
  },
  {
    title: 'Door & quarter glass',
    body: 'Shattered side window after a break-in? We clear the door, vacuum the glass out of the cabin and fit a new pane.',
  },
  {
    title: 'Back glass',
    body: 'Rear windows for sedans, SUVs and pickup sliders, with defroster lines where your vehicle calls for them.',
  },
  {
    title: 'Fleet & work trucks',
    body: 'Keep contractors and fleets on the road. Ask about scheduling several vehicles at once.',
  },
];

const STEPS = [
  ['Send the details', 'Year, make, model and which glass. A photo helps.'],
  ['Get your quote', 'We confirm the part and the price before any work begins.'],
  ['Drive in', 'Bring it to 7722 Galveston Rd at your scheduled time.'],
  ['See clearly', 'We check the fit and seal, clean up, and let you know how long to wait before driving.'],
];

export function Glass() {
  useReveal();
  return (
    <>
      <section className="page-hero page-hero--glass">
        <div className="container split split--center">
          <div>
            <p className="eyebrow">The Glass Atelier</p>
            <h1 className="display display--xl">
              Nothing between you <em>and the road.</em>
            </h1>
            <p className="section__lede">
              Auto glass replacement from the same team that sells your next car. We quote clearly, fit carefully and seal it right.
            </p>
            <div className="hero__cta">
              <a href="#quote" className="btn btn--gold">
                Request a Quote
              </a>
              <a href={business.phoneHref} className="btn btn--ghost">
                {business.phoneDisplay}
              </a>
            </div>
          </div>
          <div>
            <GlassReveal />
            <p className="caption">Drag across the glass to compare.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services">
            {SERVICES.map((s, i) => (
              <article key={s.title} className="service reveal" style={{ transitionDelay: `${i * 0.07}s` }}>
                <StarGlint size={14} className="gold" />
                <h3>{s.title}</h3>
                <p className="muted">{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <header className="section__head reveal">
            <p className="eyebrow">The process</p>
            <h2 className="display">
              Four steps to <em>clarity.</em>
            </h2>
          </header>
          <ol className="steps">
            {STEPS.map(([t, b], i) => (
              <li key={t} className="step reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
                <span className="step__n">0{i + 1}</span>
                <h3>{t}</h3>
                <p className="muted">{b}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" id="quote">
        <div className="container split">
          <div className="reveal">
            <p className="eyebrow">Glass quote</p>
            <h2 className="display">
              Tell us about <em>the glass.</em>
            </h2>
            <p className="section__lede">
              We’ll confirm the right part for your vehicle and text back a price. Prefer to talk? Call {business.phoneDisplay}, Monday through Saturday.
            </p>
            <p className="muted">Bought your car from us? Tell us. We take care of our customers first.</p>
          </div>
          <div className="card reveal">
            <LeadForm
              type="glass-quote"
              fields={[
                { name: 'vehicle', label: 'Year, make & model', placeholder: 'e.g. 2016 Honda Accord', required: true },
                {
                  name: 'glass',
                  label: 'Which glass?',
                  type: 'select',
                  options: ['Windshield', 'Driver door', 'Passenger door', 'Rear door', 'Quarter / vent', 'Back glass', 'Not sure'],
                  required: true,
                  half: true,
                },
                { name: 'insurance', label: 'Using insurance?', type: 'select', options: ['No, paying myself', 'Yes', 'Not sure'], half: true },
              ]}
              messagePlaceholder="Anything we should know: sensors, rain-sensing wipers, tint, damage size…"
              submitLabel="Get my glass quote"
              successTitle="Quote request received."
            />
          </div>
        </div>
      </section>
    </>
  );
}
