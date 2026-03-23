import { motion } from 'framer-motion';
import { Award, Code, CheckCircle, GraduationCap, Calendar, MapPin } from 'lucide-react';

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-[#f0f9ff]">
      <div className="container mx-auto px-6 lg:px-12 z-10 relative">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Achievements & Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-black uppercase text-black mb-12 flex items-center gap-4 bg-[#f43f5e] inline-block px-4 py-2 border-[4px] border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)] text-white">
              Achievements
            </h2>

            <div className="space-y-6">
              <div className="brutal-card p-6 bg-white flex gap-4 hover:-translate-y-2 hover:-translate-x-2 transition-all shadow-[6px_6px_0_0_rgba(0,0,0,1)]">
                <div className="w-16 h-16 bg-[#0ea5e9] border-[3px] border-black rounded-lg flex items-center justify-center shrink-0 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                  <Code size={32} strokeWidth={3} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-black">100+ LeetCode Problems</h3>
                  <p className="text-gray-800 font-medium mt-2">Consistent problem solver focused on Data Structures and Algorithms.</p>
                </div>
              </div>
              
              <div className="brutal-card p-6 bg-[#10b981] flex gap-4 hover:-translate-y-2 hover:-translate-x-2 transition-all shadow-[6px_6px_0_0_rgba(0,0,0,1)]">
                <div className="w-16 h-16 bg-white border-[3px] border-black rounded-lg flex items-center justify-center shrink-0 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                  <CheckCircle size={32} strokeWidth={3} className="text-black" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white text-shadow-brutal">4★ C++ HackerRank</h3>
                  <p className="text-black font-bold mt-2">Proven proficiency in C++ programming fundamentals and advanced concepts.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-black uppercase text-black mb-12 flex items-center gap-4 bg-[#f59e0b] inline-block px-4 py-2 border-[4px] border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
              Education
            </h2>

            <div className="relative border-l-4 border-black ml-6 pl-8 py-4 space-y-12">
              <div className="relative brutal-card p-6 bg-white shadow-[6px_6px_0_0_rgba(0,0,0,1)]">
                <span className="absolute -left-[46px] top-6 w-8 h-8 rounded-full bg-[#f43f5e] border-[4px] border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)] z-10"></span>
                <h3 className="text-2xl font-black text-black mb-2 uppercase">B.Tech in Computer Science</h3>
                <h4 className="text-xl text-[#0ea5e9] font-black mb-4 uppercase">Lovely Professional University (LPU)</h4>
                <div className="flex flex-wrap gap-4 text-sm font-bold text-black border-y-[3px] border-black py-2 mb-4 bg-gray-100 px-4">
                  <span className="flex items-center gap-2"><Calendar size={18} /> 2022 - 2026</span>
                  <span className="flex items-center gap-2"><MapPin size={18} /> Punjab, India</span>
                </div>
                <p className="text-gray-800 font-medium">
                  Focusing on core computer science subjects including Data Structures, Algorithms, Operating Systems, Computer Networks, and Machine Learning.
                </p>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Achievements;
