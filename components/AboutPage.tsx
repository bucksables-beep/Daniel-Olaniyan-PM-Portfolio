import React from 'react';
import Skills from './Skills';

// Data for the infographics
const continents = ['North America', 'Europe', 'Asia'];
const industries = ['Fintech', 'AI/ML', 'SaaS', 'E-commerce'];

// Data for certifications
const certifications = [
  {
    icon: 'workspace_premium',
    title: 'Certified in Generative AI',
    issuer: 'Project Management Institute (PMI)',
  },
  {
    icon: 'analytics',
    title: 'Product Management for Data Science and AI',
    issuer: '365 Data Science',
  },
  {
    icon: 'design_services',
    title: 'Enterprise Design Thinking Practitioner',
    issuer: 'IBM',
  },
  {
    icon: 'cloud',
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services (AWS)',
  },
];

// Data for awards
const awards = [
  {
    icon: 'public',
    title: '2025 Mandela Washington Fellow',
    issuer: 'U.S. Department of State',
  },
  {
    icon: 'volunteer_activism',
    title: 'Ashoka Changemaker Award',
    issuer: 'Ashoka Foundation',
  },
  {
    icon: 'science',
    title: 'Merck Innovation Recognition Award',
    issuer: 'Merck Global Health Initiative',
  },
  {
    icon: 'school',
    title: 'Clark Atlanta University School of Business – Business and Leadership Training (2025 Cohort)',
    issuer: '',
  },
  {
    icon: 'hub',
    title: 'INSEAD AI Venture Lab Fellow',
    issuer: '',
  },
];


const AboutPage: React.FC = () => {
  return (
    <>
      <div className="py-16 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start">
          <div className="md:col-span-1">
            <img 
              className="rounded-xl w-full aspect-square object-cover md:sticky md:top-24" 
              alt="Professional headshot of Daniel Olaniyan." 
              src="https://lh3.googleusercontent.com/d/1uf0cktl4ZVsKnQAT4ByS1ZtyDBMi7MOl" 
            />
          </div>
          <div className="md:col-span-2">
            <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">About Me</h1>
            <div className="mt-8 text-gray-300 space-y-4 leading-relaxed">
              <p>With over 6 years of experience in product management, I thrive at the intersection of technology, finance, and user-centric design. My passion lies in untangling complex problems to create elegant, innovative solutions that make a tangible impact.</p>
              <p>Having launched products across North America, Europe, and Asia, I bring a global perspective to my work, focusing on building scalable systems and leading high-performing teams to turn ambitious visions into reality.</p>
              <p>My journey in product began with a curiosity for how technology could solve real-world financial challenges. This led me to specialize in Fintech, where I've had the privilege of working on AI-powered lending platforms, mobile banking applications, and global payment gateways. I am a firm believer in a data-informed approach, leveraging analytics to uncover user needs and drive product strategy.</p>
              <p>Beyond the roadmap, I'm passionate about mentorship and building a positive team culture. I believe that the best products are built by empowered, collaborative teams who are aligned on a common goal. When I'm not obsessing over user flows and feature backlogs, you can find me exploring the latest in machine learning or contributing to open-source projects.</p>
            </div>
            
            {/* Infographics Section */}
            <div className="mt-12">
              {/* Global Experience */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-white mb-4">Global Experience</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {continents.map((continent) => (
                    <div key={continent} className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
                      <p className="text-white font-semibold">{continent}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Industry Expertise */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-white mb-4">Industry Expertise</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {industries.map((industry) => (
                    <div key={industry} className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
                      <p className="text-white font-semibold">{industry}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications & Awards Section */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Certifications & Awards</h3>
                <div className="space-y-8">
                  {/* Certifications */}
                  <div>
                    <h4 className="text-xl font-bold text-gray-200 mb-4">Certifications</h4>
                    <div className="space-y-4">
                      {certifications.map((cert) => (
                        <div key={cert.title} className="bg-white/5 border border-white/10 rounded-lg p-4 flex items-center gap-4">
                          <span className="material-symbols-outlined text-primary text-3xl">{cert.icon}</span>
                          <div>
                            <p className="text-white font-semibold">{cert.title}</p>
                            <p className="text-gray-400 text-sm">{cert.issuer}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Awards & Recognitions */}
                  <div>
                    <h4 className="text-xl font-bold text-gray-200 mb-4">🏅 Awards & Recognitions</h4>
                    <div className="space-y-4">
                      {awards.map((award) => (
                        <div key={award.title} className="bg-white/5 border border-white/10 rounded-lg p-4 flex items-center gap-4">
                          <span className="material-symbols-outlined text-primary text-3xl">{award.icon}</span>
                          <div>
                            <p className="text-white font-semibold">{award.title}</p>
                            {award.issuer && <p className="text-gray-400 text-sm">{award.issuer}</p>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
      <Skills />
    </>
  );
};

export default AboutPage;