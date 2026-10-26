import React from 'react';
import { getIdiom } from '../data/idiomsExpressions.js';

export default function IdiomFeedback({ question, selected }) {
  const correct = selected.isCorrect;
  const entry = getIdiom(question.expressionId);

  return (
    <div className="phrasal-feedback" role="status">
      <strong>{correct ? 'Exactly!' : 'Not quite.'}</strong>
      {!correct && <>
        <p>{selected.feedback}</p>
        <p><strong>Best answer:</strong> {question.options.find((option) => option.isCorrect).text}</p>
      </>}
      {question.reply && <p><strong>You could say:</strong> {question.reply}</p>}
      <p>{question.explanation}</p>
      <aside className="pitikoi-tip"><strong>Pitikoi Tip</strong><p>{entry.tip}</p>
        {question.tipNote && <p>{question.tipNote}</p>}
      </aside>
    </div>
  );
}
