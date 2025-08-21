import React from 'react';

function InstantBooking({ doctorName }) {
  const handleClick = () => {
    const now = new Date();
    const appt = {
      doctor: doctorName || 'Next Available Doctor',
      date: now.toLocaleDateString('pt-BR'),
      time: now.toLocaleTimeString('pt-BR'),
      instant: true
    };
    localStorage.setItem('nextAppointment', JSON.stringify(appt));
    alert(`Consulta instantânea agendada com ${appt.doctor}!`);
    window.location.reload();
  };

  return (
    <button onClick={handleClick} style={instantStyle}>
      ⚡ Instant Booking
    </button>
  );
}

const instantStyle = {
  marginTop: '10px',
  width: '100%',
  backgroundColor: 'var(--secondary-color)',
  color: 'white',
  border: 'none',
  padding: '10px',
  borderRadius: 'var(--border-radius)',
  fontSize: '16px'
};

export default InstantBooking;
