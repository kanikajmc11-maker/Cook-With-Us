import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const navLinks = [
  { to: '/',          label: 'Home' },
  { to: '/recipes',   label: 'Recipes' },
  { to: '/tips',      label: 'Tips & Tricks' },
  { to: '/community', label: 'Community' },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner">

        <Link to="/" className="navbar__logo">
          <span>🍳</span>
          <span className="navbar__logo-text">Cook <em>with Us</em></span>
        </Link>

        <ul className="navbar__links">
          {navLinks.map(l => (
            <li key={l.to}>
              <Link to={l.to} className={`navbar__link${location.pathname === l.to ? ' navbar__link--active' : ''}`}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="navbar__right">
          <Link to="/community" className="btn-primary navbar__cta">Join Community</Link>
          <button
            className={`navbar__burger${menuOpen ? ' navbar__burger--open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      <div className={`navbar__mobile${menuOpen ? ' navbar__mobile--open' : ''}`}>
        {navLinks.map(l => (
          <Link key={l.to} to={l.to} className={`navbar__mobile-link${location.pathname === l.to ? ' navbar__mobile-link--active' : ''}`}>
            {l.label}
          </Link>
        ))}
        <Link to="/community" className="btn-primary" style={{ marginTop: 12, justifyContent: 'center' }}>
          Join Community
        </Link>
      </div>
    </nav>
  );
}
