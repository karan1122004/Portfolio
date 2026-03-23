import { motion, useScroll } from 'framer-motion';
import CustomCursor from './components/CustomCursor';
import PageLoader from './components/PageLoader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="bg-[#f5f5f5] bg-dot-pattern text-black font-sans min-h-screen relative">
      <CustomCursor />
      <PageLoader />
      
      {/* Scroll Progress Bar (Brutalist) */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-[#f43f5e] origin-left z-50 border-b-2 border-black"
        style={{ scaleX: scrollYProgress }}
      />
      
      <Navbar />
      
      <main className="relative z-10 w-full pt-10">
        <Hero />
        <About />
        <Projects />
        <Resume />
        <Contact />
      </main>

      <footer className="bg-black py-12 text-center text-white border-t-[4px] border-black relative z-10">
        <div className="container mx-auto px-6 flex flex-col items-center">
          <p className="text-xl font-bold uppercase tracking-widest flex items-center gap-4">
            Designed & Built by 
            <span className="bg-[#0ea5e9] text-black px-3 py-1 border-2 border-white transform -rotate-2 inline-block">Sachin Yadav</span>
          </p>
          <div className="w-16 h-2 bg-[#10b981] mt-6 border-2 border-white transform rotate-3"></div>
        </div>
      </footer>
    </div>
  );
}

export default App;
