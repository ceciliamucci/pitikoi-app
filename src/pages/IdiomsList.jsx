import React, { useState } from 'react';
import { idiomsExpressions } from '../data/idiomsExpressions.js';

export default function IdiomsList() {
  const [search, setSearch] = useState('');
  const query = search.trim().toLowerCase();
  const filtered = idiomsExpressions.filter((item) =>
    [item.expression, item.meaning, item.spanish, item.example].some((text) => text.toLowerCase().includes(query))
  );

  return (
    <main className="phrasal-content">
      <label className="search-label" htmlFor="idioms-search">Find an expression or meaning</label>
      <input id="idioms-search" className="verb-search" type="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Try no worries, sentido..." />
      <div className="phrasal-list">
        {filtered.map((item) => (
          <details className="phrasal-entry" key={item.id}>
            <summary className="phrasal-summary">
              <span className="phrasal-summary-text">
                <span className="phrasal-entry-title">{item.expression}</span>
                <span className="phrasal-preview">{item.meaning}</span>
                <span className="phrasal-preview-translation" lang="es">{item.spanish}</span>
              </span>
            </summary>
            <div className="phrasal-details">
              <div className="phrasal-sense"><blockquote>{item.example}</blockquote></div>
              <aside className="pitikoi-tip"><strong>Pitikoi Tip</strong><p>{item.tip}</p></aside>
            </div>
          </details>
        ))}
      </div>
      {filtered.length === 0 && <p role="status">No matches. Try another expression or meaning.</p>}
    </main>
  );
}
