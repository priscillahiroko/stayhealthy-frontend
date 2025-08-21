import React, { useState, useEffect } from 'react';

function PatientProfile() {
  const [profile, setProfile] = useState({ name: '', age: '', phone: '', bloodType: '', address: '' });
  const [saved, setSaved] = useState(null);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('userProfile');
    if (stored) {
      setSaved(JSON.parse(stored));
      setProfile(JSON.parse(stored));
    }
  }, []);

  const save = e => {
    e.preventDefault();
    localStorage.setItem('userProfile', JSON.stringify(profile));
    setSaved(profile);
    setEditing(false);
    alert('Perfil atualizado!');
  };

  return (
    <div style={{ maxWidth: '500px', margin: '40px auto', padding: '20px', backgroundColor: 'white', borderRadius: 'var(--border-radius)', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
      <h2 style={{ textAlign: 'center', color: 'var(--primary-color)' }}>Meu Perfil</h2>
      {!editing && saved ? (
        <div>
          <p><strong>Nome:</strong> {saved.name}</p>
          <p><strong>Idade:</strong> {saved.age}</p>
          <p><strong>Telefone:</strong> {saved.phone}</p>
          <p><strong>Tipo Sanguíneo:</strong> {saved.bloodType}</p>
          <p><strong>Endereço:</strong> {saved.address}</p>
          <button onClick={() => setEditing(true)} style={{ backgroundColor: 'var(--primary-color)', color: 'white', border: 'none', padding: '10px 20px', borderRadius: 'var(--border-radius)' }}>
            ✏️ Editar Perfil
          </button>
        </div>
      ) : (
        <form onSubmit={save} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <input type="text" placeholder="Nome" value={profile.name} onChange={e => setProfile({ ...profile, name: e.target.value })} required style={inputStyle} />
          <input type="number" placeholder="Idade" value={profile.age} onChange={e => setProfile({ ...profile, age: e.target.value })} required style={inputStyle} />
          <input type="tel" placeholder="Telefone" value={profile.phone} onChange={e => setProfile({ ...profile, phone: e.target.value })} required style={inputStyle} />
          <select value={profile.bloodType} onChange={e => setProfile({ ...profile, bloodType: e.target.value })} required style={inputStyle}>
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
          <textarea placeholder="Endereço" value={profile.address} onChange={e => setProfile({ ...profile, address: e.target.value })} required style={inputStyle} />
          <button type="submit" style={btnStyle}>Salvar Perfil</button>
        </form>
      )}
    </div>
  );
}

const inputStyle = {
  padding: '10px',
  border: `1px solid var(--light-gray)`,
  borderRadius: 'var(--border-radius)',
  fontSize: '16px'
};
const btnStyle = {
  backgroundColor: 'var(--primary-color)',
  color: 'white',
  border: 'none',
  padding: '12px',
  borderRadius: 'var(--border-radius)',
  fontSize: '16px'
};

export default PatientProfile;
