import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp() {
 const navigate = useNavigate();
 const [data, setData] = useState({ role: '', name: '', email: '', password: '' });
 const [errors, setErrors] = useState({});

 const validate = () => {
 const e = {};
 if (!data.role) e.role = 'Role obrigatório';
 if (!data.name || data.name.length < 5) e.name = 'Nome deve ter pelo menos 5 caracteres';
 if (!data.email) e.email = 'Email obrigatório';
 else if (!data.email.includes('@')) e.email = 'Email inválido';
 if (!data.password) e.password = 'Senha obrigatória';
 else if (data.password.length < 8) e.password = 'Senha deve ter pelo menos 8 caracteres';
 return e;
 };

 const submit = e => {
 e.preventDefault();
 const eForm = validate();
 if (Object.keys(eForm).length ===0) {
 localStorage.setItem('user', JSON.stringify(data));
 alert('Cadastro realizado!');
 navigate('/login');
 } else setErrors(eForm);
 };

 return (
 <div style={container}>
 <h2 style={title}>Sign Up</h2>
 <form onSubmit={submit} style={form}>
 <div style={field}>
 <label>Role:</label>
 <select
 value={data.role}
 onChange={e => setData({ ...data, role: e.target.value })}
 style={input}
 >
 <option value="">Selecione</option>
 <option value="patient">Paciente</option>
 <option value="doctor">Médico</option>
 </select>
 {errors.role && <span style={error}>{errors.role}</span>}
 </div>

 <div style={field}>
 <label>Nome:</label>
 <input
 type="text"
 value={data.name}
 onChange={e => setData({ ...data, name: e.target.value })}
 style={input}
 />
 {errors.name && <span style={error}>{errors.name}</span>}
 </div>

 <div style={field}>
 <label>Email:</label>
 <input
 type="email"
 value={data.email}
 onChange={e => setData({ ...data, email: e.target.value })}
 style={input}
 />
 {errors.email && <span style={error}>{errors.email}</span>}
 </div>
        
 <div style={field}>
 <label>Senha:</label>
 <input
 type="password"
 value={data.password}
 onChange={e => setData({ ...data, password: e.target.value })}
 style={input}
 />
 {errors.password && <span style={error}>{errors.password}</span>}
 </div>
        
 <button type="submit" style={btn}>Cadastrar</button>
 </form>
 </div>
 );
}

const container = {
 maxWidth: '400px',
 margin: '40px auto',
 padding: '30px',
 backgroundColor: 'white',
 borderRadius: 'var(--border-radius)',
 boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
};
const title = { textAlign: 'center', color: 'var(--primary-color)', marginBottom: '20px' };
const form = { display: 'flex', flexDirection: 'column', gap: '20px' };
const field = { display: 'flex', flexDirection: 'column', gap: '8px' };
const input = {
 padding: '10px',
 border: '1px solid var(--light-gray)',
 borderRadius: 'var(--border-radius)',
 fontSize: '16px'
};
const error = { color: 'red', fontSize: '14px' };
const btn = {
 backgroundColor: 'var(--primary-color)',
 color: 'white',
 border: 'none',
 padding: '12px',
 borderRadius: 'var(--border-radius)',
 fontSize: '16px'
};

export default SignUp;
