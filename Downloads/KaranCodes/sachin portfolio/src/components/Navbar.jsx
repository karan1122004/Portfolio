import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', color: 'bg-[#f43f5e]' },
    { name: 'About', href: '#about', color: 'bg-[#0ea5e9]' },
    { name: 'Projects', href: '#projects', color: 'bg-[#10b981]' },
    { name: 'Resume', href: '#resume', color: 'bg-[#f59e0b]' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className={`container mx-auto px-6 lg:px-12 flex justify-between items-center transition-all ${scrolled ? 'bg-white border-y-4 border-black py-4 shadow-[0_8px_0_0_rgba(0,0,0,1)]' : ''}`}>
        
        <a href="#home" className="text-3xl font-black uppercase tracking-tighter flex items-center gap-2 group">
          Sachin
          <span className="w-4 h-4 rounded-full bg-[#f43f5e] border-2 border-black inline-block mt-1"></span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-black font-bold uppercase tracking-wider text-lg group hover:drop-shadow-[2px_2px_0_rgba(0,0,0,1)]"
            >
              <span className="relative z-10 transition-transform group-hover:-translate-y-1 block">
                {link.name}
              </span>
              <span className={`absolute bottom-0 left-0 w-full h-2 ${link.color} -z-10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left border-y-2 border-black`}></span>
            </a>
          ))}
          <a
            href="#contact"
            className="px-6 py-2 ml-4 bg-[#f59e0b] text-black font-black uppercase text-xl border-[3px] border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-none hover:translate-y-1 hover:translate-x-1 transition-all"
          >
            LET'S TALK
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-black focus:outline-none brutal-card p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} strokeWidth={3} /> : <Menu size={28} strokeWidth={3} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full flex flex-col items-center py-6 gap-6 bg-white border-y-4 border-black shadow-[0_8px_0_0_rgba(0,0,0,1)] origin-top z-50 mt-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-black text-2xl font-black uppercase tracking-widest hover:text-[#f43f5e] hover:underline decoration-4"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="px-8 py-3 bg-[#f59e0b] text-black font-black uppercase text-2xl border-[4px] border-black shadow-[6px_6px_0_0_rgba(0,0,0,1)] mt-4 mb-4"
            >
              CONTACT
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
