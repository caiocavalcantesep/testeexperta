import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BeneficiosSection from './components/BeneficiosSection';
import ComoParticiparSection from './components/ComoParticiparSection';
import MecanicaSection from './components/MecanicaSection';
import PremiosSection from './components/PremiosSection';
import CompartilharSection from './components/CompartilharSection';
import FormularioSection from './components/FormularioSection';
import FAQSection from './components/FAQSection';
import CronogramaSection from './components/CronogramaSection';
import RegulamentoSection from './components/RegulamentoSection';
import ContatoSection from './components/ContatoSection';
import Footer from './components/Footer';
import FloatingButton from './components/FloatingButton';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <BeneficiosSection />
        <ComoParticiparSection />
        <MecanicaSection />
        <PremiosSection />
        <CompartilharSection />
        <FormularioSection />
        <FAQSection />
        <CronogramaSection />
        <RegulamentoSection />
        <ContatoSection />
      </main>
      <Footer />
      <FloatingButton />
    </div>
  );
}

export default App;
