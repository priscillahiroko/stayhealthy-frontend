import React, { useState, useEffect } from 'react';

function Feedback() {
 const [rating, setRating] = useState(0);
 const [comment, setComment] = useState('');
 const [hasReviewed, setHasReviewed] = useState(false);
 const [review, setReview] = useState(null);
 const [appointment, setAppointment] = useState(null);

 useEffect(() => {
 const stored = localStorage.getItem('userReview');
 if (stored) {
 setHasReviewed(true);
 setReview(JSON.parse(stored));
 }

 const nextAppointment = localStorage.getItem('nextAppointment');
 if (nextAppointment) {
 setAppointment(JSON.parse(nextAppointment));
 }
 }, []);

 const submit = e => {
 e.preventDefault();
 if (rating ===0) return alert('Selecione uma avaliação');
 const rev = { rating, comment, date: new Date().toLocaleDateString('pt-BR') };
 localStorage.setItem('userReview', JSON.stringify(rev));
 setReview(rev);
 setHasReviewed(true);
 alert('Avaliação enviada!');
 };

 return (
 <div style={{ maxWidth: '500px', margin: '40px auto', padding: '20px', backgroundColor: 'white', borderRadius: 'var(--border-radius)', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
 <h2 style={{ textAlign: 'center', color: 'var(--primary-color)' }}>Feedback</h2>

 {appointment ? (
 <div>
 <p><strong>Doutor(a):</strong> {appointment.doctor}</p>
 <p><strong>Especialidade:</strong> {appointment.specialty || 'Não especificada'}</p>
 </div>
 ) : (
 <p>Nenhuma consulta agendada.</p>
 )}

 {hasReviewed ? (
 <div style={{ textAlign: 'center' }}>
 <div style={{ fontSize: '24px', color: 'var(--accent-color)' }}>
 {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
 </div>
 <p style={{ fontStyle: 'italic', margin: '20px0' }}>"{review.comment}"</p>
 <small>Enviado em {review.date}</small>
 <br />
 <button disabled style={{ marginTop: '20px', padding: '10px20px', backgroundColor: '#ccc', border: 'none', borderRadius: 'var(--border-radius)' }}>
 Review já enviado
 </button>
 </div>
 ) : (
 <form onSubmit={submit}>
 <div style={{ textAlign: 'center', marginBottom: '20px' }}>
 {[1,2,3,4,5].map(n => (
 <span key={n} onClick={() => setRating(n)} style={{ fontSize: '30px', color: n <= rating ? 'var(--accent-color)' : '#ccc', cursor: 'pointer' }}>
 ★
 </span>
 ))}
 </div>
 <textarea
 placeholder="Conte sua experiência..."
 value={comment}
 onChange={e => setComment(e.target.value)}
 required
 style={{ width: '100%', padding: '10px', borderRadius: 'var(--border-radius)', border: `1px solid var(--light-gray)`, marginBottom: '20px' }}
 />
 <button type="submit" style={{ backgroundColor: 'var(--primary-color)', color: 'white', border: 'none', padding: '12px', borderRadius: 'var(--border-radius)', width: '100%' }} disabled={hasReviewed}>
 Enviar Feedback
 </button>
 </form>
 )}
 </div>
 );
}

export default Feedback;
