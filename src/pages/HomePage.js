import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div style={{ textAlign: 'center', padding: '60px 20px' }}>
      <h1>Welcome to StayHealthy</h1>
      <p>Your health is our priority. Book online appointments easily.</p>
      <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'center', gap: '15px' }}>
        <Link to="/doctors"><button style={btn}>Find Doctors</button></Link>
        <Link to="/appointments"><button style={btn}>Make Appointment</button></Link>
      </div>
    </div>
  );
}

const btn = {
  backgroundColor: 'var(--primary-color)',
  color: 'white',
  border: 'none',
  padding: '12px 24px',
  borderRadius: 'var(--border-radius)',
  fontSize: '16px',
  cursor: 'pointer'
};

export default HomePage;
