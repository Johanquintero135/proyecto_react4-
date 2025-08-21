import React from 'react';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      {/* Contenido mejorado */}
      <main className="main-content">
        <section id="inicio" className="section">
          <h1 className="section-title"> Bienvenido a Synapse</h1>
          <p className="section-text">
            Descubre una experiencia única con nuestro navbar responsivo de última generación. 
            Diseñado con las mejores prácticas de UX/UI y tecnologías modernas.
          </p>
          <p className="section-text">
            Navega fácilmente entre nuestras secciones y disfruta de las animaciones suaves 
            y efectos visuales que harán tu experiencia memorable.
          </p>
        </section>
        
        <section id="servicios" className="section">
          <h2 className="section-subtitle"> Nuestros Servicios</h2>
          <p className="section-text">
            Ofrecemos soluciones innovadoras y personalizadas para todas tus necesidades:
          </p>
          <div style={{marginLeft: '2rem'}}>
            <p className="section-text">Diseño UX/UI moderno y responsive</p>
            <p className="section-text"> Desarrollo web con React y tecnologías actuales</p>
            <p className="section-text"> Aplicaciones móviles nativas y híbridas</p>
            <p className="section-text"> Mantenimiento y optimización continua</p>
          </div>
        </section>
        
        <section id="contacto" className="section">
          <h2 className="section-subtitle"> Contacto</h2>
          <p className="section-text">
            ¿Listo para llevar tu proyecto al siguiente nivel? 
            Nos encantaría escuchar tus ideas y ayudarte a hacerlas realidad.
          </p>
          <p className="section-text">
             Email: contacto@miaplicacion.com<br/>
             Teléfono: +57 300 123 4567<br/>
             Ubicación: Bogotá, Colombia
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;