import React from 'react';
import CategoryCard from '../components/CategoryCard.jsx';

export default function PhrasalVerbs({ onChoose }) {
  return (
    <main className="page-content">
      <h1>Phrasal Verbs</h1>
      <div className="card-list">
        <CategoryCard title="List" description="Explore everyday meanings, examples and Pitikoi Tips" onClick={() => onChoose('phrasal-list')} />
        <CategoryCard title="Choose the Meaning" description="Listen to the context. What does the speaker mean?" onClick={() => onChoose('phrasal-meaning')} />
        <CategoryCard title="Complete the Sentence" description="Step into a conversation and choose what comes next" onClick={() => onChoose('phrasal-sentence')} />
      </div>
    </main>
  );
}
