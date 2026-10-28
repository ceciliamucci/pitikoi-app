import { playSound } from '../audio.js';
import React, { useState } from 'react';
import { verbs, shuffle } from '../data/irregularVerbs.js';

export default function Flashcards() {
  const [deck, setDeck] = useState(() => shuffle(verbs));
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [known, setKnown] = useState(0);
  const finished = index === deck.length;
  const verb = deck[index];

  function nextCard(knew) {
    if (!revealed) return;
    playSound(knew ? 'next' : 'click');
    if (knew) setKnown(known + 1);
    setRevealed(false);
    setIndex(index + 1);
  }

  function restart() {
    playSound('next');
    setDeck(shuffle(verbs));
    setIndex(0);
    setRevealed(false);
    setKnown(0);
  }

  if (finished) return (
    <main className="practice-content">
      <h1>Round complete!</h1>
      <p>You knew {known} cards.</p>
      <button className="primary-button" onClick={restart}>Practice again</button>
    </main>
  );

  return (
    <main className="practice-content">
      <p className="session-count">{known} known</p>
      <button key={index} className={`flashcard ${revealed ? 'is-flipped' : ''}`} onClick={() => { playSound('click'); setRevealed(!revealed); }} aria-label={revealed ? 'Show base form' : 'Reveal conjugations'} aria-pressed={revealed}>
        <span className="flashcard-inner">
          <span className="flashcard-face" aria-hidden={revealed}>
            <span className="card-label">Base form</span>
            <strong className="practice-word">{verb.base}</strong>
            <span className="verb-meaning">{verb.meaning}</span>
            <span className="reveal-hint">Tap to reveal</span>
          </span>
          <span className="flashcard-face flashcard-back" aria-hidden={!revealed}>
            <span className="card-label">Conjugations</span>
            <span className="conjugation"><span>Base</span><strong>{verb.base}</strong></span>
            <span className="conjugation"><span>Past</span><strong>{verb.past}</strong></span>
            <span className="conjugation"><span>Participle</span><strong>{verb.participle}</strong></span>
            {verb.note && <span className="verb-note">{verb.note}</span>}
          </span>
        </span>
      </button>
      {revealed ? (
        <div className="answer-actions">
          <button className="secondary-button" onClick={() => nextCard(false)}>I missed it</button>
          <button className="primary-button" onClick={() => nextCard(true)}>I knew it</button>
        </div>
      ) : <button className="primary-button" onClick={() => { playSound('next'); setRevealed(true); }}>Reveal</button>}
    </main>
  );
}
