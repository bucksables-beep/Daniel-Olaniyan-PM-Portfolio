import React from 'react';
import { SKILLS, RECOGNITION } from '../constants';

const About: React.FC = () => {
  const INDUSTRIES = [
    { name: 'Fintech', detail: 'Architecting automated compliance and payroll systems at scale.' },
    { name: 'AI & Automation', detail: 'Deploying autonomous agent architectures and RAG systems for enterprise efficiency.' },
    { name: 'Healthcare', detail: 'Built and scaled AI-driven telemedicine platforms reaching 10k+ users.' },
    { name: 'Ecommerce & Logistics', detail: 'Optimizing supply chain intelligence and high-volume transaction engines.' },
    { name: 'Web3 & On-Demand', detail: 'Designing decentralized protocols and real-time service marketplaces.' }
  ];

  return (
    <div className="bg-[#070B12] min-h-screen">
      {/* Hero Header */}
      <section className="pt-20 pb-12 md:pt-32 md:pb-20 px-6 md:px-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_-20%,rgba(13,223,242,0.08)_0%,transparent_70%)]"></div>
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="font-mono text-xs md:text-sm text-[#0DDFF2] tracking-[0.2em] uppercase flex items-center gap-4 mb-6 md:mb-8 animate-[fadeUp_0.7s_0.2s_forwards] opacity-0">
            <div className="w-8 md:w-12 h-px bg-[#0DDFF2]"></div>
            The Architect behind the Intelligence
          </div>
          <h1 className="font-syne font-extrabold text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-[#DDE4EE] max-w-[1000px] animate-[fadeUp_0.8s_0.35s_forwards] opacity-0 leading-[1.1] tracking-tight">
            Bridging the gap between <em className="not-italic text-[#0DDFF2]">Product</em> and <em className="not-italic text-[#E8B84B]">Engineering.</em>
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-32 px-6 md:px-20 relative">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-24 items-start">
          <div className="space-y-20">
            {/* Bio Section */}
            <div className="reveal">
              <h3 className="font-syne font-bold text-2xl md:text-3xl text-[#DDE4EE] mb-6 md:mb-8 flex items-center gap-4">
                <span className="text-[#0DDFF2] font-mono text-xl">/</span> The Trajectory
              </h3>
              <div className="text-base md:text-lg lg:text-body-large text-[#6E8099] font-light space-y-6 leading-[1.8]">
                <p>
                  My path doesn't follow the standard trajectory. I trained as a vet, spent years at the intersection of public health and technology, and built my way into AI product leadership. That cross-disciplinary background is what I lean on most.
                </p>
                <p>
                  Today, I lead product at a <strong className="text-[#DDE4EE] font-medium">high-growth B2B technology company</strong>, working at the intersection of compliance, payroll, and automation at scale. Alongside that, I run <span className="text-[#0DDFF2] font-medium">an AI and product consulting practice</span> working with startups and enterprises globally to deploy autonomous intelligence into their operations.
                </p>
              </div>
            </div>

            {/* Experience Summary Section */}
            <div className="reveal d1">
              <h3 className="font-syne font-bold text-2xl md:text-3xl text-[#DDE4EE] mb-8 md:mb-10 flex items-center gap-4">
                <span className="text-[#0DDFF2] font-mono text-xl">/</span> Cross-Industry Impact
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {INDUSTRIES.map((ind, idx) => (
                  <div key={idx} className="p-6 bg-[#0C1220] border border-white/5 rounded-[8px] hover:border-[#0DDFF2]/20 transition-all duration-300 group">
                    <div className="font-mono text-[10px] text-[#0DDFF2] mb-3 uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">Sector {idx + 1}</div>
                    <h4 className="font-syne font-bold text-lg md:text-xl text-[#DDE4EE] mb-2">{ind.name}</h4>
                    <p className="text-xs md:text-sm text-[#6E8099] leading-relaxed">{ind.detail}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10 p-8 bg-white/[0.02] border border-dashed border-white/10 rounded-[8px]">
                <p className="text-sm md:text-base text-[#6E8099] leading-relaxed font-light italic">
                  "I operate at the boundary where product thinking meets serious engineering, delivering intelligence that ships across diverse, high-stakes environments."
                </p>
              </div>
            </div>

            {/* Core Philosophy */}
            <div className="reveal d2">
              <h3 className="font-syne font-bold text-2xl md:text-3xl text-[#DDE4EE] mb-8 md:mb-10 flex items-center gap-4">
                <span className="text-[#0DDFF2] font-mono text-xl">/</span> Philosophy
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 md:p-8 bg-[#0C1220] border border-white/5 rounded-[8px] hover:border-[#0DDFF2]/20 transition-all duration-300">
                  <div className="font-mono text-[#0DDFF2] text-lg md:text-xl mb-4">01</div>
                  <h4 className="font-syne font-bold text-lg md:text-xl text-[#DDE4EE] mb-3">Intelligence that Ships</h4>
                  <p className="text-xs md:text-sm text-[#6E8099] leading-relaxed">I prioritize production-ready systems over research experiments. If it doesn't solve a real-world problem at scale, it's just noise.</p>
                </div>
                <div className="p-6 md:p-8 bg-[#0C1220] border border-white/5 rounded-[8px] hover:border-[#E8B84B]/20 transition-all duration-300">
                  <div className="font-mono text-[#E8B84B] text-lg md:text-xl mb-4">02</div>
                  <h4 className="font-syne font-bold text-lg md:text-xl text-[#DDE4EE] mb-3">Systems Thinking</h4>
                  <p className="text-xs md:text-sm text-[#6E8099] leading-relaxed">AI is never just a feature; it's a component of a larger system. I architect for the entire lifecycle, from data ingestion to user feedback loops.</p>
                </div>
              </div>
            </div>

            {/* Recognition Section */}
            <div className="reveal d3">
              <h3 className="font-syne font-bold text-2xl md:text-3xl text-[#DDE4EE] mb-8 md:mb-10 flex items-center gap-4">
                <span className="text-[#0DDFF2] font-mono text-xl">/</span> Recognition
              </h3>
              <div className="space-y-4">
                {RECOGNITION.map((item, idx) => (
                  <div key={idx} className="group flex flex-col md:flex-row gap-4 md:gap-12 p-5 md:p-6 rounded-[8px] hover:bg-white/[0.02] transition-all duration-200 border-b border-white/5 last:border-0">
                    <div className="font-mono text-[10px] md:text-xs text-[#3A4D62] pt-1 w-24 shrink-0">{item.year}</div>
                    <div>
                      <div className="font-mono text-[10px] text-[#0DDFF2] tracking-[0.15em] uppercase mb-1">{item.org}</div>
                      <h4 className="font-syne font-bold text-base md:text-lg text-[#DDE4EE] mb-2 group-hover:text-[#0DDFF2] transition-colors">{item.name}</h4>
                      <p className="text-xs md:text-sm text-[#6E8099] leading-relaxed max-w-[600px]">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8 lg:sticky lg:top-32 mt-12 lg:mt-0">
            <div className="p-8 bg-[#0C1220] border border-white/5 rounded-[12px] relative overflow-hidden group reveal d4">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0DDFF2]/5 blur-3xl rounded-full -mr-16 -mt-16"></div>
              <h3 className="font-syne font-bold text-lg text-[#DDE4EE] mb-6 flex items-center gap-3">
                <span className="w-2 h-2 bg-[#0DDFF2] rounded-full"></span>
                Expertise Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {SKILLS.map((skill) => (
                  <span key={skill} className="font-mono text-[10px] px-3 py-1.5 border border-white/10 rounded-[4px] text-[#6E8099] tracking-[0.05em] transition-all duration-200 cursor-default hover:border-[#0DDFF2]/30 hover:text-[#0DDFF2] hover:bg-[#0DDFF2]/5 uppercase">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-8 bg-gradient-to-br from-[#0C1220] to-[#070B12] border border-white/5 rounded-[12px] reveal d5">
              <h3 className="font-syne font-bold text-lg text-[#DDE4EE] mb-4">Let's build something.</h3>
              <p className="text-xs md:text-sm text-[#6E8099] mb-6 leading-relaxed">
                I'm always open to discussing autonomous agent architectures, AI product strategy, or systems-level engineering challenges.
              </p>
              <a href="mailto:adeydan05@gmail.com" className="inline-block w-full text-center font-mono text-xs tracking-[0.1em] px-6 py-3.5 bg-transparent text-[#0DDFF2] border border-[#0DDFF2]/30 rounded-[4px] hover:bg-[#0DDFF2] hover:text-[#070B12] transition-all duration-300 uppercase font-bold">
                Send a Message
              </a>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default About;
