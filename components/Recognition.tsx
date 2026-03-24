import React from 'react';
import { RECOGNITION } from '../constants';

const Recognition: React.FC = () => {
  return (
    <section className="py-32 px-6 md:px-20 bg-[#0C1220] border-y border-white/5 min-h-[calc(100vh-80px)] flex items-center" id="recognition">
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="font-mono text-sm text-[#0DDFF2] tracking-[0.2em] uppercase flex items-center gap-4 mb-6 reveal">
          Recognition
          <div className="w-16 h-px bg-[#0DDFF2]/30"></div>
        </div>
        <h2 className="font-syne font-bold text-title tracking-[-0.03em] leading-[1.06] text-[#DDE4EE] reveal d1">
          Global validation,<br />African roots.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {RECOGNITION.map((rec, idx) => (
            <div key={rec.name} className={`bg-[#111827] p-12 border border-white/10 rounded-[8px] transition-all duration-300 hover:bg-[#162035] hover:-translate-y-2 reveal d${(idx % 3) + 1}`}>
              <div className="font-mono text-xs text-[#3A4D62] tracking-[0.15em] mb-6 uppercase">
                {rec.year}
              </div>
              <div className="font-mono text-xs text-[#0DDFF2] tracking-[0.1em] uppercase mb-4">
                {rec.org}
              </div>
              <h3 className="font-syne font-semibold text-2xl text-[#DDE4EE] leading-[1.3] tracking-[-0.01em] mb-4">
                {rec.name}
              </h3>
              <p className="text-body-large text-[#6E8099] leading-[1.6] font-light">
                {rec.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recognition;

