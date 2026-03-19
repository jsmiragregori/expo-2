import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../i18n';
import { LanguageSelector } from './LanguageSelector';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight - 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: t.nav.galeria, href: '#rooms' },
    { name: t.nav.manifiesto, href: '#manifesto' },
    { name: t.nav.contacto, href: '#contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 w-full z-50 px-6 lg:px-12 py-6 flex justify-between items-center mix-blend-difference"
      >
        <a href="#" className="font-display text-2xl uppercase tracking-tighter">Maisse</a>
        <div className="flex items-center gap-8">
          <div className="hidden md:block">
            <LanguageSelector />
          </div>
          <button 
            onClick={() => setIsOpen(true)}
            className="p-3 hover:opacity-70 transition-opacity min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Abrir menú de navegación"
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 lg:top-12 lg:right-12 p-3 hover:rotate-90 transition-transform duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Cerrar menú de navegación"
            >
              <X size={32} />
            </button>
            
            <div className="absolute bottom-12 md:hidden">
              <LanguageSelector />
            </div>

            <ul className="flex flex-col items-center gap-8">
              {menuItems.map((item, i) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <a 
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="font-display text-6xl lg:text-8xl uppercase tracking-tighter hover:text-accent transition-colors"
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
