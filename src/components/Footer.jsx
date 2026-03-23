import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-black/5 dark:border-white/10 glass-effect pt-12 pb-6 mt-12 bg-slate-50 dark:bg-dark-900 overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        <a href="#" className="text-2xl font-bold text-slate-900 dark:text-white tracking-tighter mb-6 relative z-10">
          Karan <span className="text-primary-500">Yadav</span>
        </a>

        <ul className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-slate-600 dark:text-gray-400 font-medium relative z-10">
          <li><a href="#about" className="hover:text-primary-400 transition-colors">About</a></li>
          <li><a href="#skills" className="hover:text-primary-400 transition-colors">Skills</a></li>
          <li><a href="#projects" className="hover:text-primary-400 transition-colors">Projects</a></li>
          <li><a href="#experience" className="hover:text-primary-400 transition-colors">Experience</a></li>
          <li><a href="#contact" className="hover:text-primary-400 transition-colors">Contact</a></li>
        </ul>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-6"></div>

        <div className="w-full flex flex-col md:flex-row justify-between items-center relative z-10 gap-4 text-center md:text-left">
          <p className="text-sm text-slate-500 dark:text-gray-500">
            &copy; {new Date().getFullYear()} Karan Yadav. All rights reserved.
          </p>

          <button 
            onClick={scrollToTop}
            className="p-3 rounded-full bg-white dark:bg-dark-800 border border-black/5 dark:border-white/10 hover:border-primary-500/50 hover:bg-primary-500/10 text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:text-white transition-all shadow-lg hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] animate-bounce"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}
