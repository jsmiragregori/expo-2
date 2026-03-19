import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export const Hero = () => {
  const { scrollY } = useScroll();
  
  // Parallax and fade effects
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.1]);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <motion.div 
        style={{ y, scale, opacity }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://picsum.photos/seed/galleryhero/2560/1440" 
          alt="Main Hero Work"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/20" />
      </motion.div>

      {/* Subtle scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-mono opacity-50">Desliza para Explorar</span>
        <div className="w-px h-12 bg-white/20 relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-full h-1/3 bg-white"
          />
        </div>
      </motion.div>
    </section>
  );
};
