import React from 'react';

export default function Access({ onGoHome, onLogin, onRegister }) {
  return (
    <>
      <nav className="top-nav" aria-label="Main navigation">
        <button className="nav-button" onClick={onGoHome}>Home</button>
      </nav>
      <main className="page-content">
        <h1>Welcome to the pond</h1>
        <div className="card-list">
          <button className="access-card" onClick={onLogin}>Login</button>
          <button className="access-card" onClick={onRegister}>Create Account</button>
        </div>
      </main>
    </>
  );
}
