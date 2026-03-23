import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, ChevronRight } from 'lucide-react';
import profileImage from '../assets/profile.jpg';

const Hero = () => {
  const words = ["C++", "Java", "React", "Machine Learning"];
  const [currentWord, setCurrentWord] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const text = words[currentWord];
    let timing = isDeleting ? 100 : 150;
    
    if (!isDeleting && displayText === text) {
      timing = 2000;
      setTimeout(() => setIsDeleting(true), timing);
      return;
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentWord((prev) => (prev + 1) % words.length);
      timing = 500;
      return;
    }
    
    const timeout = setTimeout(() => {
      setDisplayText((prev) => 
        isDeleting ? prev.slice(0, -1) : text.slice(0, prev.length + 1)
      );
    }, timing);
    
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWord, words]);

  return (
    <section id="home" className="min-h-screen pt-20 pb-12 flex items-center relative overflow-hidden bg-[#fef2f2]">
      
      {/* Floating Geometric Shapes */}
      <div className="geo-shape geo-circle w-64 h-64 bg-[#f43f5e] top-20 -left-20"></div>
      <div className="geo-shape bg-[#0ea5e9] w-40 h-40 bottom-20 left-10 transform rotate-12"></div>
      <div className="geo-shape geo-diamond w-32 h-32 bg-[#10b981] top-40 right-20"></div>
      <div className="geo-shape geo-circle w-48 h-48 bg-[#f59e0b] bottom-10 -right-10"></div>

      <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6 relative brutal-card p-8 md:p-12 shadow-[12px_12px_0_0_rgba(0,0,0,1)] bg-white/90 backdrop-blur-sm"
        >
          {/* Paper pin element */}
          <div className="absolute -top-4 -left-4 w-10 h-10 bg-black rotate-12 z-20 shadow-[4px_4px_0_0_rgba(244,63,94,1)]"></div>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-block px-5 py-2 border-[3px] border-black bg-[#10b981] text-white font-black text-sm self-start shadow-[4px_4px_0_0_rgba(0,0,0,1)] uppercase tracking-widest"
          >
            HELLO, WORLD! 👋
          </motion.div>
          
          <h1 className="text-5xl lg:text-7xl font-black tracking-tighter text-black uppercase leading-[1.1]">
            <span className="block mb-2">I am</span>
            <span className="bg-[#f43f5e] text-white px-4 border-4 border-black shadow-[6px_6px_0_0_rgba(0,0,0,1)] transform -rotate-2 inline-block">Sachin</span>
            <span className="ml-4">Yadav</span>
          </h1>
          
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 uppercase border-b-4 border-dashed border-black pb-4">
            Full Stack Developer | AI Enthusiast
          </h2>
          
          <div className="h-14 flex items-center text-xl lg:text-3xl font-black text-black bg-[#f5f5f5] px-6 py-2 w-max border-4 border-black shadow-[inset_4px_4px_0_0_rgba(0,0,0,0.1)]">
            <span className="text-[#f43f5e]">&gt; </span>
            <span className="ml-3 uppercase">{displayText}</span>
            <span className="w-4 h-8 bg-black ml-2 animate-pulse"></span>
          </div>
          
          <div className="flex flex-wrap gap-6 mt-8">
            <a href="#projects" className="px-8 py-4 bg-[#0ea5e9] text-white text-xl font-black uppercase text-shadow-brutal border-4 border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)] hover:translate-y-2 hover:translate-x-2 hover:shadow-none transition-all flex items-center justify-center gap-2 group">
              PROJECTS
              <ChevronRight size={24} strokeWidth={4} className="group-hover:translate-x-2 transition-transform" />
            </a>
            <a href="#resume" className="px-8 py-4 bg-white text-black text-xl font-black uppercase border-4 border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)] hover:translate-y-2 hover:translate-x-2 hover:shadow-none transition-all flex items-center justify-center gap-3">
              <Download size={24} strokeWidth={3} />
              RESUME
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, lg: { x: 50 }, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative lg:h-[600px] flex items-center justify-center mt-12 lg:mt-0"
        >
          {/* Brutalist image frame */}
          <div className="absolute w-[350px] h-[350px] bg-[#f59e0b] rounded-full border-4 border-black shadow-[12px_12px_0_0_rgba(0,0,0,1)] transform translate-x-4 translate-y-4"></div>
          
          <motion.img 
            src={profileImage}
            alt="Sachin Photo" 
            className="w-[350px] h-[350px] relative z-10 border-4 border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)] rounded-full bg-white object-cover transform hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[16px_16px_0_0_rgba(0,0,0,1)] transition-all duration-300"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
