import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { CONFIG } from '../config';
import './Header.css';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <header className="header" style={{ backgroundColor: CONFIG.colors.primary }}>
      <div className="header-container">
        <div className="header-logo">
          <div className="logo-placeholder">{CONFIG.logos.empresa}</div>
        </div>

        <nav className="header-nav desktop-only">
          <button onClick={() => scrollToSection('inicio')} className="nav-link">Início</button>
          <button onClick={() => scrollToSection('beneficios')} className="nav-link">Benefícios</button>
          <button onClick={() => scrollToSection('como-participar')} className="nav-link">Como participar</button>
          <button onClick={() => scrollToSection('premios')} className="nav-link">Prêmios</button>
          <button onClick={() => scrollToSection('duvidas')} className="nav-link">Dúvidas</button>
          <button onClick={() => scrollToSection('regulamento')} className="nav-link">Regulamento</button>
        </nav>

        <button className="header-cta mobile-hidden" onClick={() => scrollToSection('formulario')}>
          Fazer minha cotação
        </button>

        <button className="menu-toggle mobile-only" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <nav className="mobile-menu">
          <button onClick={() => scrollToSection('inicio')} className="mobile-nav-link">Início</button>
          <button onClick={() => scrollToSection('beneficios')} className="mobile-nav-link">Benefícios</button>
          <button onClick={() => scrollToSection('como-participar')} className="mobile-nav-link">Como participar</button>
          <button onClick={() => scrollToSection('premios')} className="mobile-nav-link">Prêmios</button>
          <button onClick={() => scrollToSection('duvidas')} className="mobile-nav-link">Dúvidas</button>
          <button onClick={() => scrollToSection('regulamento')} className="mobile-nav-link">Regulamento</button>
          <button className="mobile-cta-button" onClick={() => scrollToSection('formulario')}>
            Fazer minha cotação
          </button>
        </nav>
      )}
    </header>
  );
}

export default Header;
