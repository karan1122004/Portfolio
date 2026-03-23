import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, GraduationCap, Award } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

function TimelineItem({ icon, title, subtitle, desc, isLeft, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div ref={ref} className={`mb-12 flex justify-between items-center w-full ${isLeft ? 'flex-row-reverse left-timeline' : 'right-timeline'}`}>
      <div className="order-1 w-5/12"></div>
      
      <div className="z-20 flex items-center order-1 bg-white dark:bg-dark-800 shadow-xl w-12 h-12 rounded-full border border-primary-500/30">
        <h1 className="mx-auto font-semibold text-lg text-slate-900 dark:text-white">
          {icon}
        </h1>
      </div>

      <motion.div 
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 * index }}
        className="order-1 glass-panel rounded-xl w-5/12 px-6 py-4 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] hover:-translate-y-1 transition-all"
      >
        <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-1">{title}</h3>
        <p className="text-sm text-primary-400 font-medium mb-2">{subtitle}</p>
        {desc && <p className="text-sm leading-snug text-slate-700 dark:text-gray-300">{desc}</p>}
      </motion.div>
    </div>
  );
}

export default function Experience() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="bg-glow-effect left-0 top-1/2 -translate-y-1/2 opacity-20 hidden md:block" style={{background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, rgba(0, 0, 0, 0) 70%)'}}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Journey & <span className="text-gradient">Experience</span></h2>
          <div className="h-1 w-20 bg-accent-500 rounded-full mx-auto" />
        </motion.div>

        <div className="container mx-auto w-full h-full relative">
          <div className="absolute border-opacity-20 border-white h-full border hidden md:block left-1/2 -ml-px"></div>

          {/* Education */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-3">
              <GraduationCap className="text-primary-500" size={28} /> Education
            </h3>
            <div className="md:hidden border-l-2 border-black/10 dark:border-white/20 pl-4 ml-4 space-y-6">
              {/* Mobile version */}
              <div className="glass-panel p-4 rounded-xl">
                <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-1">B.Tech CSE</h3>
                <p className="text-sm text-primary-400 font-medium mb-2">Lovely Professional University</p>
              </div>
            </div>
            <div className="hidden md:block">
              <TimelineItem 
                icon={<GraduationCap className="text-primary-400" size={24} />} 
                title="B.Tech Computer Science" 
                subtitle="Lovely Professional University" 
                isLeft={false} 
                index={1} 
              />
            </div>
          </div>

          {/* Achievements */}
          <div className="mb-8 mt-16 md:mt-0">
            <h3 className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-3">
              <Trophy className="text-accent-500" size={28} /> Achievements
            </h3>
            <div className="md:hidden border-l-2 border-black/10 dark:border-white/20 pl-4 ml-4 space-y-6">
              <div className="glass-panel p-4 rounded-xl">
                <h3 className="font-bold text-slate-900 dark:text-white">48-hour AI Hackathon</h3>
                <p className="text-sm text-accent-400 mb-2">CIPHERTHON 2.0 qualifier</p>
              </div>
              <div className="glass-panel p-4 rounded-xl">
                <h3 className="font-bold text-slate-900 dark:text-white">200+ LeetCode Problems</h3>
                <p className="text-sm text-accent-400 mb-2">Consistent problem solver</p>
              </div>
              <div className="glass-panel p-4 rounded-xl">
                <h3 className="font-bold text-slate-900 dark:text-white">NGO Volunteer</h3>
                <p className="text-sm text-accent-400 mb-2">1000+ trees planted</p>
              </div>
              <div className="glass-panel p-4 rounded-xl">
                <h3 className="font-bold text-slate-900 dark:text-white">State-level Badminton</h3>
                <p className="text-sm text-accent-400 mb-2">Sports Excellence</p>
              </div>
            </div>
            <div className="hidden md:block">
              <TimelineItem 
                icon={<Trophy className="text-accent-400" size={24} />} 
                title="48-hour AI Hackathon" 
                subtitle="CIPHERTHON 2.0 qualifier" 
                isLeft={true} 
                index={2} 
              />
              <TimelineItem 
                icon={<Trophy className="text-accent-400" size={24} />} 
                title="200+ LeetCode Problems" 
                subtitle="Consistent Problem Solver" 
                isLeft={false} 
                index={3} 
              />
              <TimelineItem 
                icon={<Trophy className="text-accent-400" size={24} />} 
                title="NGO Volunteer & Sports" 
                subtitle="1000+ trees planted, State-level Badminton" 
                isLeft={true} 
                index={4} 
              />
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-16 md:mt-24">
            <h3 className="text-2xl font-bold text-center mb-12 flex items-center justify-center gap-3">
              <Award className="text-primary-500" size={28} /> Certifications
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {["Machine Learning (Coursera)", "Deep Learning Bootcamp", "Network Communication"].map((cert, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: idx * 0.1 + 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-3 rounded-full glass-effect border border-black/5 dark:border-white/10 hover:border-primary-500/50 hover:bg-white dark:bg-dark-800/5 transition-all text-sm font-medium flex items-center gap-2 shadow-[0_0_10px_rgba(255,255,255,0.05)] cursor-default"
                >
                  <Award size={16} className="text-primary-400" /> {cert}
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
