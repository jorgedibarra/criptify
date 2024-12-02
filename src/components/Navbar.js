import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const styles = {
    nav: {
      position: 'fixed',
      width: '100%',
      zIndex: 10,
      transition: 'all 0.3s ease',
      backgroundColor: isScrolled ? '#ffffff' : 'transparent',
      boxShadow: isScrolled ? '0 2px 4px rgba(0,0,0,0.1)' : 'none',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '4rem',
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: isScrolled ? '#333333' : '#ffffff',
      textDecoration: 'none',
    },
    menuButton: {
      display: 'none',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '0.5rem',
      color: isScrolled ? '#333333' : '#ffffff',
      '@media (max-width: 768px)': {
        display: 'block',
      },
    },
    menuIcon: {
      width: '25px',
      height: '2px',
      backgroundColor: 'currentColor',
      position: 'relative',
      transition: 'all 0.3s ease',
      '::before': {
        content: '""',
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'currentColor',
        top: '-8px',
        transition: 'all 0.3s ease',
      },
      '::after': {
        content: '""',
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'currentColor',
        bottom: '-8px',
        transition: 'all 0.3s ease',
      },
    },
    menuList: {
      display: 'flex',
      listStyle: 'none',
      margin: 0,
      padding: 0,
      '@media (max-width: 768px)': {
        display: isMenuOpen ? 'flex' : 'none',
        flexDirection: 'column',
        position: 'absolute',
        top: '4rem',
        left: 0,
        width: '100%',
        backgroundColor: '#ffffff',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      },
    },
    menuItem: {
      margin: '0 1rem',
      '@media (max-width: 768px)': {
        margin: 0,
      },
    },
    menuLink: {
      color: isScrolled ? '#333333' : '#ffffff',
      textDecoration: 'none',
      padding: '0.5rem',
      transition: 'all 0.3s ease',
      ':hover': {
        backgroundColor: isScrolled ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.2)',
        borderRadius: '4px',
      },
      '@media (max-width: 768px)': {
        display: 'block',
        padding: '1rem',
        color: '#333333',
      },
    },
  }

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        <a href="#inicio" style={styles.logo}>
          <img src="/assets/images/unlock.png" alt="Logo" style={{ marginRight: '8px' }} />
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Criptify</span>
        </a>
        <button
          style={styles.menuButton}
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
        >
          <span style={styles.menuIcon}></span>
        </button>
        <ul style={styles.menuList}>
          
            <li style={styles.menuItem}>
              <a href="#inicio" style={styles.menuLink}>
                Inicio
              </a>
            </li>
            <li style={styles.menuItem}>
              <a href="#acerca" style={styles.menuLink}>
                Acerca de
              </a>
            </li>
            <li style={styles.menuItem}>
              <a href="#probar" style={styles.menuLink}>
                Probar
              </a>
            </li>
            <li style={styles.menuItem}>
              <a href="#contacto" style={styles.menuLink}>
                Nosotros
              </a>
            </li>
          
        </ul>
      </div>
    </nav>
  )
}

export default Navbar