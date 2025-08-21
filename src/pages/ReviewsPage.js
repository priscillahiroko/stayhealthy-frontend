import React, { useState, useEffect } from 'react';

function ReviewsPage() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const mock = [
      { id:1, patientName:'João S.', doctor:'Dr. João Silva', rating:5, comment:'Excelente médico!', date:'15/08/2024'},
      { id:2, patientName:'Maria P.', doctor:'Dra. Maria Santos', rating:4, comment:'Recomendo!', date:'10/08/2024'}
    ];
    const userRev = localStorage.getItem('userReview');
    if (userRev) {
      const ur = JSON.parse(userRev);
      mock.unshift({ id:0, patientName:'Você', doctor:'Dr. Pedro Costa', rating:ur.rating, comment:ur.comment, date:ur.date });
    }
    setReviews(mock);
  }, []);

  return (
    <div style={{ maxWidth:'1200px', margin:'40px auto', padding:'0 20px' }}>
      <h1 style={{ textAlign:'center', color:'var(--primary-color)', marginBottom:'30px' }}>Patient Reviews</h1>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(350px,1fr))', gap:'20px' }}>
        {reviews.map(r => (
          <div key={r.id} style={{ backgroundColor:'white', padding:'20px', borderRadius:'var(--border-radius)', boxShadow:'0 2px 8px rgba(0,0,0,0.1)' }}>
            <div style={{ display:'flex', justifyContent:'space-between', marginBottom:'10px' }}>
              <strong>{r.patientName}</strong>
              <span style={{ color:'#666' }}>{r.date}</span>
            </div>
            <div style={{ color:'var(--accent-color)', fontSize:'20px', marginBottom:'10px' }}>
              {'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}
            </div>
            <p style={{ fontWeight:'bold', marginBottom:'10px' }}>Doctor: {r.doctor}</p>
            <p style={{ fontStyle:'italic' }}>"{r.comment}"</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReviewsPage;
