import React from 'react';
import { CONFIG } from '../config';
import { AlertCircle } from 'lucide-react';
import './MecanicaSection.css';

function MecanicaSection() {
  return (
    <section className="mecanica-section">
      <div className="mecanica-container">
        <div className="mecanica-header">
          <h2 className="section-title">Mecânica Promocional</h2>
          <span className="mecanica-status" style={{ 
            backgroundColor: '#fee2e2', 
            color: '#991b1b' 
          }}>
            <AlertCircle size={16} /> {CONFIG.mecanica.status}
          </span>
        </div>

        <div className="mecanica-grid">
          <div className="mecanica-card">
            <h3>{CONFIG.mecanica.cotacao.label}</h3>
            <p className="mecanica-chances" style={{ color: CONFIG.colors.secondary }}>
              {CONFIG.mecanica.cotacao.chances}
            </p>
            <p className="mecanica-descricao">{CONFIG.mecanica.cotacao.descricao}</p>
          </div>

          <div className="mecanica-card">
            <h3>{CONFIG.mecanica.contratacao.label}</h3>
            <p className="mecanica-chances" style={{ color: CONFIG.colors.secondary }}>
              {CONFIG.mecanica.contratacao.chances}
            </p>
            <p className="mecanica-descricao">{CONFIG.mecanica.contratacao.descricao}</p>
          </div>

          <div className="mecanica-card">
            <h3>{CONFIG.mecanica.indicacao.label}</h3>
            <p className="mecanica-chances" style={{ color: CONFIG.colors.secondary }}>
              {CONFIG.mecanica.indicacao.chances}
            </p>
            <p className="mecanica-descricao">{CONFIG.mecanica.indicacao.descricao}</p>
          </div>
        </div>

        <div className="mecanica-aviso">
          <AlertCircle size={20} color={CONFIG.colors.primary} />
          <p>Estes valores estão em validação. Consulte o regulamento para as informações definitivas.</p>
        </div>
      </div>
    </section>
  );
}

export default MecanicaSection;
