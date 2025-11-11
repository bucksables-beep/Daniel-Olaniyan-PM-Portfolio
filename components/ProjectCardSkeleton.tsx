
import React from 'react';

const ProjectCardSkeleton: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
        <div className="w-full bg-white/10 animate-pulse aspect-video rounded-xl"></div>
        <div className="flex flex-col gap-3 mt-1">
            <div className="w-3/4 h-5 bg-white/10 animate-pulse rounded-md"></div>
            <div className="w-full h-4 bg-white/10 animate-pulse rounded-md"></div>
            <div className="w-1/2 h-3 bg-white/10 animate-pulse rounded-md mt-1"></div>
        </div>
    </div>
  );
};

export default ProjectCardSkeleton;
