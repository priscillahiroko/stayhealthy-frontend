import React, { useState } from 'react';
import DoctorCard from './DoctorCard';

function DoctorList() {
  const [search, setSearch] = useState('');
  const doctors = [
    { id: 1, name: 'Dr. João Silva', specialty: 'Cardiologista', rating: 5, image: '/placeholder-doctor.jpg' },
    { id: 2, name: 'Dra. Maria Santos', specialty: 'Pediatra', rating: 4, image: '/placeholder-doctor.jpg' },
    { id: 3, name: 'Dr. Pedro Costa', specialty: 'Clínico Geral', rating: 5, image: '/placeholder-doctor.jpg' }
  ];

  const filtered = doctors.filter(d =>
    d.name.toLowerCase().includes(search.toLowerCase()) ||
    d.specialty.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ margin: '20px 0' }}>
        <input
          type="text"
          placeholder="Search doctors by name or specialty..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{
            width: '100%',
            maxWidth: '500px',
            padding: '12px',
            border: `2px solid var(--primary-color)`,
            borderRadius: 'var(--border-radius)',
            marginBottom: '20px'
          }}
        />
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '20px',
        margin: '0 auto',
        maxWidth: '1200px' // Ajuste o valor conforme necessário
      }}>
        {filtered.map(d => (
          <DoctorCard key={d.id} {...d} />
        ))}
      </div>
    </div>
  );
}

export default DoctorList;
