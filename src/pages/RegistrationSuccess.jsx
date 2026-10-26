import React from 'react';

export default function RegistrationSuccess({ onGoAccount }) {
  return (
    <main className="page-content success-content">
      <h1>Registration successful!</h1>
      <p>Ready for a swim?</p>
      <button className="primary-button" onClick={onGoAccount}>Go to Account</button>
    </main>
  );
}
