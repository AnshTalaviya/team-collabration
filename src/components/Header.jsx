import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login'); 
  };

  return (
    <header className="header d-flex justify-content-between align-items-center p-3 bg-dark text-light" style={{ background: '#800080' }}>
      <h1 className="h4 mb-0">Team Collaboration Hub</h1>
      <nav className="d-flex align-items-center">
        {user ? (
          <>
            <span className="me-3">Welcome, <strong>{user.email}</strong></span>
            <div className="d-none d-md-flex"> 
              <Link to="/dashboard" className="btn btn-outline-primary me-3 text-light">Dashboard</Link>
              <Link to="/chat" className="btn btn-outline-secondary me-3 text-light">Chat</Link>
            </div>
            <button onClick={handleLogout} className="btn btn-danger text-light">Logout</button>
            <div className="d-md-none"> 
              <button className="btn btn-outline-primary me-3" onClick={handleLogout}>Logout</button>
            </div>
          </>
        ) : (
          <div className='d-flex'>
            <Link to="/login" className="btn btn-outline-primary me-3 text-light">Login</Link>
            <Link to="/register" className="btn btn-outline-secondary text-light">Register</Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
