import React from 'react';
import { PROJECTS } from '../constants';

const Portfolio: React.FC = () => {
  return (
    <section className="py-20 md:py-32 px-6 md:px-20 bg-[#070B12] min-h-[calc(100vh-80px)]" id="work">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 reveal">
        <div className="max-w-[800px]">
          <div className="font-mono text-xs md:text-sm text-[#0DDFF2] tracking-[0.2em] uppercase flex items-center gap-4 mb-6">
            Work
            <div className="w-12 md:w-16 h-px bg-[#0DDFF2]/30"></div>
          </div>
          <h2 className="font-syne font-bold text-3xl md:text-5xl lg:text-title tracking-[-0.03em] leading-[1.1] text-[#DDE4EE]">
            AI systems that ship and run.
          </h2>
        </div>
        <p className="max-w-[400px] text-lg md:text-xl text-[#6E8099] leading-[1.7] font-light mt-8 md:mt-0">
          Not demos. Autonomous pipelines in production, solving real problems.
        </p>
      </div>

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {PROJECTS.map((project, idx) => (
          <div 
            key={project.id} 
            className={`bg-[#111827] border border-white/10 p-8 md:p-12 flex flex-col min-h-[350px] md:min-h-[400px] relative overflow-hidden transition-all duration-300 group hover:bg-[#162035] hover:-translate-y-2 reveal ${idx === 0 ? 'md:col-span-2 bg-[#0C1220]' : ''}`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#0DDFF2]/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <div className="font-mono text-xs text-[#3A4D62] tracking-[0.15em] mb-8 relative z-10 uppercase">
              0{idx + 1} / {idx === 0 ? 'Featured' : 'Project'}
            </div>
            {idx === 0 && (
              <div className="text-[#E8B84B] text-xs font-mono bg-[#E8B84B]/10 border border-[#E8B84B]/20 px-4 py-2 rounded-[4px] inline-block mb-8 w-fit relative z-10 uppercase tracking-wider">
                ★ Built and deployed in 72 hours
              </div>
            )}
            <div className="font-mono text-xs text-[#0DDFF2] tracking-[0.15em] uppercase mb-4 relative z-10">
              {project.categories.join(' · ')}
            </div>
            <h3 className="font-syne font-bold text-3xl text-[#DDE4EE] tracking-[-0.02em] leading-[1.2] mb-6 relative z-10">
              {project.title}
            </h3>
            <p className="text-body-large text-[#6E8099] leading-[1.7] flex-1 font-light relative z-10 mb-10">
              {project.description}
            </p>
            <div className="flex items-center justify-between mt-auto pt-8 border-t border-white/10 relative z-10">
              <div className="flex gap-3 flex-wrap">
                {project.tags.map((tag) => (
                  <span key={tag} className="font-mono text-[10px] text-[#DDE4EE] bg-white/5 px-3 py-1 rounded-[4px] uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-[#3A4D62] text-xl shrink-0 transition-all duration-200 group-hover:border-[#0DDFF2] group-hover:text-[#0DDFF2] group-hover:bg-[#0DDFF2]/10">
                ↗
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
