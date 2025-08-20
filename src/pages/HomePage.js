import React from 'react';

function HomePage() {
  return (
    <div className="container">
      <section style={heroStyle}>
        <h1 style={heroTitleStyle}>Bem-vindo ao StayHealthy</h1>
        <p style={heroSubtitleStyle}>
          Conectando você aos melhores profissionais de saúde, a qualquer hora, em qualquer lugar
        </p>
        <button className="btn btn-primary" style={ctaButtonStyle}>
          Agendar Consulta Agora
        </button>
      </section>
      
      <section style={featuresStyle}>
        <div style={featureCardStyle}>
          <h3 style={featureTitleStyle}>📅 Agendamento Fácil</h3>
          <p>Agende consultas com poucos cliques</p>
        </div>
        <div style={featureCardStyle}>
          <h3 style={featureTitleStyle}>👨‍⚕️ Médicos Qualificados</h3>
          <p>Profissionais verificados e avaliados</p>
        </div>
        <div style={featureCardStyle}>
          <h3 style={featureTitleStyle}>💬 Feedback Transparente</h3>
          <p>Avaliações reais de pacientes</p>
        </div>
      </section>
    </div>
  );
}

const heroStyle = {
  textAlign: 'center',
  padding: '80px 20px',
  backgroundColor: 'var(--light-gray)',
  borderRadius: 'var(--border-radius)',
  marginTop: '40px'
};

const heroTitleStyle = {
  fontSize: '48px',
  color: 'var(--primary-color)',
  marginBottom: '20px'
};

const heroSubtitleStyle = {
  fontSize: '20px',
  color: 'var(--text-color)',
  marginBottom: '30px'
};

const ctaButtonStyle = {
  fontSize: '18px',
  padding: '15px 30px'
};

const featuresStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '30px',
  marginTop: '60px',
  marginBottom: '60px'
};

const featureCardStyle = {
  padding: '30px',
  backgroundColor: 'white',
  borderRadius: 'var(--border-radius)',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  textAlign: 'center'
};

const featureTitleStyle = {
  color: 'var(--secondary-color)',
  marginBottom: '15px'
};

export default HomePage;
