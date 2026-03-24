import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: 'About', path: '/about' },
    { name: 'Work', path: '/work' },
    { name: 'Recognition', path: '/recognition' },
    { name: 'Services', path: '/services' },
    { name: 'Writing', path: '/writing' },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const linkVariants = {
    closed: { opacity: 0, y: 20 },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + i * 0.1,
        duration: 0.4,
        ease: "easeOut"
      }
    })
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[99999] flex items-center border-b border-white/5 px-6 md:px-12 transition-all duration-300 
      ${isScrolled || isMobileMenuOpen ? 'bg-[#070B12] h-16' : 'bg-[#070B12]/80 backdrop-blur-[24px] h-20'}
      ${isMobileMenuOpen ? 'h-20 bg-[#070B12]' : ''}`}>
      <Link to="/" className="font-syne font-extrabold text-2xl text-[#DDE4EE] no-underline tracking-[-0.5px] mr-10 shrink-0 relative z-[100002]">
        D<span className="text-[#0DDFF2]">.</span>O
      </Link>
      
      <div className="hidden md:block w-px h-8 bg-white/5 mr-10 shrink-0"></div>
      
      <span className="hidden lg:block font-mono text-xs text-[#3A4D62] tracking-[0.08em] mr-auto whitespace-nowrap uppercase">
        AI Product Leader &nbsp;·&nbsp; <strong className="text-[#6E8099] font-medium">Systems Architect</strong>
      </span>

      {/* Desktop Navigation */}
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

      <Link 
        to="/contact"
        className={`hidden md:flex items-center h-full px-8 border-l border-white/5 shrink-0 font-mono text-sm no-underline tracking-[0.06em] transition-all duration-200 ${location.pathname === '/contact' ? 'bg-[#0DDFF2] text-[#070B12]' : 'bg-[#0DDFF2]/10 text-[#0DDFF2] hover:bg-[#0DDFF2] hover:text-[#070B12]'}`}
      >
        Get in Touch
      </Link>

      {/* Mobile Menu Toggle */}
      <button 
        className="md:hidden ml-auto p-2 text-[#DDE4EE] hover:text-[#0DDFF2] transition-colors relative z-[100002]"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-[#070B12] z-[100001] flex flex-col p-6 pt-32"
          >
            <ul className="flex flex-col gap-6 list-none p-0 mb-12">
              {navItems.map((item, i) => (
                <motion.li 
                  key={item.name}
                  custom={i}
                  variants={linkVariants}
                >
                  <Link 
                    to={item.path}
                    className={`font-syne font-bold text-5xl no-underline tracking-tight transition-all duration-200 block ${location.pathname === item.path ? 'text-[#0DDFF2]' : 'text-[#DDE4EE]'}`}
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
              <motion.li 
                custom={navItems.length}
                variants={linkVariants}
              >
                <Link 
                  to="/contact"
                  className={`font-syne font-bold text-5xl no-underline tracking-tight transition-all duration-200 block ${location.pathname === '/contact' ? 'text-[#0DDFF2]' : 'text-[#DDE4EE]'}`}
                >
                  Contact
                </Link>
              </motion.li>
            </ul>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-auto pt-8 border-t border-white/10"
            >
              <p className="font-mono text-[10px] text-[#3A4D62] uppercase tracking-widest leading-relaxed">
                AI Product Leader & Systems Architect
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;
