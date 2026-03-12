import React from 'react';
import { Link } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';
import { recipes, stats, communityMembers } from '../data/recipes';
import './Home.css';

export default function Home() {
  const featured = recipes.filter(r => r.featured);
  const popular  = recipes.slice(0, 6);

  return (
    <div className="home">

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero__blob hero__blob--1" />
        <div className="hero__blob hero__blob--2" />
        <div className="hero__dots" />
        <div className="container hero__inner">

          <div className="hero__content">
            <span className="section-label">🌍 Global Community • 1 500+ Recipes</span>
            <h1 className="hero__title">
              Cook, Share &<br />
              <em>Connect</em> with<br />
              Food Lovers
            </h1>
            <p className="hero__sub">
              Discover thousands of recipes from home cooks around the world. Whether you're a beginner or a seasoned chef, find your next favourite dish right here.
            </p>
            <div className="hero__cta">
              <Link to="/recipes"   className="btn-primary">🍽️ Explore Recipes</Link>
              <Link to="/community" className="btn-secondary">Join Our Community</Link>
            </div>
          </div>

          <div className="hero__visual">
            <div className="hero__grid">
              <div className="hero__card hero__card--big">
                <img src="https://images.unsplash.com/photo-1612874742237-6526221588e3?w=500&q=80" alt="Carbonara" />
                <div className="hero__card-label"><span>⭐ 4.9</span><span>Carbonara</span></div>
              </div>
              <div className="hero__grid-right">
                <div className="hero__card">
                  <img src="https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=400&q=80" alt="Curry" />
                </div>
                <div className="hero__card">
                  <img src="https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&q=80" alt="Tacos" />
                </div>
              </div>
            </div>
            <div className="hero__badge">
              <span className="hero__badge-icon">👨‍🍳</span>
              <div>
                <div className="hero__badge-title">200+ Contributors</div>
                <div className="hero__badge-sub">From 45 countries</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── STATS ── */}
      <section className="stats">
        <div className="container">
          <div className="stats__grid">
            {stats.map((s, i) => (
              <div key={i} className="stats__item">
                <div className="stats__icon">{s.icon}</div>
                <div className="stats__value">{s.value}</div>
                <div className="stats__label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED ── */}
      <section className="home-sec">
        <div className="container">
          <div className="home-sec__hd">
            <div>
              <span className="section-label">Editor's Picks</span>
              <h2 className="section-title">Featured Recipes</h2>
              <p className="section-subtitle">Hand-picked for outstanding flavour, technique, and creativity.</p>
            </div>
            <Link to="/recipes" className="btn-secondary">View All →</Link>
          </div>
          <div className="grid-3">
            {featured.map(r => <RecipeCard key={r.id} recipe={r} size="lg" />)}
          </div>
        </div>
      </section>

      {/* ── POPULAR ── */}
      <section className="home-sec home-sec--tint">
        <div className="container">
          <div className="home-sec__hd">
            <div>
              <span className="section-label">Trending Now</span>
              <h2 className="section-title">Most Popular</h2>
              <p className="section-subtitle">The recipes everyone's cooking this week.</p>
            </div>
            <Link to="/recipes" className="btn-secondary">See More →</Link>
          </div>
          <div className="grid-3">
            {popular.map(r => <RecipeCard key={r.id} recipe={r} />)}
          </div>
        </div>
      </section>

      {/* ── TIPS TEASER ── */}
      <section className="home-sec">
        <div className="container">
          <div className="tips-teaser">
            <div className="tips-teaser__text">
              <span className="section-label">Level Up</span>
              <h2 className="section-title">Master the Art of Cooking</h2>
              <p className="section-subtitle">
                Our Tips & Tricks section is packed with practical techniques, clever hacks, and expert advice from chefs around the world.
              </p>
              <Link to="/tips" className="btn-primary" style={{ marginTop: 8, alignSelf: 'flex-start' }}>
                Explore Tips & Tricks →
              </Link>
            </div>
            <div className="tips-teaser__cards">
              {[
                { icon: '🔥', text: 'Use high heat for perfect sears' },
                { icon: '🧂', text: 'Season pasta water generously' },
                { icon: '🍋', text: 'Acid balances rich flavours' },
                { icon: '🔪', text: 'Sharp knives are safer knives' },
              ].map((item, i) => (
                <div key={i} className="tips-teaser__card">
                  <span className="tips-teaser__card-icon">{item.icon}</span>
                  <span className="tips-teaser__card-text">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── COMMUNITY TEASER ── */}
      <section className="community-cta">
        <div className="community-cta__bg" />
        <div className="container">
          <div className="community-cta__inner">
            <span className="section-label" style={{ color: 'rgba(255,255,255,0.65)' }}>Join the Family</span>
            <h2 className="section-title" style={{ color: 'white' }}>Share the Love of Cooking</h2>
            <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: 16, maxWidth: 480, lineHeight: 1.7 }}>
              Connect with food enthusiasts worldwide. Share your creations, get inspired, and grow together.
            </p>
            <div className="community-cta__avatars">
              {communityMembers.slice(0, 5).map(m => (
                <img key={m.id} src={m.avatar} alt={m.name} className="community-cta__avatar" />
              ))}
              <div className="community-cta__more">+195</div>
            </div>
            <Link to="/community" className="btn-primary community-cta__btn">
              Join Our Community
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
