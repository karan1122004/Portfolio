import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot } from 'lucide-react';

export default function AskAI() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'ai', content: "Hi! I'm Karan's AI Assistant. Ask me anything about his projects, skills, or experience!" }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages(prev => [...prev, { role: 'user', content: input }]);
    const currentInput = input.toLowerCase();
    setInput('');

    setTimeout(() => {
      let response = "I'm not sure about that! Try asking about Karan's AI Healthcare project, his skills, or how to contact him.";
      if (currentInput.includes('project') || currentInput.includes('healthcare') || currentInput.includes('health')) {
        response = "Karan built an AI Healthcare Disease Predictor using Python and TensorFlow. Check out the Projects section above for a demo!";
      } else if (currentInput.includes('skill') || currentInput.includes('tech') || currentInput.includes('stack')) {
        response = "He excels in Python, Java, React, TensorFlow, and more! See the Skills section for a detailed breakdown.";
      } else if (currentInput.includes('contact') || currentInput.includes('hire') || currentInput.includes('email') || currentInput.includes('phone')) {
        response = "Awesome! You can email him at karan00000yadav@gmail.com, call +91 7466900984, or use the form at the bottom of the page.";
      }

      setMessages(prev => [...prev, { role: 'ai', content: response }]);
    }, 800);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-primary-500 text-white flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.5)] z-40 hover:scale-110 transition-transform project-card"
        onClick={() => setIsOpen(true)}
        whileHover={{ rotate: 10 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageSquare size={24} />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9, originX: 1, originY: 1 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9,OriginY: 1 }}
            className="fixed bottom-24 right-6 w-80 md:w-96 glass-panel rounded-2xl overflow-hidden flex flex-col shadow-2xl z-50 border border-slate-200 dark:border-white/10"
          >
            {/* Header */}
            <div className="bg-primary-500/10 border-b border-primary-500/20 p-4 flex justify-between items-center backdrop-blur-md">
              <div className="flex items-center gap-2 text-slate-900 dark:text-white font-semibold">
                <Bot className="text-primary-500" />
                <span className="text-sm">KaranGPT Assistant</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-slate-500 hover:text-slate-800 dark:text-gray-400 dark:hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="h-80 p-4 overflow-y-auto flex flex-col gap-3 bg-white/40 dark:bg-dark-900/40">
              {messages.map((msg, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: msg.role === 'ai' ? -10 : 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${msg.role === 'ai' ? 'justify-start' : 'justify-end'}`}
                >
                  <div 
                    className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                      msg.role === 'ai' 
                        ? 'bg-white dark:bg-dark-800 text-slate-800 dark:text-gray-200 border border-slate-200 dark:border-white/5 rounded-tl-sm shadow-sm' 
                        : 'bg-gradient-to-r from-primary-500 flex-grow to-accent-500 text-white rounded-tr-sm shadow-md'
                    }`}
                  >
                    {msg.content}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input Area */}
            <form onSubmit={handleSend} className="p-3 bg-white/60 dark:bg-dark-800/80 border-t border-slate-200 dark:border-white/10 flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Ask something..."
                className="flex-1 bg-white dark:bg-dark-900 border border-slate-200 dark:border-white/10 rounded-full px-4 text-sm focus:outline-none focus:border-primary-500/50 text-slate-800 dark:text-white"
              />
              <button 
                type="submit"
                className="w-10 h-10 rounded-full bg-primary-500 text-white flex items-center justify-center hover:bg-primary-600 transition-colors shadow-md"
              >
                <Send size={16} className="-ml-1 mt-1" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
