import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Software from './components/Software';
import Contact from './components/Contact';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './theme';
import { FaMoon, FaSun, FaBars } from 'react-icons/fa';
import lightLogo from './assets/mrkit_light_logo.png';
import darkLogo from './assets/mrkit_dark_logo.png';
import Modal from './components/Modal';

function App() {
  const [theme, setTheme] = useState('light');
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cursorHovered, setCursorHovered] = useState(false);
  const [showModal, setShowModal] = useState(true);

  const navbarRef = useRef(null);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 100 && !isScrolled) {
      setIsScrolled(true);
    } else if (scrollY <= 100 && isScrolled) {
      setIsScrolled(false);
    }

    if (menuOpen) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    const throttleScroll = setInterval(() => {
      handleScroll();
    }, 100); 

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearInterval(throttleScroll);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolled]);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleMouseMove = (e) => {
    const cursor = document.querySelector('.cursor');
    if (cursor) {
      const targetX = e.clientX;
      const targetY = e.clientY;
  
      let currentX = parseFloat(cursor.style.left || targetX);
      let currentY = parseFloat(cursor.style.top || targetY);
  
      const animateCursor = () => {
        currentX += (targetX - currentX) * 0.2;
        currentY += (targetY - currentY) * 0.2;
  
        cursor.style.left = `${currentX}px`;
        cursor.style.top = `${currentY}px`;
  
        if (Math.abs(currentX - targetX) > 0.1 || Math.abs(currentY - targetY) > 0.1) {
          requestAnimationFrame(animateCursor);
        }
      };
  
      requestAnimationFrame(animateCursor);
    }
  };

  const handleMouseEnter = () => {
    setCursorHovered(true);
  };

  const handleMouseLeave = () => {
    setCursorHovered(false);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    document.body.className = theme;

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [theme]);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Router>
        <div className="app-container">
          {showModal && (
            <Modal onClose={() => setShowModal(false)}>
            </Modal>
          )}
          <header
            ref={navbarRef}
            className={`header flex  py-4 px-6 shadow-md transition-all duration-300 ${
              isScrolled ? 'floating-navbar' : ''
            }`}
            style={{
              backgroundColor: theme === 'light' ? '#FFFFFF' : '#292926',
              color: theme === 'light' ? '#000' : '#FFF',
            }}
          >
              <button
                className="menu-toggle text-xl ml-4 transition-colors duration-300"
                style={{ color: theme === 'light' ? '#000' : '#FFF' }}
                onClick={toggleMenu}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <FaBars />
              </button>
            
            <img
              src={theme === 'light' ? darkLogo : lightLogo}
              alt="Logo"
              className={`logo transition-all duration-300 ${
                isScrolled ? 'centered-logo' : 'left-logo'
              }`}
            />
            <nav className={`nav ${menuOpen ? 'visible' : ''} ${isScrolled ? (menuOpen ? 'visible' : 'hidden') : ''}`}>
              <Link to="/" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Home</Link>
              <Link to="/software" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Software</Link>
              <Link
                to="#"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={() => window.location.href = 'mailto:mmreyes22@gmail.com?'}
              >
                Contact
              </Link>

          </nav>
            <button
              className={`theme-toggle text-xl ml-auto transition-colors duration-300 ${
                theme === 'light' ? 'text-gray-900' : 'text-gray-200'
              }`}
              onClick={toggleTheme}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {theme === 'light' ? <FaMoon /> : <FaSun />}
            </button>
          </header>

          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/software" element={<Software />} />
            </Routes>
          </main>
        </div>
        <div className={`cursor ${cursorHovered ? 'hovered' : ''}`}></div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
