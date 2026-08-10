import React from 'react';
import { CONFIG } from '../config';
import { AlertCircle } from 'lucide-react';
import './Hero.css';

function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="hero" style={{ backgroundColor: CONFIG.colors.light }}>
      <div className="hero-content">
        <h1 className="hero-title">{CONFIG.campanha.nome}</h1>
        
        <p className="hero-subtitle">{CONFIG.campanha.subtitulo}</p>
        
        <p className="hero-description">{CONFIG.campanha.descricao}</p>

        <div className="hero-ctas">
          <button 
            className="cta-primary"
            onClick={() => scrollToSection('formulario')}
            style={{ backgroundColor: CONFIG.colors.secondary }}
          >
            Fazer minha cotação
          </button>
          <button 
            className="cta-secondary"
            onClick={() => scrollToSection('compartilhar')}
            style={{ borderColor: CONFIG.colors.primary, color: CONFIG.colors.primary }}
          >
            Compartilhar oportunidade
          </button>
        </div>

        <div className="hero-seal" style={{ backgroundColor: CONFIG.colors.accent }}>
          <span className="seal-text">{CONFIG.campanha.desconto}</span>
          <span className="seal-subtext">de desconto</span>
        </div>

        <div className="hero-aviso">
          <AlertCircle size={20} color={CONFIG.colors.primary} />
          <p>{CONFIG.campanha.avisoDesconto}</p>
        </div>
      </div>

      <div className="hero-illustration" style={{ borderColor: CONFIG.colors.primary }}>
        <span>ESPAÇO PARA ILUSTRAÇÃO</span>
      </div>
    </section>
  );
}

export default Hero;
