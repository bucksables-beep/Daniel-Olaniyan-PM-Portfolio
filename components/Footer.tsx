import React from 'react';

const Footer: React.FC = () => {
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        window.location.hash = href;
    };

    return (
        <footer className="flex flex-col gap-8 px-5 py-16 mt-20 text-center @container border-t border-white/10">
            <div className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
                <a className="text-neutral-400 hover:text-white transition-colors text-base font-normal leading-normal min-w-40" href="#home" onClick={(e) => handleNavClick(e, '#home')}>Home</a>
                <a className="text-neutral-400 hover:text-white transition-colors text-base font-normal leading-normal min-w-40" href="#about" onClick={(e) => handleNavClick(e, '#about')}>About</a>
                <a className="text-neutral-400 hover:text-white transition-colors text-base font-normal leading-normal min-w-40" href="#portfolio" onClick={(e) => handleNavClick(e, '#portfolio')}>Portfolio</a>
                <a className="text-neutral-400 hover:text-white transition-colors text-base font-normal leading-normal min-w-40" href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a>
            </div>
            <p className="text-neutral-500 text-sm font-normal leading-normal">© 2024 Daniel Olaniyan. All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;