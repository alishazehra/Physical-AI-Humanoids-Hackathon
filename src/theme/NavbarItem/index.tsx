
import React from 'react';
import DefaultNavbarItem from '@theme/NavbarItem/DefaultNavbarItem';
import LoginOrLogoutButton from './LoginOrLogoutButton'; // Your custom component
import {useAuth} from "../../contexts/AuthContext";

const CustomNavbarItem = (props) => {
  const { type } = props;

  // Add your custom navbar item type here
  if (type === 'custom-LoginOrLogoutButton') {
    return <LoginOrLogoutButton {...props} />;
  }

  // Fallback to the default navbar item
  return <DefaultNavbarItem {...props} />;
};

export default CustomNavbarItem;
