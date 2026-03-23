import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Star, GitFork, Calendar } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import Tilt from 'react-parallax-tilt';

const projects = [
  {
    title: "AI-Based Healthcare Disease Prediction Chatbot",
    desc: "AI-powered chatbot that predicts diseases based on user symptoms using NLP and ML",
    tags: ["Python", "Scikit-learn", "Pandas", "NLP", "Flask/Streamlit", "HTML", "CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop",
    github: "https://github.com/karan1122004/AI_Health_Chatbot",
    demo: "#"
  },
  {
    title: "AI Performance Analyser",
    desc: "AI system that detects performance issues, suggests optimizations, and enables self-healing",
    tags: ["Python", "TensorFlow", "XGBoost", "Scikit-Learn", "Streamlit"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    github: "https://github.com/karan1122004/AI_Performance_Analyser",
    demo: "#"
  },
  {
    title: "Railway Reservation System",
    desc: "Web-based train booking system with dynamic UI and real-time validation",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=2084&auto=format&fit=crop",
    github: "https://github.com/karan1122004",
    demo: "#"
  }
];

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/karan1122004/repos?sort=updated&per_page=6')
      .then(res => res.json())
      .then(data => {
        if(Array.isArray(data)) {
          setRepos(data);
        }
      })
      .catch(console.error);
  }, []);

  return (
    <section id="projects" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary-500/10 rounded-full blur-[80px] -z-10 mix-blend-multiply dark:mix-blend-screen"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
          <div className="h-1 w-20 bg-primary-500 rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.15}
                glareColor="lightblue"
                glarePosition="all"
                scale={1.02}
                transitionSpeed={2500}
                className="project-card h-full"
              >
                <div className="glass-panel rounded-2xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_30px_rgba(59,130,246,0.2)] h-full flex flex-col relative z-20">
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-slate-50 dark:bg-dark-900/40 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 dark:text-gray-400 text-sm mb-6 leading-relaxed flex-grow">
                      {project.desc}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, idx) => (
                        <span 
                          key={idx} 
                          className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-500/10 text-primary-500 dark:text-primary-300 border border-primary-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4 mt-auto">
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg glass-effect text-sm font-medium hover:bg-slate-100 dark:hover:bg-dark-700 transition-colors text-slate-900 dark:text-white relative z-30 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 duration-300"
                      >
                        <Github size={16} /> View Code
                      </a>
                      <a 
                        href={project.demo}
                        className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-primary-500 text-white text-sm font-medium hover:bg-primary-600 transition-colors relative z-30 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 duration-300 delay-75 shadow-lg shadow-primary-500/30"
                      >
                        Live Demo <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>

        {/* GitHub Integration Section */}
        {repos.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-between items-end mb-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                  <Github className="text-primary-500" /> Open Source Activity
                </h3>
                <p className="text-slate-600 dark:text-gray-400 mt-2 text-sm">Recent repositories from my GitHub</p>
              </div>
              <a 
                href="https://github.com/karan1122004?tab=repositories" 
                target="_blank" 
                rel="noreferrer"
                className="hidden md:flex items-center gap-2 px-6 py-2 rounded-full border border-black/5 dark:border-white/10 glass-effect hover:bg-slate-100 dark:hover:bg-white/5 text-slate-900 dark:text-white font-medium text-sm transition-all hover:scale-105"
              >
                View All Projects <ExternalLink size={16} />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {repos.slice(0, 6).map((repo) => (
                <a 
                  key={repo.id} 
                  href={repo.html_url} 
                  target="_blank" 
                  rel="noreferrer"
                  className="glass-panel p-6 rounded-xl hover:-translate-y-1 hover:border-primary-500/30 transition-all group block shadow-sm hover:shadow-md"
                >
                  <h4 className="text-lg font-bold text-primary-500 group-hover:text-primary-400 mb-2 truncate">{repo.name}</h4>
                  <p className="text-sm text-slate-600 dark:text-gray-400 mb-6 line-clamp-2 h-10">
                    {repo.description || "No description provided."}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-gray-400 font-medium border-t border-black/5 dark:border-white/10 pt-4">
                    <div className="flex gap-4">
                      {repo.language && <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-accent-500"></span>{repo.language}</span>}
                      <span className="flex items-center gap-1"><Star size={14} /> {repo.stargazers_count}</span>
                      <span className="flex items-center gap-1"><GitFork size={14} /> {repo.forks_count}</span>
                    </div>
                    <span className="flex items-center gap-1"><Calendar size={14} /> {new Date(repo.updated_at).toLocaleDateString()}</span>
                  </div>
                </a>
              ))}
            </div>
            
            <div className="mt-8 text-center md:hidden">
              <a 
                href="https://github.com/karan1122004?tab=repositories" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-500/10 text-primary-500 font-medium text-sm transition-all"
              >
                View All Projects <ExternalLink size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
