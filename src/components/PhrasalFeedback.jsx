import React from 'react';
import { getPhrasalVerb } from '../data/phrasalVerbs.js';

export default function PhrasalFeedback({ question, selected }) {
  const correct = selected === question.answer;
  const verb = getPhrasalVerb(question.verbId);

  return (
    <div className="phrasal-feedback" role="status">
      <strong>{correct ? 'Exactly!' : 'Not quite.'}</strong>
      {!correct && <>
        <p>{question.options[selected].feedback}</p>
        <p><strong>Best answer:</strong> {question.options[question.answer].text}</p>
      </>}
      <p>{question.explanation}</p>
      {verb.tip && <aside className="pitikoi-tip"><strong>Pitikoi Tip</strong><p>{verb.tip}</p></aside>}
    </div>
  );
}
