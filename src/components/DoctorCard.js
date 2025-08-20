import React from 'react';

function DoctorCard({ name, specialty, rating, image }) {
  return (
    <div style={cardStyle}>
      <img src={image || '/placeholder-doctor.jpg'} alt={name} style={imageStyle} />
      <h3 style={nameStyle}>{name}</h3>
      <p style={specialtyStyle}>{specialty}</p>
      <div style={ratingStyle}>
        {'⭐'.repeat(rating)} {rating}/5
      </div>
      <button className="btn btn-primary" style={buttonStyle}>
        Agendar Consulta
      </button>
    </div>
  );
}

const cardStyle = {
  border: '1px solid var(--light-gray)',
  borderRadius: 'var(--border-radius)',
  padding: '20px',
  textAlign: 'center',
  backgroundColor: 'white',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  transition: 'transform 0.3s ease',
  cursor: 'pointer'
};

const imageStyle = {
  width: '150px',
  height: '150px',
  borderRadius: '50%',
  objectFit: 'cover',
  marginBottom: '15px'
};

const nameStyle = {
  color: 'var(--text-color)',
  marginBottom: '5px'
};

const specialtyStyle = {
  color: 'var(--secondary-color)',
  marginBottom: '10px'
};

const ratingStyle = {
  marginBottom: '15px',
  color: 'var(--accent-color)'
};

const buttonStyle = {
  width: '100%'
};

export default DoctorCard;
