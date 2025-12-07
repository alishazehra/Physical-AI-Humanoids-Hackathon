import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useHistory } from '@docusaurus/router';
import DefaultNavbarItem from '@theme/NavbarItem/DefaultNavbarItem';

export default function LoginOrLogoutButton(props) {
  const { isAuthenticated, logout } = useAuth();
  const history = useHistory();

  const handleLogout = () => {
    logout();
    history.push('/');
  };

  if (isAuthenticated) {
    return (
      <div className="navbar__item" onClick={handleLogout} style={{cursor: 'pointer'}}>
        Logout
      </div>
    );
  }

  return (
    <>
      <DefaultNavbarItem
        {...props}
        label="Login"
        to="/signin"
      />
      <DefaultNavbarItem
        {...props}
        label="Sign Up"
        to="/signup"
      />
    </>
  );
}
