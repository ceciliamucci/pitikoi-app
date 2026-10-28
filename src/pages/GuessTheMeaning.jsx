import { playSound } from '../audio.js';
import React, { useState } from 'react';
import { guessMeaningQuestions } from '../data/idiomsQuestions.js';
import { prepareAttempt } from '../utils/shuffle.js';
import DecodeRail from '../components/DecodeRail.jsx';
import whale from '../assets/whale.png';
import '../decode-it.css';

export default function GuessTheMeaning({ active = true }) {
  const [questions, setQuestions] = useState(() => prepareAttempt(guessMeaningQuestions));
  const [index, setIndex] = useState(0);
  const [learnedDrag, setLearnedDrag] = useState(false);
  const question = questions[index];

  function restart() {
    playSound('next');
    setQuestions(prepareAttempt(guessMeaningQuestions));
    setIndex(0);
    window.scrollTo(0, 0);
  }

  if (!question) return (
    <main className="phrasal-content activity-complete">
      <h1>Nice work, diver!</h1>
      <p>You finished Decode It.</p>
      <button className="primary-button" onClick={restart}>Try again</button>
    </main>
  );

  // Los cuatro diálogos originales ya tienen dos intervenciones entre comillas.
  const context = question.context.slice(1, -1);
  const turns = question.whale ? [question.whale, context] : context.slice(1, -1).split("' '");

  return (
    <main className="decode-content">
      <div className="decode-whale">
        <img className="decode-avatar" src={whale} alt="Whale" />
        <p className="conversation-bubble">{turns[0]}</p>
      </div>
      <DecodeRail active={active} key={question.id} question={question} reply={turns[1]}
        showHint={index === 0 && !learnedDrag} onLearnDrag={() => setLearnedDrag(true)}
        last={index === questions.length - 1} onNext={() => { playSound('next'); setIndex(index + 1); window.scrollTo(0, 0); }} />
    </main>
  );
}
