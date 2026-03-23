import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [hoverText, setHoverText] = useState("");

  // Use motion values for smoother, spring-based following
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      // Find the closest interactive element
      const target = e.target.closest('a, button, .project-card');
      
      if (target) {
        setIsHovering(true);
        // Custom text for project cards
        if (target.classList.contains('project-card')) {
          setHoverText("View Project");
        } else {
          setHoverText("");
        }
      } else {
        setIsHovering(false);
        setHoverText("");
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-primary-500 pointer-events-none z-[100] mix-blend-multiply dark:mix-blend-screen hidden lg:block"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering && !hoverText ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-primary-500/50 pointer-events-none z-[99] hidden lg:flex items-center justify-center text-[10px] font-bold text-primary-500 shadow-[0_0_15px_rgba(59,130,246,0.3)] backdrop-blur-sm bg-white/10 dark:bg-dark-900/10"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: hoverText ? 90 : isHovering ? 50 : 40,
          height: hoverText ? 90 : isHovering ? 50 : 40,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 20 }}
      >
        {hoverText && (
          <motion.span 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center tracking-widest uppercase dark:text-white text-slate-900"
          >
            {hoverText}
          </motion.span>
        )}
      </motion.div>
    </>
  );
}
