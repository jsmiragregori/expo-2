import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface Props {
  imageUrl: string | null;
  altText: string;
  onClose: () => void;
}

export const Lightbox: React.FC<Props> = ({ imageUrl, altText, onClose }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    if (imageUrl) document.body.style.overflow = 'hidden';
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [imageUrl, onClose]);

  return (
    <AnimatePresence>
      {imageUrl && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4 lg:p-12 cursor-zoom-out"
          onClick={onClose}
        >
          <button 
            onClick={onClose}
            aria-label="Cerrar imagen"
            className="absolute top-6 right-6 lg:top-12 lg:right-12 p-4 text-white hover:text-accent transition-colors mix-blend-difference focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent z-[201] min-w-[44px] min-h-[44px] flex items-center justify-center"
          >
            <X size={32} />
          </button>
          <motion.img
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            src={imageUrl}
            alt={altText}
            className="max-w-full max-h-full object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            referrerPolicy="no-referrer"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
