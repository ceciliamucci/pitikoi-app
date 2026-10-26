import React, { useState } from 'react';
import { activeMeaningQuestions as questionBank } from '../data/phrasalVerbQuestions.js';
import { prepareAttempt } from '../utils/shuffle.js';
import PhrasalFeedback from '../components/PhrasalFeedback.jsx';

export default function ChooseTheMeaning() {
  const [meaningQuestions, setQuestions] = useState(() => prepareAttempt(questionBank));
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const question = meaningQuestions[index];

  function answer(optionIndex) {
    if (selected !== null) return;
    setSelected(optionIndex);
    if (optionIndex === question.answer) setScore(score + 1);
  }

  function next() {
    setIndex(index + 1);
    setSelected(null);
    window.scrollTo(0, 0);
  }

  function restart() {
    setQuestions(prepareAttempt(questionBank));
    setIndex(0);
    setSelected(null);
    setScore(0);
    window.scrollTo(0, 0);
  }

  if (!question) return (
    <main className="phrasal-content activity-complete">
      <h1>Nice work, diver!</h1>
      <p>You finished Choose the Meaning.</p>
      <p>{score} / {meaningQuestions.length} correct answers</p>
      <button className="primary-button" onClick={restart}>Try again</button>
    </main>
  );

  return (
    <main className="phrasal-content">
      <div className="question-card context-card">
        <p className="card-label">{question.situation}</p>
        <blockquote>{question.before}<mark>{question.phrase}</mark>{question.after}</blockquote>
      </div>
      <h1 className="phrasal-prompt" id="meaning-prompt">What does “{question.phrase}” mean here?</h1>
      <div className="meaning-options" role="group" aria-labelledby="meaning-prompt">
        {question.options.map((option, optionIndex) => (
          <button key={option.text}
            className={`quiz-option ${selected !== null && optionIndex === question.answer ? 'is-correct' : ''} ${selected === optionIndex && selected !== question.answer ? 'is-wrong' : ''}`}
            disabled={selected !== null} aria-pressed={selected === optionIndex} onClick={() => answer(optionIndex)}>
            {option.text}
          </button>
        ))}
      </div>
      {selected !== null && <>
        <PhrasalFeedback question={question} selected={selected} />
        <button className="primary-button" onClick={next}>{index === meaningQuestions.length - 1 ? 'See results' : 'Next'}</button>
      </>}
    </main>
  );
}
