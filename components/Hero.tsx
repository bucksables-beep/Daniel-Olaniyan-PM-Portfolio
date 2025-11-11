import React from 'react';

const Hero: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    window.location.hash = href;
  };

  return (
    <section className="flex min-h-[80vh] items-center py-16 md:py-24">
      <div className="w-full text-center">
        <div className="flex flex-col items-center">
          <p className="font-semibold text-primary">Product Leader & Innovator</p>
          <h1 className="mt-2 max-w-3xl text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
            Crafting the Future of AI & SaaS Products
          </h1>
          <p className="mt-4 max-w-2xl text-base text-gray-300 sm:text-lg">
            I transform complex challenges into user-centric solutions that drive growth and create impact across global markets.
          </p>
          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a className="flex h-12 w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-6 text-base font-bold leading-normal tracking-[0.015em] text-white transition-all hover:bg-primary/90 sm:w-auto" href="#portfolio" onClick={(e) => handleNavClick(e, '#portfolio')}>
              <span className="truncate">View My Work</span>
            </a>
            <a className="flex h-12 w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-white/10 px-6 text-base font-bold leading-normal tracking-[0.015em] text-white transition-all hover:bg-white/20 sm:w-auto" href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>
              <span className="truncate">Get in Touch</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;