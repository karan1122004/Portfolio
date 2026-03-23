import React from 'react';
import { motion } from 'framer-motion';
import { Code, BrainCircuit, Activity } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const highlights = [
    {
      icon: <BrainCircuit size={24} />,
      title: "AI/ML Focused",
      desc: "Building intuitive models for disease prediction, performance analysis, and chat systems."
    },
    {
      icon: <Code size={24} />,
      title: "Full Stack Mastery",
      desc: "End-to-end development of dynamic and responsive user interfaces."
    },
    {
      icon: <Activity size={24} />,
      title: "Problem Solver",
      desc: "Driven by complex challenges, proven tracking record on LeetCode & Hackathons."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="bg-glow-effect bottom-0 right-0 mix-blend-multiply dark:mix-blend-screen opacity-20 transform translate-y-1/2" style={{background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(0, 0, 0, 0) 70%)'}}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About <span className="text-gradient">Me</span></h2>
          <div className="h-1 w-20 bg-primary-500 rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-panel p-8 md:p-10 rounded-2xl relative"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-500/10 rounded-full blur-[40px] -z-10"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary-500/10 rounded-full blur-[40px] -z-10"></div>
            
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="text-3xl">👨‍💻</span> 
              Professional Summary
            </h3>
            
            <p className="text-slate-700 dark:text-gray-300 mb-6 text-lg leading-relaxed">
              I am a passionate AI/ML developer with a strong foundation in building intelligent systems, creating impactful chatbots, and optimizing application performance. 
              Currently pursuing a B.Tech in CSE at Lovely Professional University, I bridge the gap between complex algorithms and seamless user experiences.
            </p>
            
            <p className="text-slate-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
              My core strengths include robust problem-solving, intuitive leadership, and fluid adaptability in rapidly evolving technical landscapes.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div 
                whileHover={{ scale: 1.02 }}
                key={index} 
                className="glass-effect p-6 rounded-xl border border-black/5 dark:border-white/10 flex gap-4 items-start hover:border-primary-500/30 transition-all hover:bg-white dark:bg-dark-800-[0.08]"
              >
                <div className="p-3 rounded-lg bg-white dark:bg-dark-800 text-primary-400 border border-black/5 dark:border-white/10 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">{item.title}</h4>
                  <p className="text-slate-600 dark:text-gray-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
