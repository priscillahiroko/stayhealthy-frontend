import React, { useState } from 'react';

function Appointment() {
  const [formData, setFormData] = useState({
    doctor: '',
    date: '',
    time: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Agendamento:', formData);
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Agendar Consulta</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <div style={fieldStyle}>
          <label>Médico:</label>
          <select 
            value={formData.doctor}
            onChange={(e) => setFormData({...formData, doctor: e.target.value})}
            style={inputStyle}
          >
            <option value="">Selecione um médico</option>
            <option value="dr-joao">Dr. João Silva</option>
            <option value="dra-maria">Dra. Maria Santos</option>
          </select>
        </div>
        
        <div style={fieldStyle}>
          <label>Data:</label>
          <input 
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({...formData, date: e.target.value})}
            style={inputStyle}
          />
        </div>
        
        <div style={fieldStyle}>
          <label>Horário:</label>
          <input 
            type="time"
            value={formData.time}
            onChange={(e) => setFormData({...formData, time: e.target.value})}
            style={inputStyle}
          />
        </div>
        
        <button type="submit" className="btn btn-primary">
          Confirmar Agendamento
        </button>
      </form>
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
  marginBottom: '30px'
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px'
};

const fieldStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px'
};

const inputStyle = {
  padding: '10px',
  border: '1px solid var(--light-gray)',
  borderRadius: 'var(--border-radius)',
  fontSize: '16px'
};

export default Appointment;
