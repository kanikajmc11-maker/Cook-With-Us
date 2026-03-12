import React, { useState } from 'react';
import { communityMembers } from '../data/recipes';
import './Community.css';

const perks = [
  { icon:'📖', title:'Share Your Recipes',     desc:'Post your favourite recipes and get feedback from our warm community.' },
  { icon:'💬', title:'Connect & Collaborate',  desc:'Discuss techniques, share tips, and find cooking partners worldwide.' },
  { icon:'🏆', title:'Monthly Challenges',     desc:'Compete in themed cooking challenges and win community recognition.' },
  { icon:'👨‍🍳', title:'Learn from Experts',   desc:'Access exclusive Q&As and workshops with professional chefs.' },
  { icon:'🌍', title:'Global Connections',     desc:'Connect with food lovers from over 45 countries worldwide.' },
  { icon:'⭐', title:'Get Featured',           desc:'Top contributors get featured on our homepage and newsletter.' },
];

export default function Community() {
  const [form,   setForm]   = useState({ name:'', email:'', specialty:'' });
  const [joined, setJoined] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email) setJoined(true);
  };

  return (
    <div className="cpage">

      {/* Hero */}
      <section className="cpage__hero">
        <div className="cpage__hero-bg" />
        <div className="container cpage__hero-inner">
          <span className="section-label">Our Family</span>
          <h1 className="section-title cpage__hero-title">Share the Love<br />of Cooking</h1>
          <p className="cpage__hero-sub">
            Meet fellow food enthusiasts, share your creations, and grow together in a warm, supportive community of home cooks worldwide.
          </p>
          <div className="cpage__hero-stats">
            {[['200+','Contributors'],['45','Countries'],['12K+','Members']].map(([v,l], i) => (
              <React.Fragment key={i}>
                {i > 0 && <div className="cpage__divider" />}
                <div className="cpage__stat">
                  <span className="cpage__stat-val">{v}</span>
                  <span className="cpage__stat-lbl">{l}</span>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <div className="container">

        {/* Perks */}
        <section className="cpage__perks">
          <div className="cpage__sec-hd">
            <span className="section-label">Why Join Us</span>
            <h2 className="section-title">Benefits of Joining</h2>
          </div>
          <div className="cpage__perks-grid">
            {perks.map((p, i) => (
              <div key={i} className="perk-card">
                <span className="perk-card__icon">{p.icon}</span>
                <h3 className="perk-card__title">{p.title}</h3>
                <p  className="perk-card__desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Members */}
        <section className="cpage__members">
          <div className="cpage__sec-hd">
            <span className="section-label">Member Spotlight</span>
            <h2 className="section-title">Meet Our Contributors</h2>
            <p className="section-subtitle">These talented home cooks make Cook with Us the vibrant community it is.</p>
          </div>
          <div className="cpage__members-grid">
            {communityMembers.map(m => (
              <div key={m.id} className="member-card">
                <div className="member-card__img-wrap">
                  <img src={m.avatar} alt={m.name} />
                  <span className="member-card__flag">{m.flag}</span>
                </div>
                <div className="member-card__body">
                  <h3 className="member-card__name">{m.name}</h3>
                  <span className="member-card__spec">{m.specialty}</span>
                  <p className="member-card__bio">"{m.bio}"</p>
                  <div className="member-card__stats">
                    <div><span className="member-card__val">{m.recipes}</span><span className="member-card__lbl">Recipes</span></div>
                    <div><span className="member-card__val">{m.followers.toLocaleString()}</span><span className="member-card__lbl">Followers</span></div>
                  </div>
                  <button className="member-card__btn">View Profile →</button>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* Join Form */}
      <section className="cpage__join">
        <div className="cpage__join-bg" />
        <div className="container">
          <div className="cpage__join-inner">

            <div className="cpage__join-text">
              <span className="section-label" style={{ color:'rgba(255,255,255,0.65)' }}>Get Started</span>
              <h2 className="section-title" style={{ color:'white' }}>
                {joined ? `Welcome, ${form.name}! 🎉` : 'Join Our Community'}
              </h2>
              <p style={{ color:'rgba(255,255,255,0.75)', fontSize:17, lineHeight:1.7 }}>
                {joined
                  ? 'Thank you! We\'re thrilled to have you. Check your email for next steps and start exploring recipes!'
                  : 'Sign up to share recipes, connect with other food lovers, and be part of a global culinary community.'}
              </p>
            </div>

            {!joined ? (
              <form className="cpage__form" onSubmit={handleSubmit}>
                <div className="cpage__field">
                  <label>Your Name</label>
                  <input type="text" placeholder="e.g. Jamie Oliver" value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })} required />
                </div>
                <div className="cpage__field">
                  <label>Email Address</label>
                  <input type="email" placeholder="you@example.com" value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })} required />
                </div>
                <div className="cpage__field">
                  <label>Cooking Specialty <span style={{ opacity:.6 }}>(optional)</span></label>
                  <input type="text" placeholder="e.g. Italian Pasta, Vegan Baking…" value={form.specialty}
                    onChange={e => setForm({ ...form, specialty: e.target.value })} />
                </div>
                <button type="submit" className="cpage__submit">🍳 Join Cook with Us →</button>
              </form>
            ) : (
              <div className="cpage__success">
                <div style={{ fontSize: 60 }}>✅</div>
                <p>You're now part of the Cook with Us family!</p>
              </div>
            )}

          </div>
        </div>
      </section>

    </div>
  );
}
