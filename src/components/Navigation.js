import React from 'react';

function Navigation() {
  return (
    <nav style={navStyle}>
      <div className="container" style={containerStyle}>
        <h1 style={logoStyle}>StayHealthy</h1>
        <ul style={menuStyle}>
          <li><a href="/" style={linkStyle}>Home</a></li>
          <li><a href="/doctors" style={linkStyle}>Médicos</a></li>
          <li><a href="/appointments" style={linkStyle}>Consultas</a></li>
          <li><a href="/profile" style={linkStyle}>Perfil</a></li>
          <li><a href="/feedback" style={linkStyle}>Feedback</a></li>
        </ul>
      </div>
    </nav>
  );
}

const navStyle = {
  backgroundColor: 'var(--primary-color)',
  padding: '1rem 0',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 20px'
};

const logoStyle = {
  color: 'white',
  fontSize: '24px'
};

const menuStyle = {
  display: 'flex',
  listStyle: 'none',
  gap: '30px'
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '16px'
};

export default Navigation;
