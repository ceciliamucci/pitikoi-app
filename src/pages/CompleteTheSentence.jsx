import { playSound } from '../audio.js';
import React, { useRef, useState } from 'react';
import SentenceOptions from '../components/SentenceOptions.jsx';
import { activeSentenceQuestions as questionBank } from '../data/phrasalVerbQuestions.js';
import { prepareAttempt } from '../utils/shuffle.js';
import PhrasalFeedback from '../components/PhrasalFeedback.jsx';

export default function CompleteTheSentence({ active = true }) {
  const dropRef = useRef(null);
  const [dragState, setDragState] = useState(null);
  const [sentenceQuestions, setQuestions] = useState(() => prepareAttempt(questionBank));
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState(0);
  const question = sentenceQuestions[index];

  function selectOption(optionIndex, dropped) {
    if (checked) return;
    if (dropped) playSound('drop');
    else if (selected !== optionIndex) playSound('click');
    setSelected(optionIndex);
  }

  function checkAnswer() {
    if (selected === null || checked) return;
    playSound(selected === question.answer ? 'next' : 'wrong');
    setChecked(true);
    if (selected === question.answer) setScore(score + 1);
  }

  function next() {
    playSound('next');
    setIndex(index + 1);
    setSelected(null);
    setChecked(false);
    window.scrollTo(0, 0);
  }

  function restart() {
    playSound('next');
    setQuestions(prepareAttempt(questionBank));
    setIndex(0);
    setSelected(null);
    setChecked(false);
    setScore(0);
    window.scrollTo(0, 0);
  }

  // Keep the selected expression inside the conversation, not just on a button.
  function renderLine(text) {
    if (!text.includes('___')) return text;
    const [before, after] = text.split('___');
    return <>{before}<span ref={dropRef} className={`conversation-blank sentence-gap ${dragState ? 'drop-active' : ''} ${dragState === 'over' ? 'drop-over' : ''} ${checked ? (selected === question.answer ? 'blank-correct' : 'blank-wrong') : ''}`} aria-label={selected === null ? 'Missing expression' : undefined}>{selected === null ? '…' : question.options[selected].text}</span>{after}</>;
  }

  if (!question) return (
    <main className="phrasal-content activity-complete">
      <h1>Nice work, diver!</h1>
      <p>You finished Complete the Sentence.</p>
      <p>{score} / {sentenceQuestions.length} correct answers</p>
      <button className="primary-button" onClick={restart}>Try again</button>
    </main>
  );

  return (
    <main className="phrasal-content">
      <h1 className="phrasal-prompt">{question.dialogue ? 'Complete the conversation' : 'Complete the sentence'}</h1>
      <p className="conversation-situation">{question.situation}</p>
      {question.dialogue ? (
        <div className="conversation">
          {question.dialogue.map((line, lineIndex) => (
            <div className={`conversation-turn ${line.speaker !== question.dialogue[0].speaker ? 'reply' : ''}`} key={lineIndex}>
              <span className="speaker-name">{line.speaker}</span>
              <p className="conversation-bubble">{renderLine(line.text)}</p>
            </div>
          ))}
        </div>
      ) : <div className="question-card scenario-card"><p>{renderLine(question.scenario)}</p></div>}
      <SentenceOptions key={index} question={question} selected={selected} checked={checked} active={active}
        dropRef={dropRef} onSelect={selectOption} onDragState={setDragState} />
      {checked ? <>
        <PhrasalFeedback question={question} selected={selected} />
        <button className="primary-button" onClick={next}>{index === sentenceQuestions.length - 1 ? 'See results' : 'Next'}</button>
      </> : <button className="primary-button" disabled={selected === null} onClick={checkAnswer}>Check answer</button>}
    </main>
  );
}
