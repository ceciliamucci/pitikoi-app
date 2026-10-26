import React from 'react';
import CategoryCard from '../components/CategoryCard.jsx';

export default function IdiomsExpressions({ onChoose }) {
  return (
    <main className="page-content">
      <h1>Idioms &amp; Expressions</h1>
      <div className="card-list">
        <CategoryCard title="List" description="Explore expressions, everyday examples and Pitikoi Tips" onClick={() => onChoose('idioms-list')} />
        <CategoryCard title="Decode It" description="Use the context to work out what the speaker means" onClick={() => onChoose('idioms-meaning')} />
        <CategoryCard title="Your Turn" description="Join the conversation. What would you say?" onClick={() => onChoose('idioms-your-turn')} />
      </div>
    </main>
  );
}
