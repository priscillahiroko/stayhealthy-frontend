import React from 'react';
import PatientProfile from '../components/PatientProfile';

function ProfilePage() {
  return (
    <div style={{ padding: '40px 20px' }}>
      <h1 style={{ textAlign: 'center', color: 'var(--primary-color)' }}>My Profile</h1>
      <PatientProfile />
    </div>
  );
}

export default ProfilePage;
