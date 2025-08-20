import React from 'react';
import DoctorList from '../components/DoctorList';

function DoctorsPage() {
  return (
    <div className="container">
      <h1 style={titleStyle}>Nossos Médicos</h1>
      <DoctorList />
    </div>
  );
}

const titleStyle = {
  color: 'var(--primary-color)',
  textAlign: 'center',
  marginTop: '40px'
};

export default DoctorsPage;
