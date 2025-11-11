import React from 'react';

const GithubIcon: React.FC = () => (
  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" fillRule="evenodd"></path>
  </svg>
);

const LinkedInIcon: React.FC = () => (
    <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3v9zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
    </svg>
);


const Contact: React.FC = () => {
  return (
    <section className="py-16 sm:py-24" id="contact">
      <div className="mx-auto max-w-xl rounded-xl border border-white/10 bg-white/5 p-8 text-center sm:p-12">
        <h2 className="font-heading text-3xl font-bold leading-tight tracking-tighter text-white md:text-4xl">Let's Build Together</h2>
        <p className="mt-4 text-gray-300">Have an interesting project or opportunity? I’m always open to connecting and exploring new ideas.</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a className="flex h-12 w-full min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg bg-primary text-base font-bold leading-normal text-white transition-all hover:bg-primary/90 sm:w-auto sm:px-6" href="mailto:Adeydan05@gmail.com">
            <span className="material-symbols-outlined">email</span>
            <span className="truncate">Email Me</span>
          </a>
          <a className="flex h-12 w-full min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg bg-white/10 text-base font-bold leading-normal text-white transition-all hover:bg-white/20 sm:w-auto sm:px-6" href="https://linkedin.com/in/daniel-olaniyan-11225192" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
            <span className="truncate">LinkedIn</span>
          </a>
        </div>
        <div className="mt-12 flex justify-center gap-6">
          <a className="text-gray-400 transition-colors hover:text-primary" href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
            <GithubIcon />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;