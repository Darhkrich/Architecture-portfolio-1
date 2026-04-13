"use client"; // Must be a client component to use hooks
import { useState } from 'react';
import Link from 'next/link';
import { useModal } from '../context/ModalContext';
import styles from './Navbar.module.css';

export default function Navbar() {
  const { toggleContact } = useModal();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo} onClick={closeMenu}>
        ARCH.STUDIO
      </Link>
      
      {/* Desktop Links */}
      <div className={styles.links}>
        <Link href="/#work" className={styles.linkItem}>Work</Link>
        <Link href="/#studio" className={styles.linkItem}>Studio</Link>
        <button className={styles.contactBtn} onClick={toggleContact}>
          Contact
        </button>
      </div>

      {/* Hamburger Icon */}
      <button 
        className={styles.hamburger} 
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          {isMenuOpen ? (
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          ) : (
            <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          )}
        </svg>
      </button>

      {/* Mobile Menu Overlay */}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
        <Link href="/#work" className={styles.linkItem} onClick={closeMenu}>Work</Link>
        <Link href="/#studio" className={styles.linkItem} onClick={closeMenu}>Studio</Link>
        <button className={styles.contactBtn} onClick={() => { closeMenu(); toggleContact(); }}>
          Contact
        </button>
      </div>
    </nav>
  );
}