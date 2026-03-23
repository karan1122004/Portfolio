import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Background Effects */}
      <div className="bg-glow-effect top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 hidden md:block"></div>
      <div className="bg-glow-effect top-1/3 right-1/4 translate-x-1/2 -translate-y-1/2 scale-150 opacity-40 mix-blend-multiply dark:mix-blend-screen hidden md:block" style={{ background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(96, 165, 250, 0.05) 40%, rgba(0, 0, 0, 0) 70%)' }}></div>

      <div className="max-w-7xl mx-auto px-6 z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect text-sm text-primary-400 font-medium mb-4"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-500"></span>
            </span>
            Available for Opportunities
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
            Hi, I'm <br />
            <span className="text-gradient">Karan Yadav</span>
          </h1>

          <div className="text-xl md:text-2xl font-medium text-slate-700 dark:text-gray-300 h-16">
            <TypeAnimation
              sequence={[
                'AI Developer',
                2000,
                'Full Stack Developer',
                2000,
                'Problem Solver',
                2000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-slate-900 dark:text-white"
            />
          </div>

          <p className="text-slate-600 dark:text-gray-400 max-w-lg leading-relaxed text-lg">
            Passionate about building intelligent systems, crafting engaging web experiences, and solving complex problems with AI & ML.
          </p>

          <div className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-8 py-3 rounded-xl bg-primary-500 hover:bg-primary-600 text-slate-900 dark:text-white font-semibold transition-all hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] flex items-center gap-2"
            >
              View Projects <ArrowRight size={18} />
            </a>
            <a
              href="/resume.pdf"
              download="Karan_Yadav_Resume.pdf"
              className="px-8 py-3 rounded-xl glass-effect hover:bg-slate-100 dark:bg-dark-700 text-slate-900 dark:text-white font-semibold transition-all border border-black/5 dark:border-white/10 hover:border-black/10 dark:border-white/20 flex items-center gap-2"
            >
              Download CV <Download size={18} />
            </a>
          </div>

          <div className="flex gap-6 mt-8">
            <SocialIcon href="https://github.com" icon={<Github size={24} />} />
            <SocialIcon href="https://linkedin.com" icon={<Linkedin size={24} />} />
            <SocialIcon href="mailto:contact@example.com" icon={<Mail size={24} />} />
          </div>
        </motion.div>

        {/* Right Content / Image Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="order-1 md:order-2 flex justify-center items-center relative"
        >
          {/* Decorative Elements */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-accent-500/20 rounded-full blur-[100px] animate-blob"></div>

          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-2 border border-black/5 dark:border-white/10 glass-panel shadow-[0_0_50px_rgba(59,130,246,0.2)]">
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary-500/30 animate-[spin_20s_linear_infinite]"></div>
            <div className="absolute inset-2 rounded-full border border-accent-500/20 animate-[spin_15s_linear_infinite_reverse]"></div>

            {/* The actual image constraint */}
            <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-dark-800 relative z-10 flex items-center justify-center">
              <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover" />
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-10 -left-6 px-4 py-2 glass-panel rounded-lg text-sm font-semibold flex items-center gap-2 border border-black/5 dark:border-white/10"
            >
              <span className="text-2xl">🤖</span> AI/ML
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-16 -right-8 px-4 py-2 glass-panel rounded-lg text-sm font-semibold flex items-center gap-2 border border-black/5 dark:border-white/10"
            >
              <span className="text-2xl">⚡</span> Full Stack
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SocialIcon({ href, icon }) {
  return (
    <motion.a
      whileHover={{ y: -5, scale: 1.1 }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-full glass-effect text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:text-white hover:border-primary-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all"
    >
      {icon}
    </motion.a>
  );
}
