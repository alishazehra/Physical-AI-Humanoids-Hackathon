import React, { createContext, useContext, useState, useEffect } from 'react';

// Define the shape of the context data
interface AuthContextType {
  isAuthenticated: boolean;
  user: any; // Replace 'any' with a proper user type if you have one
  login: (session: any) => void;
  logout: () => void;
}

// Create the context with a default value
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check for a session in local storage on initial load
    const session = localStorage.getItem('session');
    if (session) {
      const userData = JSON.parse(session);
      setUser(userData);
      setIsAuthenticated(true);
    }
  }, []);

  const login = (session) => {
    localStorage.setItem('session', JSON.stringify(session));
    setUser(session);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('session');
    setUser(null);
    setIsAuthenticated(false);
  };

  const value = {
    isAuthenticated,
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Create a custom hook for easy access to the context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
