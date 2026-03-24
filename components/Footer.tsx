import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0C1220] border-t border-white/10 p-12 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between relative z-[2]">
      <div className="font-syne font-extrabold text-2xl text-[#DDE4EE] tracking-[-0.5px]">
        D<span className="text-[#0DDFF2]">.</span>O
      </div>
      <div className="font-mono text-xs text-[#3A4D62] mt-6 md:mt-0 uppercase tracking-widest">
        © 2026 Daniel Olaniyan
      </div>
      <div className="font-syne text-sm text-[#6E8099] mt-6 md:mt-0 uppercase tracking-wider">
        AI Product Leader · Systems Architect · Consultant
      </div>
    </footer>
  );
};

export default Footer;
