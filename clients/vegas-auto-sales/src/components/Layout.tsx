import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { business, isOpenNow } from '../data/business';
import { LoneStar, Wordmark } from './Brand';
import { Loader } from './Loader';

const NAV = [
  { to: '/inventory', label: 'The Collection' },
  { to: '/glass', label: 'Glass Atelier' },
  { to: '/financing', label: 'Financing' },
  { to: '/visit', label: 'Visit' },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const openNow = isOpenNow();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <header className={`header ${scrolled ? 'header--solid' : ''} ${open ? 'header--open' : ''}`}>
      <div className="header__bar container">
        <Link to="/" className="header__brand" aria-label="Vega's Auto Sales and Glass Co., home">
          <Wordmark compact />
        </Link>
        <nav className="header__nav" aria-label="Primary">
          {NAV.map((n) => (
            <NavLink key={n.to} to={n.to} className="header__link">
              {n.label}
            </NavLink>
          ))}
        </nav>
        <div className="header__actions">
          <span className={`status ${openNow ? 'status--open' : ''}`}>
            <span className="status__dot" />
            {openNow ? 'Open now' : 'Opens 9 AM'}
          </span>
          <a className="btn btn--ghost btn--sm" href={business.phoneHref}>
            {business.phoneDisplay}
          </a>
          <button
            className="header__toggle"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
      <div id="mobile-nav" className="mobile-nav" hidden={!open}>
        <nav aria-label="Mobile">
          {NAV.map((n, i) => (
            <NavLink key={n.to} to={n.to} className="mobile-nav__link" style={{ transitionDelay: `${0.05 * i + 0.1}s` }}>
              {n.label}
            </NavLink>
          ))}
        </nav>
        <div className="mobile-nav__foot">
          <a className="btn btn--gold" href={business.phoneHref}>
            Call {business.phoneDisplay}
          </a>
          <p>
            {business.street}, {business.cityLine}
            <br />
            Mon – Sat, 9 AM – 6 PM · Se habla español
          </p>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="tricolor" aria-hidden="true" />
      <div className="container footer__grid">
        <div className="footer__brand">
          <Wordmark />
          <p className="footer__lede">
            Pre-owned automobiles and auto glass on Galveston Road, held to one standard: what you see is exactly what you get.
          </p>
        </div>
        <div>
          <h4 className="eyebrow">Visit</h4>
          <p>
            {business.street}
            <br />
            {business.cityLine}
            <br />
            <span className="muted">{business.crossStreets}</span>
          </p>
          <a className="link-arrow" href={business.mapsHref} target="_blank" rel="noreferrer">
            Directions
          </a>
        </div>
        <div>
          <h4 className="eyebrow">Hours</h4>
          {business.hours.map((h) => (
            <p key={h.days}>
              {h.days}
              <br />
              <span className="muted">{h.time}</span>
            </p>
          ))}
        </div>
        <div>
          <h4 className="eyebrow">Contact</h4>
          <p>
            <a href={business.phoneHref}>{business.phoneDisplay}</a>
            <br />
            <a href={business.smsHref}>Text us</a>
            <br />
            <a href={business.facebookHref} target="_blank" rel="noreferrer">
              Facebook
            </a>
          </p>
          <p className="muted">Se habla español</p>
        </div>
      </div>
      <div className="container footer__base">
        <span>
          <LoneStar size={11} /> © {new Date().getFullYear()} {business.name} All rights reserved.
        </span>
        <span className="muted">
          Brand names referenced describe pre-owned vehicles we sell; Vega’s is an independent dealer. Prices exclude tax, title, license and fees.
        </span>
      </div>
    </footer>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);
  return null;
}

function MobileDock() {
  return (
    <div className="dock">
      <a href={business.phoneHref}>Call</a>
      <a href={business.smsHref}>Text</a>
      <Link to="/inventory">Inventory</Link>
      <a href={business.mapsHref} target="_blank" rel="noreferrer">
        Directions
      </a>
    </div>
  );
}

export function Layout() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Loader />
      <ScrollToTop />
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <MobileDock />
    </>
  );
}
