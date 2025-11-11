

import React, { useState, useEffect } from 'react';
import { FILTERS, PROJECTS } from '../constants';
import { Project } from '../types';
import ProjectCardSkeleton from './ProjectCardSkeleton';

// Component for Filter Chips
const FilterChips: React.FC<{ activeFilter: string; onFilterChange: (filter: string) => void; }> = ({ activeFilter, onFilterChange }) => (
    <div className="flex gap-2 p-3 flex-wrap pr-4 mt-6 md:mt-10">
        {FILTERS.map((filter) => (
            <div
                key={filter}
                onClick={() => onFilterChange(filter)}
                className={`flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full cursor-pointer transition-colors pl-4 pr-4 ${
                    activeFilter === filter
                        ? 'bg-primary'
                        : 'bg-white/5 hover:bg-white/10'
                }`}
            >
                <p className={`text-sm font-medium leading-normal ${
                    activeFilter === filter ? 'text-white' : 'text-neutral-300'
                }`}>{filter}</p>
            </div>
        ))}
    </div>
);

// Component for Project Card
const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
    <div className="flex flex-col gap-4 group">
        <div className="relative w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl overflow-hidden">
            <img 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                alt={project.alt} 
                src={project.image} 
            />
            <div className="absolute inset-0 bg-background-dark/80 backdrop-blur-sm flex items-center justify-center p-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <div>
                    <h4 className="text-primary font-bold">{project.impact.title}</h4>
                    <p className="text-gray-200 mt-2 text-sm">{project.impact.description}</p>
                </div>
            </div>
        </div>
        <div className="flex flex-col gap-2">
            <p className="text-white text-lg font-medium leading-normal">{project.title}</p>
            <p className="text-neutral-400 text-sm font-normal leading-normal">{project.description}</p>
            {/* Fix: Join the tags array to display as a string */}
            <p className="text-neutral-500 text-xs font-normal leading-normal">{project.tags.join(', ')}</p>
        </div>
    </div>
);


// Main Portfolio Page Component
const PortfolioPage: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500); // Simulate a 1.5-second initial load
        return () => clearTimeout(timer);
    }, []); // Runs only on mount

    const handleFilterChange = (filter: string) => {
        setActiveFilter(filter);
    };

    const filteredProjects = activeFilter === 'All'
        ? PROJECTS
        : PROJECTS.filter(project => project.categories.includes(activeFilter));

    return (
        <>
            {/* Page Heading */}
            <div className="flex flex-wrap justify-between gap-3 p-4 pt-16 md:pt-24">
                <div className="flex min-w-72 flex-col gap-3">
                    <p className="text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">Portfolio</p>
                    <p className="text-neutral-400 text-base font-normal leading-normal max-w-xl">
                        A selection of projects where I've crafted innovative solutions in AI, Fintech, and beyond.
                    </p>
                </div>
            </div>

            {/* Filter Chips */}
            <FilterChips activeFilter={activeFilter} onFilterChange={handleFilterChange} />

            {/* Image Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 mt-8">
                {loading ? (
                    Array.from({ length: 6 }).map((_, index) => (
                        <ProjectCardSkeleton key={index} />
                    ))
                ) : (
                    filteredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))
                )}
            </div>
        </>
    );
};

export default PortfolioPage;