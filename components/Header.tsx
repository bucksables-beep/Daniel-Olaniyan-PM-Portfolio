import React, { useState, useEffect } from 'react';

interface HeaderProps {
  activeRoute: string;
}

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#contact', label: 'Contact' },
];

const Header: React.FC<HeaderProps> = ({ activeRoute }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Effect to prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Cleanup function to reset scroll on component unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    window.location.hash = href;
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-white/10 py-3">
      <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-3 text-white z-50">
        <img src="https://lh3.googleusercontent.com/d/1mw8eJPPMUvcyC2w-xfWf6mxrHQVsTSr6" alt="Daniel Olaniyan Logo" className="h-8 w-auto" />
        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Daniel Olaniyan</h2>
      </a>
      
      {/* Desktop Navigation */}
      <nav className="hidden md:flex flex-1 justify-end items-center gap-8">
        <div className="flex items-center gap-9">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`transition-colors text-sm font-medium leading-normal ${
                activeRoute === link.href ? 'text-white' : 'text-neutral-300 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
        <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
          <span className="truncate">Get in Touch</span>
        </a>
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden z-50">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="text-white p-2"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <span className="material-symbols-outlined text-3xl">
            {isMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        id="mobile-menu"
        className={`fixed inset-0 bg-background-dark/80 backdrop-blur-sm z-40 flex flex-col items-center justify-center md:hidden transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div className="flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
          <nav className={`flex flex-col items-center gap-8 transition-all duration-300 ease-in-out ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-5 opacity-0'}`}>
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`transition-colors text-2xl font-medium leading-normal ${
                  activeRoute === link.href ? 'text-primary' : 'text-neutral-300 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a 
            href="#contact" 
            onClick={(e) => handleNavClick(e, '#contact')}
            className={`mt-12 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-all duration-300 ease-in-out ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-5 opacity-0'}`}
          >
            <span className="truncate">Get in Touch</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;