import React from 'react';
import { Link } from 'react-router-dom';
import { STATS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="min-h-[calc(100vh-80px)] grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-8 px-6 md:px-20 py-20 md:py-24 relative overflow-hidden" id="hero">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_60%_80%_at_70%_50%,rgba(13,223,242,0.05)_0%,transparent_65%),radial-gradient(ellipse_40%_50%_at_5%_75%,rgba(232,184,75,0.03)_0%,transparent_60%)]"></div>
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_90%_90%_at_50%_50%,black_0%,transparent_100%)]"></div>
      
      {/* Left Content - 7 Columns */}
      <div className="relative z-[2] lg:col-span-7 xl:col-span-8">
        <div className="font-mono text-xs md:text-sm text-[#0DDFF2] tracking-[0.2em] uppercase flex items-center gap-4 mb-8 md:mb-10 animate-[fadeUp_0.7s_0.2s_forwards] opacity-0">
          <div className="w-8 md:w-10 h-px bg-[#0DDFF2]"></div>
          AI Product Leader & Systems Architect
        </div>
        <h1 className="font-syne font-extrabold text-huge text-[#DDE4EE] animate-[fadeUp_0.8s_0.35s_forwards] opacity-0 leading-[1.05]">
          I build intelligence<br />that <em className="not-italic text-[#0DDFF2]">ships.</em>
        </h1>
        <p className="mt-8 md:mt-10 text-lg md:text-body-xl text-[#6E8099] font-light max-w-[550px] animate-[fadeUp_0.8s_0.5s_forwards] opacity-0">
          From autonomous agent pipelines to AI product strategy — I operate at the boundary where product thinking meets serious engineering, for companies that need intelligence in production, not in a deck.
        </p>
        <div className="flex flex-wrap gap-4 md:gap-6 items-center mt-10 md:mt-12 animate-[fadeUp_0.8s_0.65s_forwards] opacity-0">
          <Link to="/work" className="w-full sm:w-auto text-center font-mono text-sm tracking-[0.06em] px-10 py-5 bg-[#0DDFF2] text-[#070B12] rounded-[4px] no-underline transition-all duration-200 font-bold hover:bg-[#0bc8d9] uppercase shadow-[0_0_20px_rgba(13,223,242,0.2)]">
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

      {/* Right Content - 5 Columns */}
      <div className="relative z-[2] lg:col-span-5 xl:col-span-4 animate-[fadeIn_1s_0.5s_forwards] opacity-0 flex justify-center lg:justify-end mt-16 lg:mt-0">
        <div className="relative w-full max-w-[340px] xl:max-w-[400px] aspect-[4/5] group perspective-1000">
          {/* Floating Animation Wrapper */}
          <div className="w-full h-full animate-[float_6s_ease-in-out_infinite]">
            {/* Decorative elements */}
            <div className="absolute inset-[-2px] border border-[#0DDFF2]/20 rounded-[12px] pointer-events-none transition-all duration-500 group-hover:border-[#0DDFF2]/40 z-20"></div>
            <div className="absolute inset-[-40px] bg-[radial-gradient(ellipse_at_center,rgba(13,223,242,0.15)_0%,transparent_70%)] z-[-1]"></div>
            
            {/* Main Card */}
            <div className="w-full h-full rounded-[10px] overflow-hidden bg-[#0C1220] border border-white/10 relative shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:scale-[1.02]">
              <img 
                src="https://lh3.googleusercontent.com/d/1WiwhF_MJhSkA58MmBVL06PmE8DTAAx2C" 
                alt="Daniel Olaniyan" 
                className="w-full h-full object-cover object-[center_20%] opacity-80 grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070B12] via-transparent to-transparent opacity-80"></div>
              
              {/* Floating Info Tag */}
              <div className="absolute bottom-6 left-6 right-6 p-5 bg-[#0C1220]/80 backdrop-blur-md border border-white/10 rounded-[8px] transform transition-all duration-500 group-hover:translate-y-[-8px] shadow-xl">
                <span className="font-mono text-[10px] text-[#0DDFF2] tracking-[0.2em] uppercase block mb-2">Current Focus</span>
                <p className="text-base md:text-lg text-[#DDE4EE] font-medium leading-tight">Scaling Multi-Agent Systems for Enterprise production</p>
              </div>
            </div>

            {/* Tech Badges */}
            <div className="absolute top-1/4 -right-12 bg-[#0C1220]/90 backdrop-blur-md border border-white/10 p-3 rounded-[4px] shadow-2xl rotate-6 z-30 hidden xl:block">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#0DDFF2]"></div>
                <span className="font-mono text-[9px] text-[#DDE4EE] uppercase tracking-wider">Product Manager</span>
              </div>
            </div>
            
            <div className="absolute top-1/2 -left-8 bg-[#0C1220]/90 backdrop-blur-md border border-white/10 p-3 rounded-[4px] shadow-2xl -rotate-6 z-30 hidden xl:block">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#E8B84B]"></div>
                <span className="font-mono text-[9px] text-[#DDE4EE] uppercase tracking-wider">Systems Architect</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
