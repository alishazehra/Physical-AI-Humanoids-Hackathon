import React, { useState } from 'react';
import Layout from '@theme/Layout';
import apiClient from '../services/apiClient';
import styles from './signup.module.css';
import {useHistory} from '@docusaurus/router';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await apiClient.signup({ fullName, email, password });
      history.push('/signin'); // Redirect to signin page on successful signup
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Layout title="Sign Up">
      <div className={styles.signupContainer}>
        <form className={styles.signupForm} onSubmit={handleSubmit}>
          <h2>Sign Up</h2>
          {error && <p className={styles.error}>{error}</p>}
          <div className={styles.formGroup}>
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
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
          <button type="submit" className={styles.submitButton}>Sign Up</button>
        </form>
      </div>
    </Layout>
  );
}

export default Signup;
