import React from 'react';
import { STATS } from '../constants';

const Stats: React.FC = () => {
  return (
    <section className="py-16 sm:py-24">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {STATS.map((stat, index) => (
          <div key={index} className="flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-4 text-center sm:p-6">
            <p className="text-sm font-medium leading-normal text-gray-300">{stat.label}</p>
            <p className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">{stat.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;