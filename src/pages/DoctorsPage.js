import React from 'react';
import DoctorList from '../components/DoctorList';

function DoctorsPage() {
  return (
    <div style={{ padding: '40px 20px' }}>
      <h1 style={{ textAlign: 'center', color: 'var(--primary-color)' }}>Our Doctors</h1>
      <DoctorList />
    </div>
  );
}

export default DoctorsPage;
