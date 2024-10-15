import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const PrivateRoute = ({ children, admin }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (admin && !user.isAdmin) {
    return <Navigate to="/dashboard" />; 
  }

  return children;
};

export default PrivateRoute;
