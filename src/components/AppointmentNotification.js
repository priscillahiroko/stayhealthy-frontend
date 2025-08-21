import React, { useState, useEffect } from 'react';

function AppointmentNotification() {
  const [nextAppointment, setNextAppointment] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const appt = localStorage.getItem('nextAppointment');
    if (appt) {
      setNextAppointment(JSON.parse(appt));
      setVisible(true);
    }
  }, []);

  if (!visible || !nextAppointment) return null;

  return (
    <div style={notificationStyle}>
      <div style={contentStyle}>
        <span style={iconStyle}>🔔</span>
        <div>
          <strong>Next Appointment:</strong>
          <p>{nextAppointment.doctor} — {nextAppointment.date} at {nextAppointment.time}</p>
        </div>
        <button onClick={() => setVisible(false)} style={closeButtonStyle}>✕</button>
      </div>
    </div>
  );
}

const notificationStyle = {
  position: 'fixed',
  top: '80px',
  right: '20px',
  backgroundColor: 'var(--accent-color)',
  color: 'white',
  padding: '15px 20px',
  borderRadius: 'var(--border-radius)',
  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
  zIndex: 1000,
  maxWidth: '350px'
};

const contentStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '15px'
};

const iconStyle = { fontSize: '24px' };

const closeButtonStyle = {
  background: 'transparent',
  border: 'none',
  color: 'white',
  fontSize: '18px',
  cursor: 'pointer',
  marginLeft: 'auto'
};

export default AppointmentNotification;
