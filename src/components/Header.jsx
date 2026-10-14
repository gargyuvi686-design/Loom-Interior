import { useState } from 'react';
import { navLinks } from '../data/content';

export default function Header() {
  const [active, setActive] = useState('Projects');
  return (
    <header className="header">
      <nav className="nav" aria-label="Main">
        <a className="logo" href="#top" aria-label="Loom Interiors home">
          Loom <span>Interiors</span>
        </a>
        <ul className="nav-links">
          {navLinks.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className={active === l.label ? 'active' : ''}
                onClick={() => setActive(l.label)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a className="btn btn-dark" href="#get-started">Book Consultation &rarr;</a>
        <button className="icon-btn" aria-label="User account" type="button">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
            <circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 4-7 8-7s8 3 8 7" />
          </svg>
        </button>
      </nav>
    </header>
  );
}
