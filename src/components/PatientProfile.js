import React, { useState } from 'react';

function PatientProfile() {
  const [profile, setProfile] = useState({
    name: '',
    age: '',
    phone: '',
    bloodType: '',
    address: ''
  });

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Meu Perfil</h2>
      <form style={formStyle}>
        <input 
          type="text"
          placeholder="Nome completo"
          value={profile.name}
          onChange={(e) => setProfile({...profile, name: e.target.value})}
          style={inputStyle}
        />
        <input 
          type="number"
          placeholder="Idade"
          value={profile.age}
          onChange={(e) => setProfile({...profile, age: e.target.value})}
          style={inputStyle}
        />
        <input 
          type="tel"
          placeholder="Telefone"
          value={profile.phone}
          onChange={(e) => setProfile({...profile, phone: e.target.value})}
          style={inputStyle}
        />
        <select 
          value={profile.bloodType}
          onChange={(e) => setProfile({...profile, bloodType: e.target.value})}
          style={inputStyle}
        >
          <option value="">Tipo Sanguíneo</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </select>
        <textarea 
          placeholder="Endereço"
          value={profile.address}
          onChange={(e) => setProfile({...profile, address: e.target.value})}
          style={textareaStyle}
        />
        <button type="submit" className="btn btn-primary">
          Salvar Perfil
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
  gap: '15px'
};

const inputStyle = {
  padding: '12px',
  border: '1px solid var(--light-gray)',
  borderRadius: 'var(--border-radius)',
  fontSize: '16px'
};

const textareaStyle = {
  padding: '12px',
  border: '1px solid var(--light-gray)',
  borderRadius: 'var(--border-radius)',
  fontSize: '16px',
  minHeight: '100px'
};

export default PatientProfile;
