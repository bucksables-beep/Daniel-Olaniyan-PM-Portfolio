import React from 'react';

const About: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    window.location.hash = href;
  };

  return (
    <section className="py-16 sm:py-24" id="about">
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-5 md:gap-12">
        <div className="md:col-span-2">
          <img 
            className="w-full rounded-xl object-cover aspect-[3/4]" 
            alt="Professional headshot of Daniel Olaniyan." 
            src="https://lh3.googleusercontent.com/d/1uf0cktl4ZVsKnQAT4ByS1ZtyDBMi7MOl" 
          />
        </div>
        <div className="md:col-span-3">
          <h2 className="font-heading text-3xl font-bold leading-tight tracking-tighter text-white md:text-4xl">Driven by Impact and Innovation</h2>
          <p className="mt-4 leading-relaxed text-gray-300">I'm a product leader passionate about building technology that matters. With expertise in AI, SaaS and Fintech, I specialize in transforming complex challenges into user-friendly solutions that drive business growth and improve lives.</p>
          <p className="mt-4 leading-relaxed text-gray-300">From launching products in global markets to leading cross-functional teams, my focus is always on creating value and delivering excellence.</p>
          <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="mt-8 inline-flex h-12 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-white/10 px-6 text-base font-bold leading-normal tracking-[0.015em] text-white transition-all hover:bg-white/20">
            <span className="truncate">More About Me</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;