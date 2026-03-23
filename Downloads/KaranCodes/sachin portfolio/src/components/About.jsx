import { motion } from 'framer-motion';
import { Code2, Trophy, FolderGit2 } from 'lucide-react';
import profileImage from '../assets/profile.jpg';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#e0f2fe] border-y-[3px] border-black">
      <div className="container mx-auto px-6 lg:px-12 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-start mb-16 inline-block"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-4 uppercase text-black text-shadow-brutal bg-[#10b981] px-4 py-2 border-4 border-black inline-block shadow-[8px_8px_0_0_rgba(0,0,0,1)] transform -rotate-2">
            ABOUT ME
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full relative flex items-center justify-center p-8"
          >
            <div className="absolute w-[80%] aspect-square bg-[#f43f5e] border-[3px] border-black rounded-3xl transform rotate-6 shadow-[8px_8px_0_0_rgba(0,0,0,1)]"></div>
            <img 
              src={profileImage}
              alt="Sachin Photo" 
              className="w-[80%] relative z-10 border-[3px] border-black rounded-3xl shadow-[8px_8px_0_0_rgba(0,0,0,1)] bg-white object-cover aspect-square"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-8 text-black text-xl font-medium leading-relaxed bg-white p-8 border-4 border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)] rounded-2xl"
          >
            <p className="border-l-[6px] border-[#0ea5e9] pl-6 italic font-bold text-gray-800">
              "I am a passionate Computer Science student focused on building scalable web applications and AI-powered systems."
            </p>
            <p>
              My journey into tech started with an immense curiosity for how things work under the hood. Since then, I've immersed myself in learning various languages and frameworks, striving to deliver beautiful and performant solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
              <div className="brutal-card p-6 flex flex-col items-center justify-center text-center bg-[#f59e0b]">
                <Code2 size={40} className="mb-2" strokeWidth={3} />
                <h3 className="text-4xl font-black">100+</h3>
                <p className="text-sm font-bold uppercase mt-2 border-t-2 border-black pt-2 w-full">Problems</p>
              </div>
              <div className="brutal-card p-6 flex flex-col items-center justify-center text-center bg-[#10b981]">
                <FolderGit2 size={40} className="mb-2" strokeWidth={3} />
                <h3 className="text-4xl font-black">3+</h3>
                <p className="text-sm font-bold uppercase mt-2 border-t-2 border-black pt-2 w-full">Projects</p>
              </div>
              <div className="brutal-card p-6 flex flex-col items-center justify-center text-center bg-[#f43f5e] text-white">
                <Trophy size={40} className="mb-2" strokeWidth={3} />
                <h3 className="text-4xl font-black text-white text-shadow-brutal">4★</h3>
                <p className="text-sm font-bold uppercase mt-2 border-t-2 border-white pt-2 w-full">HackerRank</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
