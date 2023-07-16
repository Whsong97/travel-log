import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SignUpForm.css';
import Navbar from './navbar';



const SignUpForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:3000/signup', {
        username,
        password,
      });

      navigate('/login');
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage('An error occurred');
      }
    }
  };

  return (
    <div class="form-container">
  <h2>Sign Up</h2>
  <form onSubmit={handleSignUp}>
    <input
      type="text"
      placeholder="Username"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
    />
    <input
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
    <button type="submit">Sign Up</button>
  </form>
  {errorMessage && <p class="error-message">{errorMessage}</p>}
</div>
  );
};

export default SignUpForm; 