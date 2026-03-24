import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0C1220] border-t border-white/10 py-12 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-8 relative z-[2]">
      <div className="font-syne font-extrabold text-2xl text-[#DDE4EE] tracking-[-0.5px]">
        D<span className="text-[#0DDFF2]">.</span>O
      </div>
      <div className="font-syne text-[10px] md:text-sm text-[#6E8099] uppercase tracking-wider text-center md:text-left">
        AI Product Leader · Systems Architect · Consultant
      </div>
      <div className="font-mono text-[10px] md:text-xs text-[#3A4D62] uppercase tracking-widest">
        © 2026 Daniel Olaniyan
      </div>
    </footer>
  );
};

export default Footer;
