import React, { useState } from 'react';
import { verbs } from '../data/irregularVerbs.js';

export default function VerbList() {
  const [search, setSearch] = useState('');
  const query = search.trim().toLowerCase();
  const filtered = verbs.filter((verb) =>
    [verb.base, verb.past, verb.participle, verb.meaning].some((value) => value.toLowerCase().includes(query))
  );

  return (
    <main className="verb-list">
      <label className="search-label" htmlFor="verb-search">Search verb or meaning</label>
      <input id="verb-search" className="verb-search" type="search" placeholder="Search verb..." value={search} onChange={(event) => setSearch(event.target.value)} />
      <div className="table-scroll">
        <table aria-label="Irregular verbs">
          <thead><tr><th scope="col">Base</th><th scope="col">Past</th><th scope="col">Participle</th><th scope="col">Meaning</th></tr></thead>
          <tbody>{filtered.map((verb) => (
            <tr key={verb.base}>
              <th scope="row">{verb.base}</th><td>{verb.past}</td><td>{verb.participle}</td>
              <td>{verb.meaning}{verb.note && <small>{verb.note}</small>}</td>
            </tr>
          ))}</tbody>
        </table>
      </div>
      {filtered.length === 0 && <p>No verbs match your search, try another!-.</p>}
    </main>
  );
}

