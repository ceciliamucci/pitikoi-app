import React from 'react';
import CategoryCard from '../components/CategoryCard.jsx';

export default function IrregularVerbs({ onChoose }) {
  return (
    <main className="page-content">
      <h1>Irregular Verbs</h1>
      <div className="card-list">
        <CategoryCard title="List" description="Explore the three forms and their meanings" onClick={() => onChoose('list')} />
        <CategoryCard title="Flashcards" description="Recall the forms, then flip to reveal" onClick={() => onChoose('flashcards')} />
        <CategoryCard title="Quiz" description="Choose the correct past and participle forms" onClick={() => onChoose('quiz')} />
      </div>
    </main>
  );
}
