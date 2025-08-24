import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import Hero from './components/Hero';
import Expertise from './components/Expertise';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // Smooth scroll polyfill for older browsers
  useEffect(() => {
    if (!CSS.supports('scroll-behavior', 'smooth')) {
      import('smoothscroll-polyfill').then(smoothscroll => {
        smoothscroll.polyfill();
      });
    }
  }, []);

  return (
    <div className="min-h-screen">
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      
      <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Header />
        <main>
          <Hero />
          <Expertise />
          <Projects />
          <About />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;