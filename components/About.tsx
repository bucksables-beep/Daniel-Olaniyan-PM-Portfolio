import React from 'react';
import { SKILLS } from '../constants';

const About: React.FC = () => {
  return (
    <section className="py-32 px-6 md:px-20 bg-[#0C1220] border-y border-white/5 min-h-[calc(100vh-80px)] flex items-center" id="about">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-start">
        <div>
          <div className="font-mono text-sm text-[#0DDFF2] tracking-[0.2em] uppercase flex items-center gap-4 mb-6 reveal">
            About
            <div className="w-16 h-px bg-[#0DDFF2]/30"></div>
          </div>
          <h2 className="font-syne font-bold text-title tracking-[-0.03em] leading-[1.06] text-[#DDE4EE] reveal d1">
            From the clinic<br />to the cloud.
          </h2>
          <div className="flex flex-wrap gap-3 mt-12 reveal d3">
            {SKILLS.map((skill) => (
              <span key={skill} className="font-mono text-xs px-5 py-2.5 border border-white/10 rounded-[4px] text-[#6E8099] tracking-[0.05em] transition-all duration-200 cursor-default hover:border-[#0DDFF2]/30 hover:text-[#0DDFF2] hover:bg-[#0DDFF2]/10 uppercase">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="text-body-xl leading-[1.8] text-[#6E8099] font-light reveal d2 space-y-8">
          <p>My path doesn't follow the standard trajectory. I trained as a vet, spent years at the intersection of public health and technology, and built my way into AI product leadership. That cross-disciplinary background is what I lean on most.</p>
          <p>I lead product at a <strong className="text-[#DDE4EE] font-medium">high-growth B2B technology company</strong>, working at the intersection of compliance, payroll, and automation at scale. Alongside that, I run <span className="text-[#0DDFF2] font-medium">an AI and product consulting practice</span> working with startups and enterprises globally to deploy autonomous intelligence into their operations.</p>
          <p>My current focus is autonomous agent architectures — systems that don't just advise, but act. The work I'm most proud of lives at the boundary between product thinking and serious engineering.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
