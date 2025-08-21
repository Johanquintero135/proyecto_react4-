import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar-gradient p-4 sticky top-0 z-50">
      <div className="navbar-container">
        <div className="navbar-flex">
          {/* Logo mejorado */}
          <div className="logo-text">
             Synapse
          </div>

          {/* Enlaces de navegación - pantallas grandes */}
          <div className="desktop-nav hidden md:flex">
            <a href="#inicio" className="nav-link">
               Inicio
            </a>
            <a href="#servicios" className="nav-link">
               Servicios
            </a>
            <a href="#contacto" className="nav-link">
               Contacto
            </a>
          </div>

          {/* Botón hamburguesa mejorado */}
          <button 
            onClick={toggleMenu}
            className="hamburger-btn md:hidden focus:outline-none"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Menú móvil mejorado */}
        {isMenuOpen && (
          <div className="mobile-menu md:hidden">
            <a 
              href="#inicio" 
              className="mobile-nav-link"
              onClick={closeMenu}
            >
              Inicio
            </a>
            <a 
              href="#servicios" 
              className="mobile-nav-link"
              onClick={closeMenu}
            >
               Servicios
            </a>
            <a 
              href="#contacto" 
              className="mobile-nav-link"
              onClick={closeMenu}
            >
               Contacto
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;