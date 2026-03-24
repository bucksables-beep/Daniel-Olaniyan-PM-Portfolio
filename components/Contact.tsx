
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="py-20 md:py-32 px-6 md:px-20 bg-[#070B12] min-h-[calc(100vh-80px)] flex items-center" id="contact">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center w-full">
        <div>
          <h2 className="font-syne font-extrabold text-4xl md:text-6xl lg:text-huge tracking-[-0.04em] leading-[1.1] text-[#DDE4EE] reveal">
            Let's build<br /><span className="text-[#0DDFF2]">something</span><br />real.
          </h2>
          <p className="text-lg md:text-xl lg:text-body-xl text-[#6E8099] leading-[1.75] mt-8 md:mt-10 font-light reveal d1 max-w-[600px]">
            Whether you need an autonomous AI system shipped fast, an AI opportunity evaluated, or a product leader who also ships code — I'd like to hear from you.
          </p>
        </div>
        <div className="flex flex-col gap-4 md:gap-6">
          <a href="mailto:adeydan05@gmail.com" className="flex items-center justify-between p-6 md:p-10 border border-white/10 bg-[#111827] rounded-[8px] no-underline transition-all duration-250 hover:border-[#0DDFF2]/30 hover:bg-[#0DDFF2]/10 reveal group">
            <div>
              <div className="font-syne font-semibold text-xl md:text-2xl text-[#DDE4EE]">Email</div>
              <div className="font-mono text-[10px] md:text-sm text-[#3A4D62] mt-2 uppercase tracking-widest group-hover:text-[#0DDFF2]">adeydan05@gmail.com</div>
            </div>
            <div className="text-[#3A4D62] text-xl md:text-2xl transition-colors duration-200 group-hover:text-[#0DDFF2]">↗</div>
          </a>
          <a href="https://calendar.app.google/D7opz2qsSh4MxHGa6" target="_blank" className="flex items-center justify-between p-6 md:p-10 border border-white/10 bg-[#111827] rounded-[8px] no-underline transition-all duration-250 hover:border-[#0DDFF2]/30 hover:bg-[#0DDFF2]/10 reveal d1 group">
            <div>
              <div className="font-syne font-semibold text-xl md:text-2xl text-[#DDE4EE]">Book a Call</div>
              <div className="font-mono text-[10px] md:text-sm text-[#3A4D62] mt-2 uppercase tracking-widest group-hover:text-[#0DDFF2]">Schedule a 30-minute conversation</div>
            </div>
            <div className="text-[#3A4D62] text-xl md:text-2xl transition-colors duration-200 group-hover:text-[#0DDFF2]">↗</div>
          </a>
          <a href="https://www.linkedin.com/in/daniel-olaniyan-11225192/" target="_blank" className="flex items-center justify-between p-6 md:p-10 border border-white/10 bg-[#111827] rounded-[8px] no-underline transition-all duration-250 hover:border-[#0DDFF2]/30 hover:bg-[#0DDFF2]/10 reveal d2 group">
            <div>
              <div className="font-syne font-semibold text-xl md:text-2xl text-[#DDE4EE]">LinkedIn</div>
              <div className="font-mono text-[10px] md:text-sm text-[#3A4D62] mt-2 uppercase tracking-widest group-hover:text-[#0DDFF2]">/in/daniel-olaniyan-11225192</div>
            </div>
            <div className="text-[#3A4D62] text-xl md:text-2xl transition-colors duration-200 group-hover:text-[#0DDFF2]">↗</div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

