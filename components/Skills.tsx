import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section className="py-16 sm:py-24" id="skills">
      <h2 className="text-center font-heading text-3xl font-bold leading-tight tracking-tighter text-white md:text-4xl">My Expertise</h2>
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((skill, index) => (
          <div key={index} className="flex flex-col items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-6 text-center transition-transform duration-300 hover:-translate-y-2 hover:border-primary/30 hover:bg-white/10 sm:p-8">
            <div className="rounded-full bg-primary/10 p-3">
                <span className="material-symbols-outlined text-3xl text-primary">{skill.icon}</span>
            </div>
            <h3 className="mt-2 text-xl font-bold text-white">{skill.title}</h3>
            <p className="leading-relaxed text-gray-300">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;