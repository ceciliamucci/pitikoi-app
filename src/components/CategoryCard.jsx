import React from 'react';

export default function CategoryCard({ title, description, onClick }) {
  return (
    <article className="category-card">
      <h2>{onClick ? <button className="category-link" onClick={onClick}>{title}</button> : title}</h2>
      <p>{description}</p>
    </article>
  );
}
