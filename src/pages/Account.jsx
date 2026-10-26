import React from 'react';
import koi from '../assets/koi.png';

export default function Account({ user, onGoPractice, onLogout }) {
  return (
    <main className="page-content account-content">
      <h1>Welcome {user.name}!</h1>
      <section className="account-card" aria-labelledby="progress-title">
        <h2 id="progress-title">My progress</h2>
        <progress max="100" value="0" aria-label="My progress">0%</progress>
        <p className="progress-value">0%</p>
      </section>
      <section className="account-card" aria-labelledby="creature-title">
        <h2 id="creature-title">My creature</h2>
        <img className="creature-image" src={koi} alt="A smiling pink koi fish" />
        <p className="creature-name">Koi Fish</p>
        <p>Shallow Waters</p>
        <p className="creature-description">Complete more exercises to dive deeper into the English language</p>
      </section>
      <button className="primary-button" onClick={onGoPractice}>Go Practice</button>
      <button className="nav-button auth-link" onClick={onLogout}>Log Out</button>
      <footer>Made by C, with lots of love and caffeine ♥</footer>
    </main>
  );
}
