import React, { useState } from 'react';
import { tipsAndTricks } from '../data/recipes';
import './Tips.css';

const tipCats = ['All','Pasta','Technique','Flavor','Baking','Meat'];

const proTips = [
  { icon:'🗂️', title:'Mise en Place',         desc:'Prepare and organise all ingredients before cooking. This French technique prevents rushed mistakes and makes cooking flow naturally.' },
  { icon:'🌡️', title:'Temperature Control',   desc:'Understanding heat zones — blazing hot for searing, medium for sautéing, gentle low for sauces — is the foundation of cooking everything well.' },
  { icon:'🥣', title:'Emulsification',         desc:'Make silky sauces by slowly incorporating fat into a water-based liquid while whisking. Think hollandaise, vinaigrette, pasta sauce.' },
  { icon:'✨', title:'Caramelisation & Browning',desc:'Caramelisation happens to sugars above 320°F. Maillard browning happens to proteins above 280°F. Both add extraordinary depth and colour.' },
];

const quickTips = [
  { icon:'🧂', text:'Season every layer'   },
  { icon:'🔥', text:'Hot pan, then fat'    },
  { icon:'⏱️', text:'Let meat rest always' },
  { icon:'🍋', text:'Finish with acid'     },
  { icon:'🌡️', text:'Use a thermometer'   },
  { icon:'🫙', text:'Save pasta water'     },
];

export default function Tips() {
  const [activeCat, setActiveCat] = useState('All');
  const [expanded,  setExpanded]  = useState(null);

  const filtered = activeCat === 'All' ? tipsAndTricks : tipsAndTricks.filter(t => t.category === activeCat);

  return (
    <div className="tpage">

      {/* Hero */}
      <section className="tpage__hero">
        <div className="tpage__hero-bg" />
        <div className="container tpage__hero-inner">
          <span className="section-label">Level Up Your Cooking</span>
          <h1 className="section-title tpage__hero-title">Tips & Tricks</h1>
          <p className="tpage__hero-sub">
            From kitchen basics to advanced techniques — expert advice that transforms everyday cooking.
          </p>
        </div>
      </section>

      {/* Quick banner */}
      <div className="tpage__banner">
        <div className="container">
          <div className="tpage__banner-grid">
            {quickTips.map((t, i) => (
              <div key={i} className="tpage__banner-item">
                <span>{t.icon}</span>
                <span className="tpage__banner-text">{t.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container">

        {/* Category pills */}
        <div className="tpage__cats">
          {tipCats.map(c => (
            <button key={c} className={`tpage__cat${activeCat === c ? ' tpage__cat--active' : ''}`} onClick={() => setActiveCat(c)}>
              {c}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="tpage__grid">
          {filtered.map(tip => (
            <div key={tip.id} className={`tcard${expanded === tip.id ? ' tcard--open' : ''}`}>
              <div className="tcard__head">
                <div className="tcard__icon-wrap">{tip.icon}</div>
                <div className="tcard__meta">
                  <span className={`badge badge-easy`}>{tip.category}</span>
                  <span className="tcard__time">📖 {tip.readTime}</span>
                </div>
              </div>
              <h3 className="tcard__title">{tip.title}</h3>
              <p  className="tcard__summary">{tip.summary}</p>

              {expanded === tip.id && (
                <div className="tcard__detail">
                  <p>{tip.detail}</p>
                  <div className="tcard__author">
                    <img src={tip.authorAvatar} alt={tip.author} />
                    <span>By {tip.author}</span>
                  </div>
                </div>
              )}

              <button className="tcard__toggle" onClick={() => setExpanded(expanded === tip.id ? null : tip.id)}>
                {expanded === tip.id ? 'Show Less ↑' : 'Read More ↓'}
              </button>
            </div>
          ))}
        </div>

        {/* Pro tips */}
        <section className="tpage__pro">
          <div className="tpage__pro-hd">
            <span className="section-label">Advanced Techniques</span>
            <h2 className="section-title">Pro Chef Secrets</h2>
            <p className="section-subtitle">Elevate your home cooking with these professional techniques.</p>
          </div>
          <div className="tpage__pro-grid">
            {proTips.map((p, i) => (
              <div key={i} className="pro-card">
                <span className="pro-card__icon">{p.icon}</span>
                <h4 className="pro-card__title">{p.title}</h4>
                <p  className="pro-card__desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
