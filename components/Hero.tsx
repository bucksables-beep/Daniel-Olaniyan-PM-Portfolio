import React from 'react';
import { Link } from 'react-router-dom';
import { STATS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="min-h-[calc(100vh-80px)] grid grid-cols-1 lg:grid-cols-[1fr_auto] items-center gap-16 lg:gap-24 px-6 md:px-20 lg:pr-32 py-20 md:py-24 relative" id="hero">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_60%_80%_at_70%_50%,rgba(13,223,242,0.05)_0%,transparent_65%),radial-gradient(ellipse_40%_50%_at_5%_75%,rgba(232,184,75,0.03)_0%,transparent_60%)]"></div>
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_90%_90%_at_50%_50%,black_0%,transparent_100%)]"></div>
      
      <div className="relative z-[2] max-w-[700px]">
        <div className="font-mono text-xs md:text-sm text-[#0DDFF2] tracking-[0.2em] uppercase flex items-center gap-4 mb-8 md:mb-10 animate-[fadeUp_0.7s_0.2s_forwards] opacity-0">
          <div className="w-8 md:w-10 h-px bg-[#0DDFF2]"></div>
          AI Product Leader & Systems Architect
        </div>
        <h1 className="font-syne font-extrabold text-huge text-[#DDE4EE] animate-[fadeUp_0.8s_0.35s_forwards] opacity-0">
          I build intelligence<br />that <em className="not-italic text-[#0DDFF2]">ships.</em>
        </h1>
        <p className="mt-8 md:mt-10 text-lg md:text-body-xl text-[#6E8099] font-light max-w-[550px] animate-[fadeUp_0.8s_0.5s_forwards] opacity-0">
          From autonomous agent pipelines to AI product strategy — I operate at the boundary where product thinking meets serious engineering, for companies that need intelligence in production, not in a deck.
        </p>
        <div className="flex flex-wrap gap-4 md:gap-6 items-center mt-10 md:mt-12 animate-[fadeUp_0.8s_0.65s_forwards] opacity-0">
          <Link to="/work" className="w-full sm:w-auto text-center font-mono text-sm tracking-[0.06em] px-10 py-5 bg-[#0DDFF2] text-[#070B12] rounded-[4px] no-underline transition-all duration-200 font-bold hover:bg-[#0bc8d9] uppercase">
            See My Work
          </Link>
          <Link to="/contact" className="w-full sm:w-auto text-center font-mono text-sm tracking-[0.06em] px-10 py-5 bg-transparent text-[#6E8099] border border-white/10 rounded-[4px] no-underline transition-all duration-200 hover:border-[#0DDFF2]/30 hover:text-[#0DDFF2] uppercase">
            Get in Touch
          </Link>
        </div>
        <div className="flex flex-wrap gap-x-12 md:gap-x-16 gap-y-8 mt-16 md:mt-20 pt-10 md:pt-12 border-t border-white/10 animate-[fadeUp_0.8s_0.8s_forwards] opacity-0">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <div className="font-syne font-bold text-3xl md:text-4xl text-[#DDE4EE] leading-none">
                {stat.value}<span className="text-[#0DDFF2]">{stat.suffix}</span>
              </div>
              <div className="font-mono text-[10px] md:text-xs text-[#3A4D62] tracking-[0.1em] uppercase mt-3">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-[2] animate-[fadeIn_1s_0.5s_forwards] opacity-0 flex justify-center lg:justify-end p-0 lg:p-12 mt-16 lg:mt-0">
        <div className="relative w-full max-w-[320px] xl:max-w-[380px] aspect-[4/5] group">
          {/* Decorative elements */}
          <div className="absolute inset-[-2px] border border-[#0DDFF2]/20 rounded-[12px] pointer-events-none transition-all duration-500 group-hover:border-[#0DDFF2]/40"></div>
          <div className="absolute inset-[-40px] bg-[radial-gradient(ellipse_at_center,rgba(13,223,242,0.15)_0%,transparent_70%)] z-[-1]"></div>
          
          {/* Main Card */}
          <div className="w-full h-full rounded-[10px] overflow-hidden bg-[#0C1220] border border-white/10 relative shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" 
              alt="Professional Portrait" 
              className="w-full h-full object-cover opacity-80 grayscale hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070B12] via-transparent to-transparent opacity-60"></div>
            
            {/* Floating Info Tag */}
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-[#0C1220]/80 backdrop-blur-md border border-white/10 rounded-[8px] transform transition-all duration-500 group-hover:translate-y-[-8px]">
              <span className="font-mono text-[10px] text-[#0DDFF2] tracking-[0.2em] uppercase block mb-2">Current Focus</span>
              <p className="text-lg text-[#DDE4EE] font-medium leading-tight">Scaling Multi-Agent Systems for Enterprise production</p>
            </div>
          </div>

          {/* Secondary Floating Card */}
          <div className="absolute -top-6 -right-6 bg-[#0DDFF2] p-3 px-5 rounded-[4px] shadow-2xl rotate-3 z-10">
            <span className="font-mono text-[10px] text-[#070B12] font-bold tracking-[0.1em] uppercase">Status: Available</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
