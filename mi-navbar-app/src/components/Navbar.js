import React, { useState } from "react";

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
          {/* Logo */}
          <div className="logo-text">Synapse</div>

          {/* Links visibles solo en pantallas grandes */}
          <div className="hidden md:flex gap-4">
            <a href="#inicio" className="nav-link">Inicio</a>
            <a href="#servicios" className="nav-link">Servicios</a>
            <a href="#contacto" className="nav-link">Contacto</a>
          </div>

          {/* Botón hamburguesa: solo en pantallas pequeñas */}
          <button
            onClick={toggleMenu}
            className="hamburger-btn md:hidden focus:outline-none"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Menú móvil: aparece solo cuando se abre */}
        {isMenuOpen && (
          <div className="mobile-menu md:hidden">
            <a href="#inicio" className="mobile-nav-link" onClick={closeMenu}>Inicio</a>
            <a href="#servicios" className="mobile-nav-link" onClick={closeMenu}>Servicios</a>
            <a href="#contacto" className="mobile-nav-link" onClick={closeMenu}>Contacto</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
