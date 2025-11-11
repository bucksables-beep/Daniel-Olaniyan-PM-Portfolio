import React from 'react';

const PortfolioHighlightSkeleton: React.FC = () => {
  return (
    <div className="w-[80vw] max-w-sm flex-shrink-0 sm:w-80">
      <div className="flex h-full flex-col gap-4 overflow-hidden rounded-xl border border-white/10 bg-white/5">
        <div className="h-48 w-full animate-pulse bg-white/10" />
        <div className="flex flex-grow flex-col p-6 pt-4">
          <div className="mb-2 flex gap-2">
            <div className="h-5 w-16 animate-pulse rounded-full bg-white/10" />
            <div className="h-5 w-20 animate-pulse rounded-full bg-white/10" />
          </div>
          <div className="mb-3 mt-1 h-5 w-3/4 animate-pulse rounded bg-white/10" />
          <div className="mb-2 h-4 w-full animate-pulse rounded bg-white/10" />
          <div className="h-4 w-5/6 animate-pulse rounded bg-white/10" />
        </div>
      </div>
    </div>
  );
};

export default PortfolioHighlightSkeleton;