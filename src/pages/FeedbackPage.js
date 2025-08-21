import React from 'react';
import Feedback from '../components/Feedback';

function FeedbackPage() {
  return (
    <div style={{ padding: '40px 20px' }}>
      <h1 style={{ textAlign: 'center', color: 'var(--primary-color)' }}>Feedback</h1>
      <Feedback />
    </div>
  );
}

export default FeedbackPage;
