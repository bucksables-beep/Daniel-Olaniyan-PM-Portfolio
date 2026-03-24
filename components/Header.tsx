import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', path: '/about' },
    { name: 'Work', path: '/work' },
    { name: 'Recognition', path: '/recognition' },
    { name: 'Services', path: '/services' },
    { name: 'Writing', path: '/writing' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] flex items-center bg-[#070B12]/92 backdrop-blur-[24px] border-b border-white/5 px-6 md:px-12 transition-all duration-300 ${isScrolled ? 'h-16' : 'h-20'}`}>
      <Link to="/" className="font-syne font-extrabold text-2xl text-[#DDE4EE] no-underline tracking-[-0.5px] mr-10 shrink-0">
        D<span className="text-[#0DDFF2]">.</span>O
      </Link>
      <div className="hidden md:block w-px h-8 bg-white/5 mr-10 shrink-0"></div>
      <span className="hidden lg:block font-mono text-xs text-[#3A4D62] tracking-[0.08em] mr-auto whitespace-nowrap uppercase">
        AI Product Leader &nbsp;·&nbsp; <strong className="text-[#6E8099] font-medium">Systems Architect</strong>
      </span>
      <ul className="hidden md:flex gap-0 list-none items-stretch h-full">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link 
              to={item.path}
              className={`font-mono text-sm no-underline tracking-[0.06em] px-6 flex items-center h-full border-l border-white/5 transition-all duration-200 hover:text-[#0DDFF2] hover:bg-[#0DDFF2]/10 ${location.pathname === item.path ? 'text-[#0DDFF2] bg-[#0DDFF2]/5' : 'text-[#6E8099]'}`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-3 px-6 border-l border-white/5 h-full shrink-0">
        <div className="w-2 h-2 rounded-full bg-[#0DDFF2] animate-[blink_2s_infinite]"></div>
        <span className="font-mono text-xs text-[#0DDFF2] tracking-[0.08em] whitespace-nowrap uppercase">Available</span>
      </div>
      <Link 
        to="/contact"
        className={`flex items-center h-full px-8 border-l border-white/5 shrink-0 font-mono text-sm no-underline tracking-[0.06em] transition-all duration-200 ${location.pathname === '/contact' ? 'bg-[#0DDFF2] text-[#070B12]' : 'bg-[#0DDFF2]/10 text-[#0DDFF2] hover:bg-[#0DDFF2] hover:text-[#070B12]'}`}
      >
        Get in Touch
      </Link>
    </nav>
  );
};

export default Header;
