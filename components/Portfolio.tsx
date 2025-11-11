import React, { useState, useEffect, useRef } from 'react';
import { PROJECTS } from '../constants';
import PortfolioHighlightSkeleton from './PortfolioHighlightSkeleton';

const Portfolio: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselContainerRef = useRef<HTMLDivElement>(null);
  const projectsToShow = PROJECTS.slice(0, 4);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Simulate a 1.5-second load time
    return () => clearTimeout(timer);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    window.location.hash = href;
  };

  const scrollToIndex = (index: number) => {
    const container = carouselContainerRef.current;
    if (container) {
      const slide = container.children[index] as HTMLElement;
      if (slide) {
        slide.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'start',
        });
      }
    }
  };

  const handlePrev = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : 0;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex < projectsToShow.length - 1 ? currentIndex + 1 : projectsToShow.length - 1;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  return (
    <section className="py-16 sm:py-24" id="work">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="w-full text-center md:text-left">
          <h2 className="font-heading text-3xl font-bold leading-tight tracking-tighter text-white md:text-4xl">Portfolio Highlights</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400 md:mx-0">A few selected projects that showcase my passion for creating impactful digital experiences.</p>
        </div>
        {!loading && (
          <div className="mx-auto mt-6 hidden items-center gap-2 md:mx-0 md:mt-0 md:flex">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="group rounded-full p-2 transition-colors bg-white/5 hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous project"
            >
              <span className="material-symbols-outlined text-white transition-colors group-hover:text-primary">chevron_left</span>
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex === projectsToShow.length - 1}
              className="group rounded-full p-2 transition-colors bg-white/5 hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next project"
            >
              <span className="material-symbols-outlined text-white transition-colors group-hover:text-primary">chevron_right</span>
            </button>
          </div>
        )}
      </div>
      <div ref={carouselContainerRef} className="carousel-container mt-8 flex gap-6 overflow-x-auto pb-8 sm:gap-8">
        {loading ? (
          <>
            <PortfolioHighlightSkeleton />
            <PortfolioHighlightSkeleton />
            <PortfolioHighlightSkeleton />
          </>
        ) : (
          projectsToShow.map((project) => (
            <a 
              href="#portfolio" 
              onClick={(e) => handleNavClick(e, '#portfolio')}
              key={project.id} 
              className="group block w-[80vw] max-w-sm flex-shrink-0 sm:w-80"
            >
              <div className="flex h-full transform flex-col overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-all duration-300 ease-in-out group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-primary/20">
                <div className="relative h-48 overflow-hidden">
                    <img className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" alt={project.alt} src={project.image} />
                </div>
                <div className="flex flex-grow flex-col p-6 pt-4">
                  <div className="mb-2 flex gap-2">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="rounded-full bg-primary/20 px-2 py-1 text-xs font-semibold text-primary">{tag}</span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <p className="mt-2 flex-grow text-sm text-gray-300">{project.description}</p>
                </div>
              </div>
            </a>
          ))
        )}
      </div>
      <div className="mt-8 text-center">
          <a 
              href="#portfolio" 
              onClick={(e) => handleNavClick(e, '#portfolio')} 
              className="inline-flex h-12 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-6 text-base font-bold leading-normal tracking-[0.015em] text-white transition-all hover:bg-primary/90"
          >
              <span className="truncate">View All Projects</span>
          </a>
      </div>
    </section>
  );
};

export default Portfolio;