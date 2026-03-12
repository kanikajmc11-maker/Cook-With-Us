import React, { useState, useMemo } from 'react';
import RecipeCard from '../components/RecipeCard';
import { recipes, categories, cuisines } from '../data/recipes';
import './Recipes.css';

const difficulties = ['All', 'Easy', 'Medium', 'Hard'];
const sortOptions   = [
  { value: 'rating',  label: 'Top Rated' },
  { value: 'reviews', label: 'Most Reviews' },
  { value: 'time',    label: 'Cook Time' },
];

export default function Recipes() {
  const [cat,    setCat]    = useState('all');
  const [cuisine,setCuisine]= useState('All');
  const [diff,   setDiff]   = useState('All');
  const [search, setSearch] = useState('');
  const [sort,   setSort]   = useState('rating');

  const filtered = useMemo(() => {
    return recipes
      .filter(r => {
        if (cat    !== 'all' && r.category !== cat)     return false;
        if (cuisine !== 'All' && r.cuisine !== cuisine) return false;
        if (diff    !== 'All' && r.difficulty !== diff)  return false;
        if (search) {
          const q = search.toLowerCase();
          if (!r.title.toLowerCase().includes(q) && !r.cuisine.toLowerCase().includes(q) && !r.category.toLowerCase().includes(q)) return false;
        }
        return true;
      })
      .sort((a, b) => {
        if (sort === 'rating')  return b.rating  - a.rating;
        if (sort === 'reviews') return b.reviews - a.reviews;
        return a.time.localeCompare(b.time);
      });
  }, [cat, cuisine, diff, search, sort]);

  const reset = () => { setSearch(''); setCat('all'); setCuisine('All'); setDiff('All'); };

  return (
    <div className="rpage">

      {/* Header */}
      <section className="rpage__hero">
        <div className="rpage__hero-bg" />
        <div className="container rpage__hero-inner">
          <span className="section-label">Explore the Collection</span>
          <h1 className="section-title" style={{ color: 'white' }}>All Recipes</h1>
          <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: 16, maxWidth: 480 }}>
            Browse our full collection of {recipes.length} dishes from home cooks around the world.
          </p>
          <div className="rpage__search">
            <span className="rpage__search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search by dish name or cuisine…"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
        </div>
      </section>

      <div className="container">

        {/* Tabs */}
        <div className="rpage__tabs">
          {categories.map(c => (
            <button key={c.id} className={`rpage__tab${cat === c.id ? ' rpage__tab--active' : ''}`} onClick={() => setCat(c.id)}>
              {c.icon} {c.label}
            </button>
          ))}
        </div>

        {/* Controls */}
        <div className="rpage__controls">
          <div className="rpage__control-group">
            <label>Cuisine</label>
            <select value={cuisine} onChange={e => setCuisine(e.target.value)}>
              {cuisines.map(c => <option key={c}>{c}</option>)}
            </select>
          </div>
          <div className="rpage__control-group">
            <label>Difficulty</label>
            <select value={diff} onChange={e => setDiff(e.target.value)}>
              {difficulties.map(d => <option key={d}>{d}</option>)}
            </select>
          </div>
          <div className="rpage__control-group">
            <label>Sort by</label>
            <select value={sort} onChange={e => setSort(e.target.value)}>
              {sortOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
          </div>
        </div>

        {/* Info */}
        <div className="rpage__info">
          <span>{filtered.length} recipe{filtered.length !== 1 ? 's' : ''} found</span>
          {(search || cat !== 'all' || cuisine !== 'All' || diff !== 'All') && (
            <button className="rpage__clear" onClick={reset}>Clear filters ×</button>
          )}
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="rpage__grid">
            {filtered.map(r => <RecipeCard key={r.id} recipe={r} />)}
          </div>
        ) : (
          <div className="rpage__empty">
            <div className="rpage__empty-icon">🍽️</div>
            <h3>No recipes found</h3>
            <p>Try adjusting your filters or search term.</p>
            <button className="btn-primary" onClick={reset}>Reset Filters</button>
          </div>
        )}
      </div>
    </div>
  );
}
