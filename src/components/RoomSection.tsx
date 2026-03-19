import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Play, Pause } from 'lucide-react';
import { Room } from '../constants';

interface RoomSectionProps {
  room: Room;
  index: number;
  onPhotoClick: (url: string, title: string) => void;
}

export const RoomSection: React.FC<RoomSectionProps> = ({ room, index, onPhotoClick }) => {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleAudio = (e: React.MouseEvent, photoId: string, url: string) => {
    e.stopPropagation();

    if (playingId === photoId) {
      audioRef.current?.pause();
      setPlayingId(null);
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      const audio = new Audio(url);
      audio.play();
      audio.onended = () => setPlayingId(null);
      audioRef.current = audio;
      setPlayingId(photoId);
    }
  };
  return (
    <section id={room.id} className="min-h-screen py-24 px-6 lg:px-24 flex flex-col justify-center border-t border-white/5">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="font-mono text-xs text-accent mb-4 block">Sala 0{index + 1}</span>
          <h2 className="font-display text-6xl lg:text-8xl uppercase mb-6 tracking-tighter">
            {room.title}
          </h2>
          <p className="max-w-xl text-lg text-white/60 font-light leading-relaxed">
            {room.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 grid-flow-row-dense">
          {room.photos.map((photo, pIndex) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: pIndex * 0.1 }}
              className={`group cursor-crosshair focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent ${photo.isMasterpiece ? 'md:col-span-2' : ''}`}
              tabIndex={0}
              role="figure"
              aria-label={`Obra: ${photo.title}, año ${photo.year}. ${photo.description}`}
              onClick={() => onPhotoClick(photo.url, photo.title)}
              onKeyDown={(e) => e.key === 'Enter' && onPhotoClick(photo.url, photo.title)}
            >
              <div className={`overflow-hidden bg-zinc-900 mb-4 relative rounded-sm ${photo.isMasterpiece ? 'aspect-[16/9]' : 'aspect-[4/5]'}`}>
                <img
                  src={photo.url}
                  alt={photo.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-focus-visible:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {photo.audioUrl && (
                  <button 
                    onClick={(e) => toggleAudio(e, photo.id, photo.audioUrl!)}
                    aria-label={playingId === photo.id ? "Pausar audioguía" : "Reproducir audioguía"}
                    className="absolute top-4 right-4 z-10 bg-black/60 rounded-full p-2 backdrop-blur-sm border border-white/20 flex items-center gap-2 hover:bg-black/80 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
                  >
                    {playingId === photo.id ? <Pause size={14} className="text-white fill-white" /> : <Play size={14} className="text-white fill-white" />}
                    <span className="text-white text-[10px] font-mono pr-1 tracking-widest uppercase md:inline hidden">Audioguía</span>
                  </button>
                )}

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <p className="text-sm font-mono tracking-wider">{photo.year}</p>
                </div>
              </div>
              <h3 className="text-xl font-medium mb-1">{photo.title}</h3>
              <p className="text-white/40 text-sm italic">{photo.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
