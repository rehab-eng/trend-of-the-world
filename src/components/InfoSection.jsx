import React from 'react';
import { Truck, Gift, Globe } from 'lucide-react';

const InfoSection = () => {
  return (
    <section id="about" style={{ padding: '80px 0', background: '#fff' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px' }}>
          <h2 className="section-title">Not Just A Soap ??</h2>
          <p style={{ fontSize: '1.1rem', color: '#555' }}>
            Trend Of The World is a limited soap collection where each bar represents a mood. 
            You don’t choose soap like a robot. You choose it like a person.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', marginBottom: '80px' }}>
          <div className="card"><Gift size={40} color="#FF6B6B" /><h3>Premium & Giftable</h3><p>Luxury aesthetic with a surprise scent.</p></div>
          <div className="card"><Globe size={40} color="#4ECDC4" /><h3>China Manufacturing</h3><p>Partnered with top factories for high quality.</p></div>
          <div className="card"><Truck size={40} color="#6c5ce7" /><h3>Worldwide Shipping</h3><p>We ship internationally with tracking.</p></div>
        </div>
      </div>
    </section>
  );
};
export default InfoSection;
