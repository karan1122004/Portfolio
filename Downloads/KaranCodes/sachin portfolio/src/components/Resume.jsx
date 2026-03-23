import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, MonitorCheck, Download, Code2, Award, GraduationCap, Briefcase } from 'lucide-react';

const Resume = () => {
  const [viewMode, setViewMode] = useState('ui'); // 'ui' or 'pdf'

  const skills = [
    { category: 'Languages', items: ['C++', 'JavaScript', 'Java', 'Python'], color: 'bg-[#f43f5e]' },
    { category: 'Frameworks', items: ['React.js', 'Node.js', 'HTML', 'CSS'], color: 'bg-[#0ea5e9]' },
    { category: 'Tools', items: ['MySQL', 'MongoDB', 'GitHub'], color: 'bg-[#10b981]' }
  ];

  return (
    <section id="resume" className="py-24 relative overflow-hidden bg-[#fffbeb] border-b-[3px] border-black">
      <div className="container mx-auto px-6 lg:px-12 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex justify-start mb-16"
        >
          <div className="inline-block relative">
            <h2 className="text-5xl md:text-7xl font-bold uppercase text-white text-shadow-brutal bg-[#f59e0b] px-6 py-2 border-4 border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)] z-10 relative transform rotate-1">
              RESUME
            </h2>
            <div className="absolute top-1/2 -right-8 w-12 h-2 bg-[#f43f5e] border-2 border-black transform -rotate-12"></div>
          </div>
        </motion.div>

        {/* View Toggle & Download */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 bg-white brutal-card p-4">
          <div className="flex flex-wrap gap-4 w-full md:w-auto">
            <button
              onClick={() => setViewMode('ui')}
              className={`px-6 py-3 border-[3px] border-black font-black uppercase tracking-wider flex items-center gap-2 transition-all ${
                viewMode === 'ui' ? 'bg-[#10b981] text-white shadow-[inset_4px_4px_0_0_rgba(0,0,0,0.2)]' : 'bg-[#f5f5f5] text-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-y-1 hover:translate-x-1 hover:shadow-none'
              }`}
            >
              <MonitorCheck size={20} strokeWidth={3} /> Interactive
            </button>
            <button
              onClick={() => setViewMode('pdf')}
              className={`px-6 py-3 border-[3px] border-black font-black uppercase tracking-wider flex items-center gap-2 transition-all ${
                viewMode === 'pdf' ? 'bg-[#0ea5e9] text-white shadow-[inset_4px_4px_0_0_rgba(0,0,0,0.2)]' : 'bg-[#f5f5f5] text-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-y-1 hover:translate-x-1 hover:shadow-none'
              }`}
            >
              <FileText size={20} strokeWidth={3} /> PDF View
            </button>
          </div>
          
          <a href="/resume.pdf" download="Sachin_Yadav_Resume.pdf" className="px-8 py-3 bg-[#f43f5e] border-[3px] border-black text-white font-black uppercase tracking-wider flex items-center gap-2 shadow-[6px_6px_0_0_rgba(0,0,0,1)] hover:shadow-none hover:translate-y-1 hover:translate-x-1 transition-all">
            <Download size={20} strokeWidth={3} /> Download PDF
          </a>
        </div>

        {/* Resume Content Container */}
        <div className="brutal-card min-h-[800px] w-full p-0 flex flex-col overflow-hidden bg-white">
          <div className="p-3 border-b-4 border-black flex gap-2 items-center bg-[#f59e0b]">
            <div className="w-4 h-4 rounded-full bg-white border-2 border-black ml-2 shadow-[2px_2px_0_0_rgba(0,0,0,1)]"></div>
            <div className="w-4 h-4 rounded-full bg-black border-2 border-white shadow-[2px_2px_0_0_rgba(0,0,0,1)]"></div>
            <div className="w-4 h-4 rounded-full bg-white border-2 border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)]"></div>
            <div className="ml-4 font-mono font-bold text-black tracking-widest uppercase">
              RESUME_VIEWER_V1
            </div>
          </div>
          
          <AnimatePresence mode="wait">
            {viewMode === 'pdf' ? (
              <motion.div
                key="pdf"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full h-[800px] relative"
              >
                <iframe src="/resume.pdf" className="w-full h-full border-none" title="Resume PDF" />
              </motion.div>
            ) : (
              <motion.div
                key="ui"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="p-8 md:p-12 w-full"
              >
                {/* Header Info */}
                <div className="text-center mb-16 border-b-4 border-black border-dashed pb-12">
                  <h3 className="text-5xl font-black text-black mb-6 uppercase tracking-widest text-shadow-brutal-white drop-shadow-[4px_4px_0_rgba(244,63,94,1)]">SACHIN YADAV</h3>
                  <div className="flex flex-wrap items-center justify-center gap-4 text-lg font-bold">
                    <a href="mailto:sachin9536yadav@gmail.com" className="bg-[#0ea5e9] text-white px-4 py-1 border-2 border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:bg-black transition-colors">sachin9536yadav@gmail.com</a>
                    <a href="http://www.linkedin.com/in/sachinydv07" target="_blank" className="bg-[#f59e0b] text-black px-4 py-1 border-2 border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:bg-white transition-colors">LinkedIn</a>
                    <a href="https://github.com/sachinyadav5127" target="_blank" className="bg-black text-white px-4 py-1 border-2 border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:bg-gray-800 transition-colors">GitHub</a>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-16">
                  {/* Left Column */}
                  <div className="space-y-16">
                    {/* Education */}
                    <div>
                      <h4 className="text-3xl font-black text-black mb-8 flex items-center gap-4 uppercase">
                        <span className="p-3 bg-[#10b981] text-white border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)]"><GraduationCap size={28} strokeWidth={3} /></span>
                        Education
                      </h4>
                      <div className="relative border-l-4 border-black pl-8 ml-6 space-y-8">
                        <div className="relative brutal-card p-6 shadow-[6px_6px_0_0_rgba(0,0,0,1)]">
                          <div className="absolute w-6 h-6 bg-[#f43f5e] border-4 border-black rounded-full -left-[45px] top-4 z-10 shadow-[2px_2px_0_0_rgba(0,0,0,1)]"></div>
                          <h5 className="text-xl font-black text-black uppercase">B.Tech Computer Science</h5>
                          <p className="text-[#0ea5e9] font-black text-lg mb-2 uppercase border-b-2 border-black border-dashed pb-2 inline-block">Lovely Professional University</p>
                          <p className="text-gray-800 font-medium text-lg mt-2 font-bold p-2 bg-[#f5f5f5] border-2 border-black">Focus on core CS including DSA, OS, and Machine Learning.</p>
                        </div>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="text-3xl font-black text-black mb-8 flex items-center gap-4 uppercase">
                        <span className="p-3 bg-[#f59e0b] text-white border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)]"><Award size={28} strokeWidth={3} /></span>
                        Achievements
                      </h4>
                      <div className="relative border-l-4 border-black pl-8 ml-6 space-y-8">
                        <div className="relative brutal-card p-6">
                          <div className="absolute w-6 h-6 bg-[#0ea5e9] border-4 border-black rounded-full -left-[45px] top-4 z-10 shadow-[2px_2px_0_0_rgba(0,0,0,1)]"></div>
                          <h5 className="text-xl font-black text-black uppercase">100+ Problems on LeetCode</h5>
                          <p className="text-gray-800 font-bold mt-2">Consistent problem solver focused on advanced Data Structures and Algorithms.</p>
                        </div>
                        <div className="relative brutal-card p-6 bg-black text-white">
                          <div className="absolute w-6 h-6 bg-[#f43f5e] border-4 border-black rounded-full -left-[45px] top-4 z-10 shadow-[2px_2px_0_0_rgba(0,0,0,1)]"></div>
                          <h5 className="text-xl font-black uppercase text-shadow-brutal-white w-max text-[#f59e0b]">4★ C++ HackerRank</h5>
                          <p className="text-gray-300 font-bold mt-2">Proven proficiency in C++ programming fundamentals.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-16">
                    {/* Skills */}
                    <div>
                      <h4 className="text-3xl font-black text-black mb-8 flex items-center gap-4 uppercase">
                        <span className="p-3 bg-[#f43f5e] text-white border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)]"><Code2 size={28} strokeWidth={3} /></span>
                        Technical Skills
                      </h4>
                      <div className="space-y-6">
                        {skills.map(group => (
                          <div key={group.category} className="brutal-card p-0 flex flex-col bg-white divide-y-4 divide-black overflow-hidden mb-6 hover:translate-y-0 hover:translate-x-0 cursor-default">
                            <div className={`p-4 ${group.color} text-white border-b-4 border-black shadow-[0_4px_0_0_rgba(0,0,0,1)]`}>
                              <h5 className="font-black uppercase tracking-widest text-xl">{group.category}</h5>
                            </div>
                            <div className="p-6 flex flex-wrap gap-3">
                              {group.items.map(skill => (
                                <span key={skill} className="bg-white border-[3px] border-black text-black font-bold uppercase px-4 py-2 shadow-[2px_2px_0_0_rgba(0,0,0,1)] text-sm">
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Brief Projects overview */}
                    <div>
                      <h4 className="text-3xl font-black text-black mb-8 flex items-center gap-4 uppercase">
                        <span className="p-3 bg-[#0ea5e9] text-white border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)]"><Briefcase size={28} strokeWidth={3} /></span>
                        Key Projects
                      </h4>
                      <div className="relative border-l-4 border-black pl-8 ml-6 space-y-8">
                        <div className="relative brutal-card p-6">
                          <div className="absolute w-6 h-6 bg-[#f59e0b] border-4 border-black rounded-full -left-[45px] top-4 z-10 shadow-[2px_2px_0_0_rgba(0,0,0,1)]"></div>
                          <h5 className="text-xl font-black text-black uppercase underline decoration-4 decoration-[#f43f5e] inline-block mb-2">KrishiMitra</h5>
                          <p className="text-black font-bold text-md mt-1">ML-based crop recommendation system with 88% accuracy.</p>
                        </div>
                        <div className="relative brutal-card p-6">
                          <div className="absolute w-6 h-6 bg-[#10b981] border-4 border-black rounded-full -left-[45px] top-4 z-10 shadow-[2px_2px_0_0_rgba(0,0,0,1)]"></div>
                          <h5 className="text-xl font-black text-black uppercase underline decoration-4 decoration-[#0ea5e9] inline-block mb-2">RailEase</h5>
                          <p className="text-black font-bold text-md mt-1">Web platform for booking railway tickets and travel services.</p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Resume;
