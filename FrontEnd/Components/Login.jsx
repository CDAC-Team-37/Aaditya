import React, { useState } from 'react'; 
import '../Login.css';

const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!username) {
      setError('Username is required.');
      return;
    }

    if (!password) {
      setError('Password is required.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    setError(''); // Clear errors if validation passes
    alert('Login successful!');
  };

  const handleResetPassword = () => {
    setUsername('');
    setPassword('');
    setError('');
    alert('Please contact support to reset your password or check your email for further instructions.');
  };

  return (
    <div className="signup-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {/* Updated buttons section */}
        <div className="button-container">
          <button type="submit">Login</button>
          <button type="button" onClick={handleResetPassword}>
            Reset Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;