import React, { useState } from 'react';

const doctors = [
 { id:1, name: 'Dr. João Silva', specialty: 'Cardiologista' },
 { id:2, name: 'Dra. Maria Santos', specialty: 'Pediatra' },
 { id:3, name: 'Dr. Pedro Costa', specialty: 'Clínico Geral' }
];

function Appointment() {
 const [form, setForm] = useState({ doctor: '', date: '', time: '', specialty: '' });
 const [errors, setErrors] = useState({});

 const validate = () => {
 const e = {};
 if (!form.doctor) e.doctor = 'Selecione um médico';
 if (!form.date) e.date = 'Selecione uma data';
 if (!form.time) e.time = 'Selecione um horário';
 return e;
 };

 const submit = e => {
 e.preventDefault();
 const errs = validate();
 if (Object.keys(errs).length ===0) {
 const selectedDoctor = doctors.find(d => d.name === form.doctor);
 const appointmentData = {
 ...form,
 specialty: selectedDoctor ? selectedDoctor.specialty : ''
 };
 localStorage.setItem('nextAppointment', JSON.stringify(appointmentData));
 alert('Consulta agendada com sucesso!');
 window.location.href = '/';
 } else {
 setErrors(errs);
 }
 };

 return (
 <form onSubmit={submit} style={formStyle}>
 <div style={fieldStyle}>
 <label>Médico:</label>
 <select
 value={form.doctor}
 onChange={e => setForm({ ...form, doctor: e.target.value })}
 style={inputStyle}
 >
 <option value="">Selecione...</option>
 {doctors.map(d => (
 <option key={d.id} value={d.name}>{d.name}</option>
 ))}
 </select>
 {errors.doctor && <span style={errorStyle}>{errors.doctor}</span>}
 </div>
 <div style={fieldStyle}>
 <label>Data:</label>
 <input
 type="date"
 value={form.date}
 onChange={e => setForm({ ...form, date: e.target.value })}
 style={inputStyle}
 />
 {errors.date && <span style={errorStyle}>{errors.date}</span>}
 </div>
 <div style={fieldStyle}>
 <label>Horário:</label>
 <input
 type="time"
 value={form.time}
 onChange={e => setForm({ ...form, time: e.target.value })}
 style={inputStyle}
 />
 {errors.time && <span style={errorStyle}>{errors.time}</span>}
 </div>
 <button type="submit" style={buttonStyle}>Agendar</button>
 </form>
 );
}

const formStyle = {
 maxWidth: '400px',
 margin: '40px auto',
 padding: '30px',
 backgroundColor: 'white',
 borderRadius: 'var(--border-radius)',
 boxShadow: '02px8px rgba(0,0,0,0.1)'
};
const fieldStyle = { display: 'flex', flexDirection: 'column', marginBottom: '20px' };
const inputStyle = {
 padding: '10px',
 border: `1px solid var(--light-gray)`,
 borderRadius: 'var(--border-radius)'
};
const errorStyle = { color: 'red', fontSize: '14px' };
const buttonStyle = {
 width: '100%',
 backgroundColor: 'var(--primary-color)',
 color: 'white',
 padding: '12px',
 border: 'none',
 borderRadius: 'var(--border-radius)',
 fontSize: '16px'
};

export default Appointment;
