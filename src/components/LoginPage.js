import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../css/LoginPage.css'; // Import the corresponding CSS file

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
    console.log('Logging in with:', { username, password });
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="button" className="login-button" onClick={handleLogin}>
          Login
        </button>
      </form>

      {/* "Create New Account" link */}
      <p>
        Don't have an account?{' '}
        <Link to="/signup" className="create-account-link">
          Create New Account
        </Link>
      </p>
    </div>
  );
}

export default LoginPage;
