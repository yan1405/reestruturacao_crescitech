import { useState, useEffect } from 'react';
import NavIndicator from './components/ui/NavIndicator';
import HeroScreen from './components/sections/HeroScreen';
import Section01Diagnostico from './components/sections/Section01Diagnostico';
import Section02Proposta from './components/sections/Section02Proposta';
import Section03FrAiDay from './components/sections/Section03FrAiDay';
import Section04Portfolio from './components/sections/Section04Portfolio';
import Section05Marketing from './components/sections/Section05Marketing';
import Section06Funil from './components/sections/Section06Funil';
import Section07Advocacia from './components/sections/Section07Advocacia';
import Section08Onboarding from './components/sections/Section08Onboarding';
import Section09Roadmap from './components/sections/Section09Roadmap';

function App() {
  const [currentScreen, setCurrentScreen] = useState(0);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const index = parseInt(id.split('-')[1]);
          setCurrentScreen(index);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    const sections = document.querySelectorAll('.snap-section');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const scrollToSection = (index) => {
    const element = document.getElementById(`tela-${index}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <NavIndicator current={currentScreen} onChange={scrollToSection} />
      
      <main>
        <div id="tela-0"><HeroScreen /></div>
        <div id="tela-1"><Section01Diagnostico /></div>
        <div id="tela-2"><Section02Proposta /></div>
        <div id="tela-3"><Section03FrAiDay /></div>
        <div id="tela-4"><Section04Portfolio /></div>
        <div id="tela-5"><Section05Marketing /></div>
        <div id="tela-6"><Section06Funil /></div>
        <div id="tela-7"><Section07Advocacia /></div>
        <div id="tela-8"><Section08Onboarding /></div>
        <div id="tela-9"><Section09Roadmap /></div>
      </main>
    </>
  );
}

export default App;
