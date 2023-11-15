import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'; // Import Link from react-router-dom
import '../css/LoginPage.css'; // Import the corresponding CSS file

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // Implement your login logic here
    console.log('Logging in with:', { username, password });
    const user = {
      "username": username,
      "email": username,
      "password": password
    }
    try {
      const response = await fetch(
        'http://54.236.43.172:5000/api/token/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(user)
        }
      );

      if (!response.ok) {
        alert('Username or password wrong');
      } else {
        const data = await response.json();
        console.log(data)
        localStorage.setItem('token', data.token);
        navigate('/home');
      }
    } catch (error) {
      alert(error);
      alert('Something went wrong, fetching the API');
    }
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
};

export default LoginPage;
