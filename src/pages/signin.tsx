import React, { useState } from 'react';
import Layout from '@theme/Layout';
import apiClient from '../services/apiClient';
import styles from './signin.module.css';
import { useHistory } from '@docusaurus/router';
import { useAuth } from '../contexts/AuthContext';

function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const data = await apiClient.login(email, password);
      login(data); // Set the session using the context
      history.push('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Layout title="Log In">
      <div className={styles.signinContainer}>
        <form className={styles.signinForm} onSubmit={handleSubmit}>
          <h2>Log In</h2>
          {error && <p className={styles.error}>{error}</p>}
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className={styles.submitButton}>Sign In</button>
        </form>
      </div>
    </Layout>
  );
}

export default Signin;
