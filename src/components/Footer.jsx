import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) { setSubscribed(true); setEmail(''); }
  };

  return (
    <footer className="footer">
      <div className="footer__body">
        <div className="container">
          <div className="footer__grid">

            <div className="footer__brand">
              <div className="footer__logo">
                <span>🍳</span>
                <span className="footer__logo-text">Cook <em>with Us</em></span>
              </div>
              <p className="footer__tagline">
                A community where every recipe tells a story and every cook has a place.
              </p>
              <div className="footer__socials">
                {['📸','📌','▶️','🎵'].map((icon, i) => (
                  <a key={i} href="#top" className="footer__social">{icon}</a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="footer__heading">Explore</h4>
              <ul className="footer__list">
                <li><Link to="/recipes">All Recipes</Link></li>
                <li><Link to="/recipes">By Cuisine</Link></li>
                <li><Link to="/recipes">By Category</Link></li>
                <li><Link to="/tips">Tips & Tricks</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="footer__heading">Community</h4>
              <ul className="footer__list">
                <li><Link to="/community">Join Us</Link></li>
                <li><Link to="/community">Contributors</Link></li>
                <li><Link to="/community">Events</Link></li>
                <li><a href="#top">Newsletter</a></li>
              </ul>
            </div>

            <div className="footer__newsletter">
              <h4 className="footer__heading">Stay Inspired</h4>
              <p>Get weekly recipes and cooking tips delivered to your inbox.</p>
              {subscribed ? (
                <p className="footer__subscribed">✅ You're subscribed!</p>
              ) : (
                <form className="footer__form" onSubmit={handleSubscribe}>
                  <input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                  />
                  <button type="submit" className="btn-primary">Subscribe</button>
                </form>
              )}
            </div>

          </div>

          <div className="footer__bottom">
            <p>© 2025 Cook with Us. Made with ❤️ by food lovers for food lovers.</p>
            <div className="footer__bottom-links">
              <a href="#top">Privacy</a>
              <a href="#top">Terms</a>
              <a href="#top">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
