import React from 'react';
import { CONFIG } from '../config';
import { AlertCircle } from 'lucide-react';
import './ComoParticiparSection.css';

function ComoParticiparSection() {
  return (
    <section id="como-participar" className="como-participar-section">
      <div className="como-participar-container">
        <h2 className="section-title">Como participar</h2>
        <p className="section-subtitle">Quatro passos simples</p>

        <div className="etapas-container">
          {CONFIG.etapas.map((etapa, index) => (
            <div key={etapa.numero} className="etapa">
              <div className="etapa-numero" style={{ backgroundColor: CONFIG.colors.secondary }}>
                {etapa.numero}
              </div>
              <h3 className="etapa-titulo">{etapa.titulo}</h3>
              <p className="etapa-descricao">{etapa.descricao}</p>
              {index < CONFIG.etapas.length - 1 && (
                <div className="etapa-seta" style={{ color: CONFIG.colors.primary }}>→</div>
              )}
            </div>
          ))}
        </div>

        <div className="etapas-aviso">
          <AlertCircle size={20} color={CONFIG.colors.primary} />
          <p>A mecânica definitiva e a distribuição de chances estão sujeitas à aprovação do regulamento.</p>
        </div>
      </div>
    </section>
  );
}

export default ComoParticiparSection;
