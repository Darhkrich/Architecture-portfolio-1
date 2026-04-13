

"use client"; // Must be a client component to use hooks
import Link from 'next/link';
import { useModal } from '../context/ModalContext';

// Keep your existing styles objects (navStyle, logoStyle, linkContainer)...
const navStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '2rem 5%', 
  position: 'fixed',
  top: 0,
  width: '100%',
  zIndex: 100,
  backgroundColor: 'rgba(15, 15, 15, 0.9)', 
  backdropFilter: 'blur(5px)',
  borderBottom: '1px solid #333'
};

const logoStyle = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  letterSpacing: '2px',
  color: '#e0e0e0'
};

const linkContainer = {
  display: 'flex',
  gap: '2rem',
  alignItems: 'center'
};

export default function Navbar() {
  const { toggleContact } = useModal();

  return (
    <nav style={navStyle}>
      <Link href="/" style={logoStyle}>ARCH.STUDIO</Link>
      
      <div style={linkContainer}>
        <Link href="/#work">Work</Link>
        <Link href="/#studio">Studio</Link>
        
        {/* Changed from Link to Button for functionality */}
        <button 
          onClick={toggleContact}
          style={{
            background: 'none',
            border: 'none',
            color: '#c4a059',
            fontSize: '1rem',
            cursor: 'pointer',
            fontFamily: 'inherit',
            textTransform: 'uppercase'
          }}
        >
          Contact
        </button>
      </div>
    </nav>
  );
}