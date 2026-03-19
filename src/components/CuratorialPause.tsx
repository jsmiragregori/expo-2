import React from 'react';
import { motion } from 'motion/react';

interface Props {
  text: string;
}

export const CuratorialPause: React.FC<Props> = ({ text }) => {
  return (
    <section className="py-32 px-6 lg:px-24 border-t border-white/5 bg-zinc-950/50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="font-display text-3xl md:text-5xl lg:text-6xl uppercase tracking-tighter leading-tight"
        >
          {text}
        </motion.p>
      </div>
    </section>
  );
};
