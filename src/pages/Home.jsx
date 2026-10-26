import React from 'react';
import CategoryCard from '../components/CategoryCard.jsx';

const categories = [
  {
    title: 'Irregular Verbs',
    description: 'Study, memorize and practice the three forms of irregular verbs',
  },
  {
    title: 'Phrasal Verbs',
    description: 'Get in or get on? Learn more phrasal verbs and their differences',
  },
  {
    title: 'Idioms and Expressions',
    description: 'They can be a piece of cake too! (once you get to know them)',
  },
];

export default function Home({ onGoAccount, onGoIrregular, onGoPhrasal, onGoIdioms }) {
  return (
    <>
      <nav className="top-nav" aria-label="Main navigation">
        <button className="nav-button" onClick={onGoAccount}>Account</button>
      </nav>
      <main className="page-content">
        <h1>Dive deeper into English</h1>
        <div className="card-list">
          {categories.map((category) => (
            <CategoryCard
              key={category.title}
              title={category.title}
              description={category.description}
              onClick={category.title === 'Irregular Verbs' ? onGoIrregular : category.title === 'Phrasal Verbs' ? onGoPhrasal : onGoIdioms}
            />
          ))}
        </div>
      </main>
    </>
  );
}
