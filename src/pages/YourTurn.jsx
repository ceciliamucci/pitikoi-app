import { playSound } from '../audio.js';
import React, { useState } from 'react';
import { yourTurnQuestions } from '../data/yourTurnQuestions.js';
import { getIdiom } from '../data/idiomsExpressions.js';
import { prepareAttempt } from '../utils/shuffle.js';
import { OptionCloud, FeedbackCloudTop } from '../components/YourTurnClouds.jsx';

export default function YourTurn({ onBack }) {
  const [questions, setQuestions] = useState(() => prepareAttempt(yourTurnQuestions));
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const question = questions[index];
  const correct = selected?.isCorrect === true;

  function answer(option) {
    if (!correct) {
      playSound(option.isCorrect ? 'click' : 'wrong');
      setSelected(option);
    }
  }

  function next() {
    if (!correct) return;
    playSound('next');
    setIndex(index + 1);
    setSelected(null);
    window.scrollTo(0, 0);
  }

  function restart() {
    playSound('next');
    setQuestions(prepareAttempt(yourTurnQuestions));
    setIndex(0);
    setSelected(null);
    window.scrollTo(0, 0);
  }

  if (!question) return (
    <main className="phrasal-content activity-complete">
      <h1>Nice work, diver!</h1>
      <p>You finished Your Turn.</p>
      <button className="primary-button" onClick={restart}>Try again</button>
      <button className="secondary-button your-turn-back" onClick={onBack}>Back to menu</button>
    </main>
  );

  const entry = getIdiom(question.expressionId);
  return (
    <main className={`your-turn ${correct ? 'is-complete' : selected ? 'has-error' : ''}`}>
      <div className="your-turn-stage">
      <p className="conversation-bubble your-turn-message">{question.message}</p>
      <div className="your-turn-options-reveal" aria-hidden={correct}>
      <div className="your-turn-options" role="group" aria-labelledby="your-turn-prompt">
        {question.options.map((option) => (
          <button key={option.text}
            className={`your-turn-option ${selected === option ? (correct ? 'is-correct' : 'is-wrong') : ''}`}
            aria-pressed={selected === option} disabled={correct} onClick={() => answer(option)}>
            <OptionCloud />
            <span>{option.text}</span>
          </button>
        ))}
      </div>
      </div>
      </div>
      <section className={`your-turn-cloud ${selected ? (correct ? 'is-correct' : 'is-wrong') : ''}`}>
        <FeedbackCloudTop />
        <div className="your-turn-cloud-body">
        <div className="your-turn-cloud-content">
        <h1 id="your-turn-prompt" aria-label="What would you say?">
          <svg className="your-turn-curved-title" viewBox="0 0 300 80" aria-hidden="true">
            <defs><path id="your-turn-title-curve" d="M 20,68 Q 150,-12 280,68" /></defs>
            <text><textPath href="#your-turn-title-curve" startOffset="50%" textAnchor="middle">What would you say?</textPath></text>
          </svg>
        </h1>
        <div className={`your-turn-details ${selected ? 'is-visible' : ''}`}>
        <div className="your-turn-details-inner">
        <div role="status" aria-live="polite" aria-atomic="true">
          {selected && (correct ? <>
            <p className="conversation-bubble your-turn-reply">{question.reply}</p>
            <strong>Exactly!</strong>
            <p>{question.explanation}</p>
            <aside className="pitikoi-tip"><strong>Pitikoi Tip</strong><p>{entry.tip}</p></aside>
          </> : <><strong>Not quite!</strong><p>{selected.feedback}</p></>)}
        </div>
        {correct && <button className="primary-button" onClick={next}>{index === questions.length - 1 ? 'Finish' : 'Next'}</button>}
        </div>
        </div>
        </div>
        </div>
      </section>
    </main>
  );
}
