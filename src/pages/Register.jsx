import React, { useState } from 'react';

export default function Register({ onRegister, onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    if (!password.trim()) {
      setError('Please enter a password with more than just spaces.');
      return;
    }
    setError(onRegister(email.trim().toLowerCase(), password));
  }

  return (
    <main className="page-content auth-content">
      <h1>Hello there!</h1>
      <p className="auth-intro">Create an account to track your progress</p>
      <form onSubmit={handleSubmit}>
        <div className="form-fields">
          <label htmlFor="register-email">Email</label>
          <input id="register-email" type="email" autoComplete="username" required value={email} onChange={(event) => setEmail(event.target.value)} />
          <label htmlFor="register-password">Password</label>
          <input id="register-password" type="password" autoComplete="new-password" required value={password} onChange={(event) => setPassword(event.target.value)} />
        </div>
        {error && <p className="form-error" role="alert">{error}</p>}
        <button className="primary-button" type="submit">Create Account</button>
      </form>
      <button className="nav-button auth-link" onClick={onLogin}>I already have an account</button>
    </main>
  );
}
