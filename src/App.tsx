import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Hero } from './components/Hero';
import { RoomSection } from './components/RoomSection';
import { Author } from './components/Author';
import { Navigation } from './components/Navigation';
import { Manifesto } from './components/Manifesto';
import { CuratorialPause } from './components/CuratorialPause';
import { Lightbox } from './components/Lightbox';
import { GALLERY_DATA, EXPOSITION_MANIFESTO } from './constants';

export default function App() {
  const [lightbox, setLightbox] = useState<{ url: string; title: string } | null>(null);

  return (
    <div className="relative bg-bg selection:bg-accent selection:text-white">
      <Navigation />
      
      <main>
        <Hero />
        
        <Manifesto title={EXPOSITION_MANIFESTO.title} text={EXPOSITION_MANIFESTO.text} />
        
        <div id="rooms" className="relative z-10">
          {GALLERY_DATA.map((room, index) => (
            <React.Fragment key={room.id}>
              <RoomSection room={room} index={index} onPhotoClick={(url, title) => setLightbox({ url, title })} />
              {index === 0 && <CuratorialPause text="Observa el vacío, no como ausencia, sino como el lienzo donde ocurre la vida." />}
              {index === 1 && <CuratorialPause text="La naturaleza no se apresura, y sin embargo, todo se logra." />}
            </React.Fragment>
          ))}
        </div>

        <Author />

        <section id="contact" className="py-32 px-6 text-center border-t border-white/5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <span className="font-mono text-xs text-accent uppercase tracking-widest mb-4 block">Consultas</span>
            <h2 className="font-display text-5xl lg:text-7xl uppercase mb-8">Conectemos</h2>
            <p className="text-white/50 mb-12 text-lg">
              Para colaboraciones, visitas privadas o diálogo artístico.
            </p>
            <a 
              href="mailto:hello@maisse.art"
              aria-label="Enviar un Mensaje a la Galería"
              className="inline-block px-12 py-5 border border-white/20 font-display uppercase tracking-widest hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent transition-all duration-500 rounded-full"
            >
              Enviar un Mensaje
            </a>
          </motion.div>
        </section>
      </main>

      <footer className="py-12 px-6 lg:px-24 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-white/30 font-mono text-[10px] uppercase tracking-widest">
        <div>© 2026 Maisse - Somni Vertical</div>
        <div className="flex gap-8">
          <a href="#" aria-label="Síguenos en Instagram" className="hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent transition-colors">Instagram</a>
          <a href="#" aria-label="Síguenos en Vimeo" className="hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent transition-colors">Vimeo</a>
          <a href="#" aria-label="Síguenos en Behance" className="hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent transition-colors">Behance</a>
        </div>
        <div>Diseñado para el Alma</div>
      </footer>

      <Lightbox 
        imageUrl={lightbox?.url || null} 
        altText={lightbox?.title || ''} 
        onClose={() => setLightbox(null)} 
      />
    </div>
  );
}
