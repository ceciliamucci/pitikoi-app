import React, { useState } from 'react';
import { createQuestions } from '../data/irregularVerbs.js';

export default function VerbQuiz() {
  const [questions, setQuestions] = useState(createQuestions);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState([]);
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const finished = index === questions.length;
  const question = questions[index];

  function toggle(option) {
    if (checked) return;
    if (selected.includes(option)) setSelected(selected.filter((item) => item !== option));
    else if (question.answers.length === 1) setSelected([option]);
    else if (selected.length < question.answers.length) setSelected([...selected, option]);
  }

  function checkAnswer() {
    if (checked || selected.length !== question.answers.length) return;
    const correct = question.answers.every((answer) => selected.includes(answer));
    if (correct) setScore(score + 1);
    setStreak(correct ? streak + 1 : 0);
    setChecked(true);
  }

  function next() {
    setIndex(index + 1);
    setSelected([]);
    setChecked(false);
  }

  function restart() {
    setQuestions(createQuestions());
    setIndex(0);
    setSelected([]);
    setChecked(false);
    setScore(0);
    setStreak(0);
  }

  if (finished) return (
    <main className="practice-content">
      <h1>Quiz complete! Congratulations diver!</h1>
      <p>{score} correct answers</p>
      <button className="primary-button" onClick={restart}>Try again</button>
    </main>
  );

  const correct = question.answers.every((answer) => selected.includes(answer));
  return (
    <main className="practice-content">
      <p className="session-count">{streak} streak</p>
      <div className="question-card">
        <p className="card-label">Past simple &amp; past participle of...</p>
        <h2 className="practice-word">{question.base}</h2>
        <p className="verb-meaning">{question.meaning}</p>
      </div>
      <p id="quiz-instruction">Choose {question.answers.length} {question.answers.length === 1 ? 'form' : 'forms'}</p>
      <div className="quiz-options" role="group" aria-labelledby="quiz-instruction">
        {question.options.map((option) => (
          <button key={option} className={`quiz-option ${selected.includes(option) ? 'is-selected' : ''} ${checked && question.answers.includes(option) ? 'is-correct' : ''} ${checked && selected.includes(option) && !question.answers.includes(option) ? 'is-wrong' : ''}`} aria-pressed={selected.includes(option)} disabled={checked} onClick={() => toggle(option)}>{option}</button>
        ))}
      </div>
      {checked && <div className="quiz-feedback" role="status">
        <strong>{correct ? 'Correct!' : 'Not quite. Here are the forms:'}</strong>
        <p>Past: {question.past} · Participle: {question.participle}</p>
        {question.note && <p>{question.note}</p>}
      </div>}
      {checked
        ? <button className="primary-button" onClick={next}>{index === questions.length - 1 ? 'See results' : 'Next verb'}</button>
        : <button className="primary-button" disabled={selected.length !== question.answers.length} onClick={checkAnswer}>Check answer</button>}
    </main>
  );
}
