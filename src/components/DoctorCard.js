import React from 'react';
import InstantBooking from './InstantBooking';

function DoctorCard({ name, specialty, rating, image, experience, phone }) {
 return (
 <div style={cardStyle}>
 <img
 src={image || '/placeholder-doctor.jpg'}
 alt={name}
 style={imageStyle}
 />
 <h3 style={nameStyle}>{name}</h3>
 <p style={specialtyStyle}>Especialista em {specialty}</p>
 <p style={experienceStyle}>Tempo de experiência: {experience} anos</p>
 <div style={ratingStyle}>
 {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
 </div>
 <p style={phoneStyle}>Telefone: {phone}</p>
 <InstantBooking doctorName={name} />
 </div>
 );
}

const cardStyle = {
 border: `1px solid var(--light-gray)`,
 borderRadius: 'var(--border-radius)',
 padding: '20px',
 textAlign: 'center',
 backgroundColor: 'white',
 boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
 width: '250px', // Defina uma largura fixa para os cards
 transition: 'transform 0.2s',
};

const imageStyle = {
 width: '100%',
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

const experienceStyle = {
 color: 'var(--secondary-color)',
 marginBottom: '10px'
};

const ratingStyle = {
 marginBottom: '15px',
 color: 'var(--accent-color)',
 fontSize: '18px'
};

const phoneStyle = {
 color: 'var(--secondary-color)',
 marginBottom: '15px'
};

export default DoctorCard;
