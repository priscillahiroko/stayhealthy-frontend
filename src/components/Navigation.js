import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem('user'));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('userProfile');
    localStorage.removeItem('nextAppointment');
    localStorage.removeItem('userReview');
    setIsLoggedIn(false);
    window.location.href = '/';
  };

  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        <h1 style={logoStyle}>
          <Link to="/" style={linkLogoStyle}>StayHealthy</Link>
        </h1>
        <ul style={menuStyle}>
          <li><Link to="/" style={linkStyle}>Home</Link></li>
          <li><Link to="/doctors" style={linkStyle}>Doctors</Link></li>
          <li><Link to="/appointments" style={linkStyle}>Appointments</Link></li>
          {isLoggedIn ? (
            <>
              <li><Link to="/profile" style={linkStyle}>Profile</Link></li>
              <li><Link to="/feedback" style={linkStyle}>Feedback</Link></li>
              <li><Link to="/reviews" style={linkStyle}>Reviews</Link></li>
              <li>
                <button onClick={handleLogout} style={logoutButtonStyle}>
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li><Link to="/login" style={linkStyle}>Login</Link></li>
              <li><Link to="/signup" style={linkStyle}>Sign Up</Link></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

const navStyle = {
  backgroundColor: 'var(--primary-color)',
  padding: '1rem 0',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  position: 'sticky',
  top: 0,
  zIndex: 100
};

const containerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
};

const logoStyle = {
  margin: 0,
  fontSize: '24px'
};

const linkLogoStyle = {
  color: 'white',
  textDecoration: 'none'
};

const menuStyle = {
  listStyle: 'none',
  display: 'flex',
  gap: '20px',
  alignItems: 'center'
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '16px'
};

const logoutButtonStyle = {
  background: 'transparent',
  color: 'white',
  border: '1px solid white',
  padding: '5px 15px',
  borderRadius: '4px',
  fontSize: '16px'
};

export default Navigation;
