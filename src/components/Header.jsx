import React from 'react';
import { ShoppingBag, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header style={{ background: 'rgba(255,255,255,0.95)', position: 'sticky', top: 0, zIndex: 1000, boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 20px' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: '900', background: 'linear-gradient(to right, #FF6B6B, #4ECDC4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          TREND OF THE WORLD
        </h1>
        <nav style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <a href="#products" style={{ textDecoration: 'none', color: '#333', fontWeight: '600' }}>The Soaps</a>
          <a href="#about" style={{ textDecoration: 'none', color: '#333', fontWeight: '600' }}>About</a>
          <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            <ShoppingBag color="#333" />
          </button>
        </nav>
      </div>
    </header>
  );
};
export default Header;
