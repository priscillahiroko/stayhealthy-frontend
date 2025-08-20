import React, { useState } from 'react';

function Feedback() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Deixe seu Feedback</h2>
      <div style={starsStyle}>
        {[1, 2, 3, 4, 5].map(star => (
          <span 
            key={star}
            onClick={() => setRating(star)}
            style={{...starStyle, color: star <= rating ? 'var(--accent-color)' : '#ccc'}}
          >
            ★
          </span>
        ))}
      </div>
      <textarea 
        placeholder="Conte sua experiência..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        style={textareaStyle}
      />
      <button className="btn btn-primary">Enviar Feedback</button>
    </div>
  );
}

const containerStyle = {
  maxWidth: '600px',
  margin: '40px auto',
  padding: '30px',
  backgroundColor: 'white',
  borderRadius: 'var(--border-radius)',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
};

const titleStyle = {
  color: 'var(--primary-color)',
  marginBottom: '20px'
};

const starsStyle = {
  fontSize: '40px',
  marginBottom: '20px'
};

const starStyle = {
  cursor: 'pointer',
  transition: 'color 0.2s'
};

const textareaStyle = {
  width: '100%',
  minHeight: '150px',
  padding: '15px',
  border: '1px solid var(--light-gray)',
  borderRadius: 'var(--border-radius)',
  marginBottom: '20px',
  fontSize: '16px'
};

export default Feedback;
