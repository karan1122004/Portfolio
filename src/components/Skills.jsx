import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function SkillBar({ name, percentage, delay, iconImg }) {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div className="mb-6" ref={ref}>
      <div className="flex justify-between mb-2">
        <span className="text-slate-800 dark:text-gray-200 font-medium flex items-center gap-2">
          {iconImg && <img src={iconImg} alt={name} className="w-5 h-5 object-contain" />}
          {name}
        </span>
        <span className="text-primary-400">{percentage}%</span>
      </div>
      <div className="h-3 bg-slate-100 dark:bg-dark-700 rounded-full overflow-hidden border border-black/5 dark:border-white/10 shadow-inner">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${percentage}%` } : {}}
          transition={{ duration: 1, delay: delay, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-primary-500 to-accent-500 relative"
        >
          <div className="absolute top-0 right-0 bottom-0 left-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0.15)_75%,transparent_75%,transparent)] bg-[length:20px_20px] animate-[slide_1s_linear_infinite]" />
        </motion.div>
      </div>
      <style>{`
        @keyframes slide {
          from { background-position: 20px 0; }
          to { background-position: 0 0; }
        }
      `}</style>
    </div>
  );
}

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical <span className="text-gradient">Skills</span></h2>
          <div className="h-1 w-20 bg-accent-500 rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Languages */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-panel p-8 rounded-2xl hover:border-primary-500/50 transition-all group"
          >
            <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white group-hover:text-primary-400 transition-colors">Languages</h3>
            <SkillBar name="Python" percentage={90} delay={0.2} iconImg="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
            <SkillBar name="Java" percentage={85} delay={0.3} iconImg="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" />
            <SkillBar name="C++" percentage={80} delay={0.4} iconImg="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" />
            <SkillBar name="JavaScript" percentage={85} delay={0.5} iconImg="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
            <SkillBar name="HTML/CSS" percentage={90} delay={0.6} iconImg="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
          </motion.div>

          {/* Frameworks */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-panel p-8 rounded-2xl hover:border-accent-500/50 transition-all group"
          >
            <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white group-hover:text-accent-400 transition-colors">Frameworks</h3>
            <SkillBar name="TensorFlow" percentage={75} delay={0.4} iconImg="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" />
            <SkillBar name="Scikit-Learn" percentage={80} delay={0.5} iconImg="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" />
            <SkillBar name="OpenCV" percentage={70} delay={0.6} iconImg="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg" />
            <SkillBar name="Spring Boot" percentage={85} delay={0.7} iconImg="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" />
            <SkillBar name="React" percentage={80} delay={0.8} iconImg="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
          </motion.div>

          {/* Tools */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="glass-panel p-8 rounded-2xl hover:border-primary-500/50 transition-all lg:col-span-1 md:col-span-2 group"
          >
            <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white group-hover:text-primary-400 transition-colors">Tools & Databases</h3>
            <SkillBar name="GitHub" percentage={95} delay={0.6} iconImg="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
            <SkillBar name="MySQL" percentage={85} delay={0.7} iconImg="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" />
            <SkillBar name="VS Code" percentage={95} delay={0.8} iconImg="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" />
            <SkillBar name="Jupyter" percentage={90} delay={0.9} iconImg="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
