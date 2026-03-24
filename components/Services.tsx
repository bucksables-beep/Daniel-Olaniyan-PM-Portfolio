import React, { useState } from 'react';

const SERVICES = [
  {
    num: '01',
    title: 'Autonomous Agent Systems',
    sub: 'Multi-agent pipelines · Production deployment',
    desc: 'End-to-end multi-agent pipelines built for real workloads — lead generation, competitive research, data enrichment, document processing, and operational automation. I design the agent architecture, wire the tools, handle the infra, and deploy on GCP or AWS with monitoring. You get a system that runs continuously without babysitting.',
    deliverables: ['Architecture Design', 'GCP / AWS Deployment', 'Agent Orchestration', 'CRM Integration', 'Slack Alerts', 'LangSmith Observability']
  },
  {
    num: '02',
    title: 'RAG and Knowledge Systems',
    sub: 'Document intelligence · Semantic search',
    desc: 'If your business runs on documents — contracts, policies, reports, support history — I build the retrieval layer that makes that knowledge queryable. Semantic chunking, embedding pipelines, vector stores, and a chat or API interface your team can actually use. No hallucinations. No guessing. Your data, made intelligent.',
    deliverables: ['Semantic Chunking', 'Vector Store Setup', 'RAG Pipeline', 'API or Chat Interface', 'Eval Framework']
  },
  {
    num: '03',
    title: 'AI Product Strategy',
    sub: 'Roadmaps · PRDs · Architecture scoping',
    desc: 'For founders and product teams who know AI is the direction but need the map. I run discovery, write the PRD, define the architecture, scope the build, and hand you a document your engineering team can execute against without a translation layer. I\'ve done this from both sides of the table.',
    deliverables: ['Product Discovery', 'PRD Writing', 'Tech Architecture', 'Build Roadmap', 'Vendor Assessment']
  },
  {
    num: '04',
    title: 'Feasibility and AI Readiness',
    sub: 'Technical reports · Investor-grade analysis',
    desc: 'Before you invest six figures in an AI initiative, you need to know if it will actually work — technically, commercially, and operationally. I deliver a structured feasibility report that answers those questions with evidence. Used by founders raising funds, boards approving budgets, and operators deciding what to build next.',
    deliverables: ['Technical Feasibility', 'Commercial Analysis', 'Data Readiness Audit', 'Risk Assessment', 'Recommendation Report']
  }
];

const Services: React.FC = () => {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="py-20 md:py-32 px-6 md:px-20 bg-[#070B12] min-h-[calc(100vh-80px)] flex items-center" id="services">
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 items-start lg:items-end mb-16 md:mb-24">
          <div>
            <div className="font-mono text-xs md:text-sm text-[#0DDFF2] tracking-[0.2em] uppercase flex items-center gap-4 mb-6 reveal">
              Services
              <div className="w-12 md:w-16 h-px bg-[#0DDFF2]/30"></div>
            </div>
            <h2 className="font-syne font-bold text-3xl md:text-5xl lg:text-title tracking-[-0.03em] leading-[1.1] text-[#DDE4EE] reveal d1">
              What I build<br className="hidden md:block" /> for you.
            </h2>
          </div>
          <div className="text-lg md:text-xl lg:text-body-xl text-[#6E8099] font-light reveal d2">
            <p className="mb-8 md:mb-10">Every engagement starts with a real problem, not a technology. I scope precisely, build fast, and hand over systems you can run independently. Fixed-price. Measurable outcomes. Available worldwide.</p>
            <a href="https://calendar.app.google/D7opz2qsSh4MxHGa6" target="_blank" className="inline-flex items-center gap-4 font-mono text-xs md:text-sm text-[#0DDFF2] no-underline border border-[#0DDFF2]/30 px-6 py-4 md:px-10 md:py-5 rounded-[4px] bg-[#0DDFF2]/10 transition-all duration-200 hover:bg-[#0DDFF2] hover:text-[#070B12] uppercase font-bold">
              Book a discovery call →
            </a>
          </div>
        </div>

        <div className="flex flex-col border border-white/10 reveal d1">
          {SERVICES.map((svc, idx) => (
            <div 
              key={svc.num} 
              className={`flex flex-col md:grid md:grid-cols-[80px_1fr_auto] items-start md:items-center gap-0 border-b border-white/10 cursor-pointer transition-all duration-250 relative overflow-hidden group ${openIdx === idx ? 'bg-[#111827]' : 'hover:bg-[#111827]'}`}
              onClick={() => setOpenIdx(idx)}
            >
              <div className={`absolute left-0 top-0 bottom-0 w-[4px] bg-[#0DDFF2] transition-transform duration-350 origin-bottom ${openIdx === idx ? 'scale-y-100' : 'scale-y-0 group-hover:scale-y-100'}`}></div>
              
              <div className={`hidden md:flex font-mono text-lg tracking-[0.1em] p-10 border-r border-white/10 text-center self-stretch items-center justify-center ${openIdx === idx ? 'text-[#0DDFF2]' : 'text-[#3A4D62]'}`}>
                {svc.num}
              </div>

              <div className="p-6 md:p-10 md:px-12 flex flex-col w-full">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2 md:hidden">
                      <span className="font-mono text-xs text-[#0DDFF2]">{svc.num}</span>
                      <div className="h-px flex-1 bg-white/5"></div>
                    </div>
                    <div className={`font-syne font-bold text-xl md:text-3xl text-[#DDE4EE] tracking-[-0.02em] transition-colors duration-200 ${openIdx === idx ? 'text-[#0DDFF2]' : 'group-hover:text-[#0DDFF2]'}`}>
                      {svc.title}
                    </div>
                    <div className="font-mono text-[10px] md:text-xs text-[#3A4D62] tracking-[0.15em] uppercase mt-2 md:mt-3">
                      {svc.sub}
                    </div>
                  </div>
                  <div className={`md:hidden w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-lg transition-all duration-300 ${openIdx === idx ? 'bg-[#0DDFF2] border-[#0DDFF2] text-[#070B12] rotate-45' : ''}`}>
                    +
                  </div>
                </div>
                
                <div className={`overflow-hidden transition-all duration-450 ease-[cubic-bezier(0.16,1,0.3,1)] ${openIdx === idx ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="pt-6 md:pt-10 pb-4">
                    <p className="text-sm md:text-lg lg:text-body-large text-[#6E8099] leading-[1.8] font-light max-w-[800px] mb-8 md:mb-10">
                      {svc.desc}
                    </p>
                    <div className="flex gap-2 md:gap-4 flex-wrap">
                      {svc.deliverables.map((del) => (
                        <span key={del} className="font-mono text-[10px] md:text-xs text-[#0DDFF2] bg-[#0DDFF2]/10 border border-[#0DDFF2]/30 px-3 py-1.5 md:px-5 md:py-2 rounded-[4px] uppercase tracking-wider">
                          {del}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className={`hidden md:flex w-12 h-12 rounded-full border border-white/10 items-center justify-center text-2xl shrink-0 transition-all duration-300 mr-10 ${openIdx === idx ? 'bg-[#0DDFF2] border-[#0DDFF2] text-[#070B12] rotate-45' : 'group-hover:border-[#0DDFF2]/30 group-hover:text-[#0DDFF2]'}`}>
                +
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

