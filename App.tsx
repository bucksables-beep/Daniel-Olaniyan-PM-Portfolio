import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import PortfolioPage from './components/PortfolioPage';
import AboutPage from './components/AboutPage';
import Contact from './components/Contact';
import Footer from './components/Footer';


const App: React.FC = () => {
  const [route, setRoute] = useState(window.location.hash || '#home');

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash || '#home');
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const renderContent = () => {
    switch (route) {
      case '#about':
        return <AboutPage />;
      case '#portfolio':
        return <PortfolioPage />;
      case '#contact':
        return <Contact />;
      case '#home':
      default:
        return <HomePage />;
    }
  };


  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <div className="mx-auto w-full max-w-[960px] grow px-4 sm:px-6 md:px-10">
        <Header activeRoute={route} />
        <main className="flex-1">
          {renderContent()}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;