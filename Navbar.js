import React, { useState, useEffect, useRef } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen); 
  };

  const handleCloseButtonClick = () => {
    setIsOpen(false); 
  };

  const handleOutsideClick = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsOpen(false); 
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <header className="navbar">
      <div className="logo">
        <a href='/'>
          <img src="/Assets/logo.svg" alt="Logo" />
        </a>
      </div>
      <nav className={`nav ${isOpen ? 'open' : ''}`} ref={navRef}>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li><a href="#ommig">Om Mig</a></li>
          <li><a href="mailto:jakob.b.k.k@hotmail.com">Kontakt Mig</a></li>
          <li><a href="/Assets/CVJakob2024.pdf" target="_blank" rel="noopener noreferrer">Mit CV</a></li>
        </ul>
      </nav>
      <div className={`burger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <div className={`close-button ${isOpen ? 'open' : ''}`} onClick={handleCloseButtonClick}>
        <div className="line1"></div>
        <div className="line2"></div>
      </div>
    </header>
  );
}

export default Navbar;
