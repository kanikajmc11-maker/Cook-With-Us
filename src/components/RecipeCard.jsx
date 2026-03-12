import React from 'react';
import './RecipeCard.css';

export default function RecipeCard({ recipe, size = 'md' }) {
  const diffClass = {
    Easy:   'badge-easy',
    Medium: 'badge-medium',
    Hard:   'badge-hard',
  };

  return (
    <div className={`rcard rcard--${size}`}>
      <div className="rcard__img-wrap">
        <img src={recipe.image} alt={recipe.title} className="rcard__img" loading="lazy" />
        <span className={`badge ${diffClass[recipe.difficulty]} rcard__diff`}>{recipe.difficulty}</span>
        <span className="rcard__cuisine">{recipe.cuisine}</span>
      </div>

      <div className="rcard__body">
        <div className="rcard__meta">
          <span>⏱ {recipe.time}</span>
          <span>⭐ {recipe.rating} <span className="rcard__reviews">({recipe.reviews})</span></span>
        </div>

        <h3 className="rcard__title">{recipe.title}</h3>
        <p className="rcard__desc">{recipe.description}</p>

        <div className="rcard__tags">
          {recipe.tags.slice(0, 2).map(tag => (
            <span key={tag} className="rcard__tag">{tag}</span>
          ))}
        </div>

        <div className="rcard__footer">
          <div className="rcard__author">
            <img src={recipe.authorAvatar} alt={recipe.author} className="rcard__avatar" />
            <span>{recipe.author}</span>
          </div>
          <button className="rcard__btn">View Recipe →</button>
        </div>
      </div>
    </div>
  );
}
