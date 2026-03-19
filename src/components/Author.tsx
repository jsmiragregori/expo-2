import React from 'react';
import { motion } from 'motion/react';

export const Author = () => {
  return (
    <section id="author" className="min-h-screen py-32 px-6 lg:px-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
            <img 
              src="https://picsum.photos/seed/photographer/1000/1333" 
              alt="The Author"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-col gap-8"
        >
          <h2 className="font-display text-7xl uppercase tracking-tighter">La Visionaria</h2>
          <div className="space-y-6 text-lg text-white/70 font-light leading-relaxed">
            <p>
              Nacida en la intersección de la luz y la sombra, Maisse ha pasado más de dos décadas 
              documentando los hilos invisibles que conectan a la humanidad con su entorno.
            </p>
            <p>
              Su trabajo se caracteriza por una estética minimalista que elimina lo superfluo, 
              dejando solo el núcleo emocional puro del sujeto. Cada fotograma es una elección 
              deliberada, una conversación silenciosa entre el observador y lo observado.
            </p>
            <p>
              Esta galería no es un mercado, sino un santuario para los ojos. Es una invitación 
              a bajar el ritmo, a respirar y a ver el mundo como una serie de obras maestras 
              monumentales y fugaces.
            </p>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex gap-12">
            <div>
              <span className="block font-mono text-[10px] uppercase text-accent mb-2">Exposiciones</span>
              <span className="text-2xl font-display uppercase">42 Globales</span>
            </div>
            <div>
              <span className="block font-mono text-[10px] uppercase text-accent mb-2">Premios</span>
              <span className="text-2xl font-display uppercase">12 Honores</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
