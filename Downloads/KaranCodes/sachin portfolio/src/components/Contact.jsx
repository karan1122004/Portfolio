import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#e0e7ff] border-y-[3px] border-black">
      <div className="container mx-auto px-6 lg:px-12 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative"
        >
          <div className="inline-block relative">
            <h2 className="text-5xl md:text-7xl font-bold uppercase text-white bg-black px-8 py-4 border-4 border-black text-shadow-brutal shadow-[12px_12px_0_0_rgba(244,63,94,1)] transform -rotate-1">
              GET IN TOUCH
            </h2>
          </div>
          <p className="mt-12 text-black font-bold max-w-lg mx-auto text-xl border-4 border-dashed border-black p-4 bg-white/50 backdrop-blur-sm rounded-2xl transform rotate-1">
            I'm always open to discussing web development work or partnership opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-4xl font-black text-black mb-8 tracking-wide leading-tight uppercase">
              LET'S CREATE SOMETHING <span className="text-white bg-[#0ea5e9] px-2 shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black inline-block transform rotate-2">AMAZING</span> TOGETHER.
            </h3>
            
            <div className="space-y-6 mt-8">
              <a href="mailto:sachin9536yadav@gmail.com" className="flex items-center gap-6 brutal-card p-4 hover:bg-[#0ea5e9] hover:text-white transition-colors group">
                <div className="w-16 h-16 rounded-full bg-white border-[3px] border-black flex items-center justify-center shrink-0 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                  <Mail className="text-black" size={32} />
                </div>
                <span className="text-xl font-bold">sachin9536yadav@gmail.com</span>
              </a>
              
              <a href="https://linkedin.com/in/sachinydv07" target="_blank" className="flex items-center gap-6 brutal-card p-4 hover:bg-[#f59e0b] hover:text-black transition-colors group">
                <div className="w-16 h-16 rounded-full bg-white border-[3px] border-black flex items-center justify-center shrink-0 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                  <Linkedin className="text-black" size={32} />
                </div>
                <span className="text-xl font-bold">linkedin.com/in/sachinydv07</span>
              </a>
              
              <a href="https://github.com/sachinyadav5127" target="_blank" className="flex items-center gap-6 brutal-card p-4 hover:bg-black hover:text-white transition-colors group">
                <div className="w-16 h-16 rounded-full bg-white border-[3px] border-black flex items-center justify-center shrink-0 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                  <Github className="text-black" size={32} />
                </div>
                <span className="text-xl font-bold">github.com/sachinyadav5127</span>
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="brutal-card p-8 bg-white"
          >
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-lg font-black uppercase tracking-wider text-black">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="John Doe"
                  className="bg-[#f5f5f5] border-[3px] border-black rounded-lg p-4 text-black font-bold focus:outline-none focus:ring-4 focus:ring-[#f59e0b] transition-all shadow-[inset_4px_4px_0_0_rgba(0,0,0,0.1)]" 
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-lg font-black uppercase tracking-wider text-black">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="john@example.com"
                  className="bg-[#f5f5f5] border-[3px] border-black rounded-lg p-4 text-black font-bold focus:outline-none focus:ring-4 focus:ring-[#0ea5e9] transition-all shadow-[inset_4px_4px_0_0_rgba(0,0,0,0.1)]" 
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-lg font-black uppercase tracking-wider text-black">Your Message</label>
                <textarea 
                  id="message" 
                  rows="5"
                  placeholder="How can I help you?"
                  className="bg-[#f5f5f5] border-[3px] border-black rounded-lg p-4 text-black font-bold focus:outline-none focus:ring-4 focus:ring-[#10b981] transition-all resize-none shadow-[inset_4px_4px_0_0_rgba(0,0,0,0.1)]" 
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="mt-4 px-8 py-5 rounded-lg bg-[#f43f5e] text-white font-black text-xl uppercase tracking-widest flex items-center justify-center gap-4 hover:bg-[#e11d48] border-[4px] border-black shadow-[6px_6px_0_0_rgba(0,0,0,1)] active:translate-y-2 active:translate-x-2 active:shadow-none transition-all"
              >
                Send Message
                <Send size={24} strokeWidth={3} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
