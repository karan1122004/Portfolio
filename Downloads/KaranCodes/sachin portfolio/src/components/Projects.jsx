import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: 'KrishiMitra (AI System)',
    description: 'AI-based crop recommendation system using Machine Learning algorithms to help farmers optimize yield and resource usage with 88% accuracy.',
    image: '/assets/images/project_krishimitra_1774291640849.png',
    tech: ['Python', 'Machine Learning', 'React', 'Node.js'],
    github: '#',
    live: '#',
    color: 'bg-[#f43f5e]'
  },
  {
    id: 2,
    title: 'RailEase',
    description: 'A comprehensive train booking system with features for searching routes, ordering meals, and seamless ticket reservations.',
    image: '/assets/images/project_railease_1774291658583.png',
    tech: ['Java', 'MySQL', 'React Native'],
    github: '#',
    live: '#',
    color: 'bg-[#0ea5e9]'
  },
  {
    id: 3,
    title: 'Student Record System',
    description: 'Menu-driven desktop application offering robust CRUD operations for managing student profiles and academic databases efficiently.',
    image: '/assets/images/project_student_sys_1774291676333.png',
    tech: ['C++', 'File Handling', 'CLI'],
    github: '#',
    live: '#',
    color: 'bg-[#10b981]'
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-white border-b-[3px] border-black">
      <div className="absolute inset-0 bg-[#fef2f2] opacity-50 radial-pattern"></div>
      
      <div className="container mx-auto px-6 lg:px-12 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex justify-end mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold uppercase text-black text-shadow-brutal bg-[#0ea5e9] text-white px-6 py-2 border-4 border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)] transform rotate-2">
            PROJECTS
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`brutal-card flex flex-col bg-white overflow-hidden p-0 ${index === 2 ? 'lg:col-span-2 lg:max-w-4xl lg:mx-auto' : ''}`}
            >
              {/* MacOS Window Header */}
              <div className={`p-3 border-b-4 border-black flex gap-2 items-center ${project.color}`}>
                <div className="w-4 h-4 rounded-full bg-white border-2 border-black ml-2 shadow-[2px_2px_0_0_rgba(0,0,0,1)]"></div>
                <div className="w-4 h-4 rounded-full bg-black border-2 border-white shadow-[2px_2px_0_0_rgba(0,0,0,1)]"></div>
                <div className="w-4 h-4 rounded-full bg-white border-2 border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)]"></div>
                <div className="ml-4 font-mono font-bold text-white tracking-widest text-shadow-brutal uppercase">
                  APP_WINDOW_{project.id}
                </div>
              </div>

              {/* Project Image */}
              <div className="w-full relative border-b-4 border-black aspect-video bg-[#f5f5f5]">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-3xl font-black text-black mb-4 uppercase">
                  {project.title}
                </h3>
                
                <p className="text-gray-800 text-lg font-medium mb-6 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-[#f5f5f5] border-[2px] border-black rounded-full text-sm font-bold shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:bg-[#10b981] hover:text-white transition-colors cursor-pointer">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto">
                  <a href={project.github} target="_blank" className="flex items-center gap-2 bg-black text-white hover:bg-gray-800 border-[3px] border-black px-4 py-2 rounded-lg font-bold shadow-[4px_4px_0_0_rgba(0,0,0,0.5)] transition-transform active:translate-y-1 active:shadow-none">
                    <Github size={20} /> Code
                  </a>
                  <a href={project.live} target="_blank" className="flex items-center gap-2 bg-white text-black hover:bg-[#0ea5e9] hover:text-white border-[3px] border-black px-4 py-2 rounded-lg font-bold shadow-[4px_4px_0_0_rgba(0,0,0,1)] transition-all active:translate-y-1 active:shadow-none">
                    <ExternalLink size={20} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
