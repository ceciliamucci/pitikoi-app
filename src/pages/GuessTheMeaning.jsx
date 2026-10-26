import React, { useEffect, useRef, useState } from 'react';
import { guessMeaningQuestions } from '../data/idiomsQuestions.js';
import { prepareAttempt } from '../utils/shuffle.js';
import DecodeRail from '../components/DecodeRail.jsx';
import whale from '../assets/whale.png';
import soundOn from '../assets/sound-on-pitikoi.svg';
import soundOff from '../assets/sound-off-pitikoi.svg';
import '../decode-it.css';

export default function GuessTheMeaning() {
  const [questions, setQuestions] = useState(() => prepareAttempt(guessMeaningQuestions));
  const [index, setIndex] = useState(0);
  const [muted, setMuted] = useState(false);
  const [soundFaded, setSoundFaded] = useState(false);
  const [learnedDrag, setLearnedDrag] = useState(false);
  const soundTimer = useRef(null);
  useEffect(() => {
    soundTimer.current = setTimeout(() => setSoundFaded(true), 8000);
    return () => clearTimeout(soundTimer.current);
  }, []);

  function toggleSound() {
    setMuted(!muted);
    setSoundFaded(false);
    clearTimeout(soundTimer.current);
    soundTimer.current = setTimeout(() => setSoundFaded(true), 3000);
  }
  const question = questions[index];

  function restart() {
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
      <div className="decode-toolbar">
        <button className={`decode-sound ${soundFaded ? 'is-faded' : ''}`} aria-pressed={muted} aria-label="Mute sound effects" onClick={toggleSound}>
          <img src={muted ? soundOff : soundOn} alt="" />
        </button>
      </div>
      <div className="decode-whale">
        <img className="decode-avatar" src={whale} alt="Whale" />
        <p className="conversation-bubble">{turns[0]}</p>
      </div>
      <DecodeRail key={question.id} question={question} reply={turns[1]} muted={muted}
        showHint={index === 0 && !learnedDrag} onLearnDrag={() => setLearnedDrag(true)}
        last={index === questions.length - 1} onNext={() => { setIndex(index + 1); window.scrollTo(0, 0); }} />
    </main>
  );
}
