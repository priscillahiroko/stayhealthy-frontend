import React from 'react';
import DoctorCard from './DoctorCard';

function DoctorList() {
  const doctors = [
    { id: 1, name: 'Dr. João Silva', specialty: 'Cardiologista', rating: 5 },
    { id: 2, name: 'Dra. Maria Santos', specialty: 'Pediatra', rating: 4 },
    { id: 3, name: 'Dr. Pedro Costa', specialty: 'Clínico Geral', rating: 5 }
  ];

  return (
    <div style={gridStyle}>
      {doctors.map(doctor => (
        <DoctorCard key={doctor.id} {...doctor} />
      ))}
    </div>
  );
}

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  gap: '30px',
  padding: '40px 0'
};

export default DoctorList;
