import { motion } from 'framer-motion';

const PageLoader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 0.5, ease: 'easeInOut' }}
      onAnimationComplete={() => document.body.style.overflow = 'auto'}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#f59e0b] pointer-events-none"
    >
      <div className="relative flex flex-col items-center justify-center">
        {/* Bouncing brutal box */}
        <motion.div
          animate={{ 
            y: [-20, 0, -20],
            rotate: [0, 90, 180]
          }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-24 h-24 bg-white border-[4px] border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)] flex items-center justify-center"
        >
          <span className="font-black text-4xl text-black">SY</span>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          transition={{ duration: 0.5 }}
          className="mt-8 font-black text-black text-2xl uppercase tracking-widest text-shadow-brutal bg-white px-4 py-2 border-4 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] transform -rotate-2"
        >
          LOADING...
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PageLoader;
