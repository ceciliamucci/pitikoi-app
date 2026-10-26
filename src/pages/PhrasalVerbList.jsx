import React, { useState } from 'react';
import { phrasalVerbs } from '../data/phrasalVerbs.js';

export default function PhrasalVerbList() {
  const [search, setSearch] = useState('');
  const query = search.trim().toLowerCase();
  const filtered = phrasalVerbs.filter((item) =>
    [item.verb, ...item.senses.flatMap((sense) => [sense.meaning, sense.spanish, sense.example])]
      .some((text) => text.toLowerCase().includes(query))
  );

  return (
    <main className="phrasal-content">
      <label className="search-label" htmlFor="phrasal-search">Find an expression or meaning</label>
      <input id="phrasal-search" className="verb-search" type="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Try get in, resolver..." />
      <div className="phrasal-list">
        {filtered.map((item) => (
          <details className="phrasal-entry" key={item.id}>
            <summary className="phrasal-summary">
              <span className="phrasal-summary-text">
                <span className="phrasal-entry-title">{item.verb}</span>
                <span className="phrasal-preview">{item.senses[0].meaning}</span>
                <span className="phrasal-preview-translation" lang="es">{item.senses[0].spanish}</span>
                {item.senses.length > 1 && <span className="phrasal-more">More meanings inside</span>}
              </span>
            </summary>
            <div className="phrasal-details">
            {item.senses.map((sense) => (
              <section className="phrasal-sense" key={sense.meaning}>
                <h3>{sense.meaning}</h3>
                <p className="phrasal-spanish" lang="es">{sense.spanish}</p>
                <blockquote>{sense.example}</blockquote>
              </section>
            ))}
            {item.tip && <aside className="pitikoi-tip"><strong>Pitikoi Tip</strong><p>{item.tip}</p></aside>}
            </div>
          </details>
        ))}
      </div>
      {filtered.length === 0 && <p role="status">No matches. Try another expression or meaning.</p>}
    </main>
  );
}
