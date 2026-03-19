import React from 'react';
import { motion } from 'motion/react';

interface Props {
  title: string;
  text: string;
}

export const Manifesto: React.FC<Props> = ({ title, text }) => {
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center py-24 px-6 text-center border-t border-white/5">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="max-w-3xl"
      >
        <span className="font-mono text-xs text-accent uppercase tracking-widest mb-6 block">Manifiesto</span>
        <h2 className="font-display text-5xl md:text-7xl uppercase mb-8 tracking-wide">{title}</h2>
        <p className="text-xl md:text-3xl font-light leading-relaxed text-white/50">
          {text}
        </p>
      </motion.div>
    </section>
  );
};
