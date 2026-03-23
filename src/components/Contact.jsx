import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, MapPin, Phone } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const formRef = useRef();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setIsSubmitting(false);
        setFormData({ name: '', email: '', message: '' });
        alert(result.success || "Message sent successfully!");
      } else {
        throw new Error(result.error || "Failed to send message.");
      }
    } catch (error) {
      setIsSubmitting(false);
      alert("Failed to send message. Please ensure the backend server is running.");
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-96 bg-primary-500/10 rounded-full blur-[100px] -z-10 mix-blend-multiply dark:mix-blend-screen pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Get In <span className="text-gradient">Touch</span></h2>
          <div className="h-1 w-20 bg-primary-500 rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">Let's connect!</h3>
              <p className="text-slate-600 dark:text-gray-400 mb-8 max-w-md">
                I'm currently available for freelance work or full-time opportunities. If you have a project that you want to get started, think you need my help with something, or just want to say hi, then get in touch.
              </p>
            </div>

            <div className="space-y-6">
              <ContactItem icon={<Mail className="text-primary-400" size={24} />} title="Email" details="karan00000yadav@gmail.com" href="mailto:karan00000yadav@gmail.com" />
              <ContactItem icon={<Phone className="text-primary-500" size={24} />} title="Phone" details="+91 7466900984" href="tel:+917466900984" />
              <ContactItem icon={<MapPin className="text-accent-400" size={24} />} title="Location" details="Lovely Professional University, Punjab" href="#" />
            </div>

            <div className="pt-8 flex gap-4">
              <SocialIcon href="#" icon={<Github size={20} />} />
              <SocialIcon href="#" icon={<Linkedin size={20} />} />
              <SocialIcon href="#" icon={<Mail size={20} />} />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="glass-panel p-8 rounded-2xl flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-gray-300">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full bg-slate-50 dark:bg-dark-900/50 border border-black/5 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/50 transition-all font-sans"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-gray-300">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full bg-slate-50 dark:bg-dark-900/50 border border-black/5 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/50 transition-all font-sans"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-gray-300">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="How can I help you?"
                  className="w-full bg-slate-50 dark:bg-dark-900/50 border border-black/5 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/50 transition-all font-sans resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="mt-2 w-full py-3 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-slate-900 dark:text-white font-semibold transition-all flex items-center justify-center gap-2 shadow-[0_4px_15px_rgba(59,130,246,0.4)] hover:shadow-[0_6px_25px_rgba(59,130,246,0.6)] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : <><Send size={18} /> Send Message</>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon, title, details, href }) {
  return (
    <a href={href} className="flex items-center gap-4 group">
      <div className="w-12 h-12 rounded-xl glass-effect flex items-center justify-center group-hover:border-primary-500/30 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all">
        {icon}
      </div>
      <div>
        <h4 className="text-slate-900 dark:text-white font-medium mb-1">{title}</h4>
        <p className="text-slate-600 dark:text-gray-400 text-sm group-hover:text-primary-300 transition-colors">{details}</p>
      </div>
    </a>
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
