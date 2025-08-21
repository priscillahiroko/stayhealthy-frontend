import React from 'react';
import Appointment from '../components/Appointment';

function AppointmentsPage() {
  return (
    <div style={{ padding: '40px 20px' }}>
      <h1 style={{ textAlign: 'center', color: 'var(--primary-color)' }}>Book an Appointment</h1>
      <Appointment />
    </div>
  );
}

export default AppointmentsPage;
