import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
   
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const register = (username, email, password) => {
    const newUser = { username, email, password }; 
    localStorage.setItem('user', JSON.stringify(newUser));
    setUser(newUser);
  };

  const login = (email, password) => {
    const savedUser = JSON.parse(localStorage.getItem('user'));
    if (savedUser && savedUser.email === email && savedUser.password === password) {
      setUser(savedUser);
    } else {
      alert('Invalid credentials');
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
