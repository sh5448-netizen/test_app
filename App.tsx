import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Process from './components/Process';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';
import BenefitBanner from './components/BenefitBanner';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navigation />
      <main>
        <Hero />
        <Stats />
        <Services />
        <About />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <AIAssistant />
      <BenefitBanner />
    </div>
  );
};

export default App;