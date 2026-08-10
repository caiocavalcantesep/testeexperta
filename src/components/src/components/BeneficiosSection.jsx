import React from 'react';
import {
  Tag, Headphones, Scale, CheckCircle, Zap, Share2
} from 'lucide-react';
import { CONFIG } from '../config';
import './BeneficiosSection.css';

const iconMap = {
  tag: Tag,
  headphones: Headphones,
  scale: Scale,
  checkCircle: CheckCircle,
  zap: Zap,
  share2: Share2
};

function BeneficiosSection() {
  return (
    <section id="beneficios" className="beneficios-section">
      <div className="beneficios-container">
        <h2 className="section-title">Por que participar?</h2>
        <p className="section-subtitle">Confira os benefícios da campanha</p>

        <div className="beneficios-grid">
          {CONFIG.beneficios.map((beneficio) => {
            const IconComponent = iconMap[beneficio.icone] || CheckCircle;
            return (
              <div
                key={beneficio.id}
                className="beneficio-card"
                style={{ '--accent-color': CONFIG.colors.accent }}
              >
                <div className="beneficio-icon" style={{ color: CONFIG.colors.accent }}>
                  <IconComponent size={40} />
                </div>
                <h3 className="beneficio-titulo">{beneficio.titulo}</h3>
                <p className="beneficio-descricao">{beneficio.descricao}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default BeneficiosSection;
