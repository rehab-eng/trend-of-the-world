import { Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ background: '#2D3436', color: 'white', padding: '50px 0' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 style={{ marginBottom: '20px' }}>Trend Of The World</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginBottom: '30px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Phone size={20} color="#4ECDC4" />
            <span>0919330802</span>
          </div>
        </div>
        <div style={{ borderTop: '1px solid #444', paddingTop: '20px', fontSize: '0.8rem', opacity: 0.5 }}>
          &copy; 2026 Trend Of The World.
        </div>
      </div>
    </footer>
  );
};
export default Footer;
