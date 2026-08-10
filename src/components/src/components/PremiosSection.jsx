import React from 'react';
import { CONFIG } from '../config';
import { Tv, Speaker, Fuel, Gift, AlertCircle } from 'lucide-react';
import './PremiosSection.css';

const iconMap = {
  tv: Tv,
  speaker: Speaker,
  fuel: Fuel,
  gift: Gift
};

function PremiosSection() {
  return (
    <section id="premios" className="premios-section">
      <div className="premios-container">
        <h2 className="section-title">Prêmios</h2>
        <p className="section-subtitle">Concorra a estes incríveis prêmios</p>

        <div className="premios-grid">
          {CONFIG.premios.map((premio) => {
            const IconComponent = iconMap[premio.icone] || Gift;
            return (
              <div key={premio.id} className="premio-card">
                <div className="premio-icone" style={{ color: CONFIG.colors.accent }}>
                  <IconComponent size={48} />
                </div>
                <h3 className="premio-nome">{premio.nome}</h3>
                <p className="premio-descricao">{premio.descricao}</p>
              </div>
            );
          })}
        </div>

        <div className="premios-aviso">
          <AlertCircle size={20} color={CONFIG.colors.primary} />
          <p>Premiação sujeita à confirmação. Consulte o regulamento para as condições completas.</p>
        </div>
      </div>
    </section>
  );
}

export default PremiosSection;
