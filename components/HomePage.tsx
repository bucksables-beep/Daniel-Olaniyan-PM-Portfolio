import React from 'react';
import Hero from './Hero';
import Stats from './Stats';
import Skills from './Skills';
import Portfolio from './Portfolio';
import About from './About';
import Contact from './Contact';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Stats />
      <Skills />
      <Portfolio />
      <About />
      <Contact />
    </>
  );
};

export default HomePage;