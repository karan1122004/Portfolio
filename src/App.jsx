import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

import CustomCursor from './components/CustomCursor';
import AskAI from './components/AskAI';

function App() {
  return (
    <div className="bg-slate-50 dark:bg-dark-900 min-h-screen text-slate-800 dark:text-gray-200 selection:bg-primary-500/30 font-sans overflow-x-hidden transition-colors duration-300">
      <CustomCursor />
      <AskAI />
      <div className="fixed inset-0 bg-grid-white opacity-[0.04] dark:opacity-[0.02] pointer-events-none"></div>
      
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
