import React from 'react';

const Hero = () => {
  return (
    <section style={{ 
      backgroundImage: 'url(/images/hero-bg.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '80vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      color: 'white',
      position: 'relative'
    }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.4)' }}></div>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '20px', textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
          Pick Your Mood.<br/>Pick Your Soap.
        </h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px' }}>
          A premium collection of funny mood soaps designed for humans with feelings… and occasional bad decisions ??
        </p>
        <button 
          className="btn-primary" 
          onClick={() => window.location.href="https://wa.me/218919330802"}
          style={{ fontSize: '1.2rem', padding: '15px 40px' }}
        >
          Order via WhatsApp
        </button>
      </div>
    </section>
  );
};
export default Hero;
