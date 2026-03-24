import React from 'react';

const ARTICLES = [
  {
    cat: 'Infrastructure and Access',
    title: 'Why Africa\'s AI future depends on compute sovereignty, not just connectivity'
  },
  {
    cat: 'Labour and Automation',
    title: 'Automating the informal economy: who benefits when AI meets emerging-market traders'
  },
  {
    cat: 'Healthcare AI',
    title: 'Lessons from building a telemedicine platform where 4G is a luxury, not a baseline'
  },
  {
    cat: 'AI Policy and Regulation',
    title: 'African regulators are writing AI policy for problems they have never seen. Here is what they are missing.'
  }
];

const Writing: React.FC = () => {
  return (
    <section className="py-20 md:py-32 px-6 md:px-20 bg-[#0C1220] border-t border-white/5 min-h-[calc(100vh-80px)] flex items-center" id="writing">
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 reveal">
          <div className="max-w-[800px]">
            <div className="font-mono text-xs md:text-sm text-[#0DDFF2] tracking-[0.2em] uppercase flex items-center gap-4 mb-6">
              Writing
              <div className="w-12 md:w-16 h-px bg-[#0DDFF2]/30"></div>
            </div>
            <h2 className="font-syne font-bold text-3xl md:text-5xl lg:text-title tracking-[-0.03em] leading-[1.1] text-[#DDE4EE]">
              AI through a<br className="hidden md:block" /> lived African lens.
            </h2>
          </div>
          <p className="max-w-[400px] text-lg md:text-xl text-[#6E8099] leading-[1.75] font-light mt-8 md:mt-0">
            An ongoing series on AI and infrastructure written for a global readership — not just Silicon Valley's version of it.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {ARTICLES.map((art, idx) => (
            <div key={art.title} className={`bg-[#111827] border border-white/10 p-8 md:p-12 transition-all duration-250 cursor-pointer relative overflow-hidden group hover:bg-[#162035] hover:-translate-y-2 rounded-[8px] reveal d${(idx % 2) + 1}`}>
              <div className={`absolute bottom-0 left-0 right-0 h-[4px] bg-[#0DDFF2] transition-transform duration-350 origin-left scale-x-0 group-hover:scale-x-100`}></div>
              <div className="font-mono text-[10px] md:text-xs text-[#E8B84B] tracking-[0.15em] uppercase mb-4">
                {art.cat}
              </div>
              <h3 className="font-syne font-semibold text-xl md:text-2xl text-[#DDE4EE] leading-[1.35] tracking-[-0.01em] mb-6 md:mb-8">
                {art.title}
              </h3>
              <span className="font-mono text-lg md:text-xl text-[#3A4D62] mt-auto block transition-colors duration-200 group-hover:text-[#0DDFF2]">
                ↗
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Writing;

