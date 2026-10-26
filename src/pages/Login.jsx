import React, { useState } from 'react';

export default function Login({ onLogin, onRegister }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    setError(onLogin(username.trim().toLowerCase(), password));
  }

  return (
    <main className="page-content auth-content">
      <h1>Welcome back friend!</h1>
      <p className="auth-intro">Log into your account to check your progress</p>
      <form onSubmit={handleSubmit}>
        <div className="form-fields">
          <label htmlFor="login-user">Email or username</label>
          <input id="login-user" autoComplete="username" required value={username} onChange={(event) => setUsername(event.target.value)} />
          <label htmlFor="login-password">Password</label>
          <input id="login-password" type="password" autoComplete="current-password" required value={password} onChange={(event) => setPassword(event.target.value)} />
        </div>
        {error && <p className="form-error" role="alert">{error}</p>}
        <button className="primary-button" type="submit">Log In</button>
      </form>
      <button className="nav-button auth-link" onClick={() => setNotice('Password recovery is not available in this prototype. Try the demo account: admin / 1234.')}>Forgot your password?</button>
      {notice && <p className="form-notice" role="status">{notice}</p>}
      <button className="nav-button auth-link" onClick={onRegister}>Create Account</button>
    </main>
  );
}
