import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Hero } from './components/Hero';
import { RoomSection } from './components/RoomSection';
import { Author } from './components/Author';
import { Navigation } from './components/Navigation';
import { Manifesto } from './components/Manifesto';
import { CuratorialPause } from './components/CuratorialPause';
import { Lightbox } from './components/Lightbox';
import { useLanguage } from './i18n';

export default function App() {
  const [lightbox, setLightbox] = useState<{ url: string; title: string } | null>(null);
  const { t } = useLanguage();

  return (
    <div className="relative bg-bg selection:bg-accent selection:text-white">
      <Navigation />
      
      <main>
        <Hero />
        
        <Manifesto title={t.manifesto.title} text={t.manifesto.text} label={t.manifesto.label} />
        
        <div id="rooms" className="relative z-10">
          {t.rooms.map((room, index) => (
            <React.Fragment key={room.id}>
              <RoomSection room={room} index={index} onPhotoClick={(url, title) => setLightbox({ url, title })} />
              {index === 0 && <CuratorialPause text={t.pauses.pause1} />}
              {index === 1 && <CuratorialPause text={t.pauses.pause2} />}
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
            <span className="font-mono text-xs text-accent uppercase tracking-widest mb-4 block">{t.contact.label}</span>
            <h2 className="font-display text-5xl lg:text-7xl uppercase mb-8">{t.contact.title}</h2>
            <p className="text-white/50 mb-12 text-lg">
              {t.contact.description}
            </p>
            <a 
              href="mailto:hello@maisse.art"
              aria-label={t.contact.aria_button}
              className="inline-block px-12 py-5 border border-white/20 font-display uppercase tracking-widest hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent transition-all duration-500 rounded-full"
            >
              {t.contact.button}
            </a>
          </motion.div>
        </section>
      </main>

      <footer className="py-12 px-6 lg:px-24 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-white/30 font-mono text-[10px] uppercase tracking-widest">
        <div>{t.footer.copy}</div>
        <div className="flex gap-8">
          <a href="#" aria-label="Síguenos en Instagram" className="hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent transition-colors">Instagram</a>
          <a href="#" aria-label="Síguenos en Vimeo" className="hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent transition-colors">Vimeo</a>
          <a href="#" aria-label="Síguenos en Behance" className="hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent transition-colors">Behance</a>
        </div>
        <div>{t.footer.designed}</div>
      </footer>

      <Lightbox 
        imageUrl={lightbox?.url || null} 
        altText={lightbox?.title || ''} 
        onClose={() => setLightbox(null)} 
      />
    </div>
  );
}
