import React from 'react';

const products = [
  { title: "Mentally Out Of Office", desc: "When you want peace", scent: "Fresh Tropical Energy", color: "#4ECDC4", img: "url(/images/soap1.jpg)" },
  { title: "Self-Love Mode On", desc: "When you want self-care", scent: "Sweet Soft Luxury", color: "#FF6B6B", img: "url(/images/soap2.jpg)" },
  { title: "I’m Fine. It’s Fine.", desc: "When life hits hard", scent: "Bright Uplifting", color: "#FFE66D", img: "url(/images/soap3.jpg)" },
  { title: "Washing Away Bad Decisions", desc: "For a fresh restart", scent: "Clean Fresh New Life", color: "#6c5ce7", img: "url(/images/soap4.jpg)" }
];

const ProductGrid = () => {
  return (
    <section id="products" style={{ padding: '80px 0' }}>
      <div className="container">
        <h2 className="section-title">Choose Your Mood ??</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
          {products.map((item, index) => (
            <div key={index} className="card" style={{ borderTop: `5px solid ${item.color}` }}>
              <div style={{ 
                  height: '200px', 
                  background: item.img, 
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: '10px', 
                  marginBottom: '15px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  color: '#aaa',
                  backgroundColor: '#eee' 
              }}>
              </div>
              <h3 style={{ marginBottom: '10px' }}>{item.title}</h3>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>{item.desc}</p>
              <div style={{ marginTop: '15px', padding: '10px', background: '#f9f9f9', borderRadius: '8px', fontSize: '0.8rem' }}>
                <strong>Scent:</strong> {item.scent}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProductGrid;
