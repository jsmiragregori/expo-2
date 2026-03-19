export type Language = 'es' | 'ca' | 'en';

export const translations = {
  es: {
    nav: {
      galeria: 'La Galería',
      manifiesto: 'Manifiesto',
      contacto: 'Contacto',
      lang_es: 'ES',
      lang_ca: 'VAL',
      lang_en: 'EN',
    },
    hero: {
      title: 'Somni Vertical',
      subtitle: 'Una exploración fotográfica de la suspensión temporal',
      scroll: 'Desliza para Adentrarte'
    },
    manifesto: {
      title: "El Instante Suspendido",
      text: "Vivimos en la tiranía de la inmediatez. Esta exposición es un acto de rebeldía: una invitación a detenernos. A través de la lente, transformamos lo efímero en eterno, buscando el núcleo emocional puro en el caos de la vida moderna. Respira. Estás a punto de adentrarte en el instante suspendido.",
      label: "Manifiesto"
    },
    pauses: {
      pause1: "Observa el vacío, no como ausencia, sino como el lienzo donde ocurre la vida.",
      pause2: "La naturaleza no se apresura, y sin embargo, todo se logra."
    },
    rooms: [
      {
        id: "sala-1-silencio",
        title: "Sala I",
        subtitle: "El Silencio Arquitectónico",
        description: "Un estudio sobre la quietud y el vacío dentro de las metrópolis. Espacios diseñados para el ruido, capturados en absoluta soledad.",
        photos: [
          {
            id: "silencio-1",
            url: "https://picsum.photos/seed/ark1/1200/1600",
            title: "El Cruce Olvidado",
            description: "El cemento se encuentra con el cielo en una intersección vacía al amanecer.",
            year: "2024",
            isMasterpiece: true,
            audioUrl: "/audio/20260308-WA0017.mp3"
          },
          {
            id: "silencio-2",
            url: "https://picsum.photos/seed/ark2/1200/1600",
            title: "Gigantes de Cristal",
            description: "La fragilidad de nuestros monumentos económicos modernos.",
            year: "2023"
          },
          {
            id: "silencio-3",
            url: "https://picsum.photos/seed/ark3/1200/1600",
            title: "Lluvia de Neón",
            description: "El asfalto como lienzo para la luz artificial de una ciudad que duerme.",
            year: "2024"
          }
        ]
      },
      {
        id: "sala-2-naturaleza",
        title: "Sala II",
        subtitle: "El Pulso Orgánico",
        description: "Paisajes etéreos que desdibujan la línea entre nuestro plano físico y el reino de los sueños subconscientes.",
        photos: [
          {
            id: "naturaleza-1",
            url: "https://picsum.photos/seed/nat1/1200/1600",
            title: "Respiración del Bosque",
            description: "Niebla matinal filtrándose a través de árboles centenarios en el norte.",
            year: "2023",
            isMasterpiece: true
          },
          {
            id: "naturaleza-2",
            url: "https://picsum.photos/seed/nat2/1200/1600",
            title: "Espejo Negro",
            description: "Un lago en calma reflejando la inmensidad de un cielo sin estrellas.",
            year: "2024"
          }
        ]
      },
      {
        id: "sala-3-identidad",
        title: "Sala III",
        subtitle: "Mapas de Piel",
        description: "El rostro humano como un territorio inexplorado. Cada arruga y mirada cuenta una historia de resiliencia íntima.",
        photos: [
          {
            id: "identidad-1",
            url: "https://picsum.photos/seed/face1/1200/1600",
            title: "El Artesano",
            description: "Manos cansadas que han dado forma a la materia durante cinco décadas.",
            year: "2022",
            audioUrl: "/audio/20260308-WA0017.mp3"
          },
          {
            id: "identidad-2",
            url: "https://picsum.photos/seed/face2/1200/1600",
            title: "Contemplación",
            description: "El instante exacto antes de tomar una decisión que cambiará una vida.",
            year: "2024",
            isMasterpiece: true
          }
        ]
      }
    ],
    author: {
      name: "Maisse",
      title: "La Mirada de Maisse",
      bio: "Soy Maria José Lozano. Para mí, Benidorm no es solo una ciudad de rascacielos; es mi casa y el lugar donde he aprendido a mirar el cielo con fascinación. Soy docente y una mente inquieta, y la fotografía es mi lenguaje para celebrar la vida. Lo que empezó como una pasión me ha llevado a ganar un Premio Sony World Photography y a ver mis imágenes en revistas de Nueva York, pero mi mayor ilusión es compartir hoy esta mirada contigo."
    },
    contact: {
      label: "Consultas",
      title: "Conectemos",
      description: "Para colaboraciones, visitas privadas o diálogo artístico.",
      button: "Enviar un Mensaje",
      aria_button: "Enviar un Mensaje a la Galería"
    },
    footer: {
      copy: "© 2026 Maisse - Somni Vertical",
      designed: "Diseñado para el Alma"
    }
  },
  ca: {
    nav: {
      galeria: 'La Galeria',
      manifiesto: 'Manifest',
      contacto: 'Contacte',
      lang_es: 'ES',
      lang_ca: 'VAL',
      lang_en: 'EN',
    },
    hero: {
      title: 'Somni Vertical',
      subtitle: 'Una exploració fotogràfica de la suspensió temporal',
      scroll: 'Llisca per Endinsar-te'
    },
    manifesto: {
      title: "L'Instant Suspés",
      text: "Vivim en la tirania de la immediatesa. Aquesta exposició és un acte de rebel·lia: una invitació a detindre'ns. A través de la lent, transformem l'efímer en etern, buscant el nucli emocional pur en el caos de la vida moderna. Respira. Estàs a punt d'endinsar-te en l'instant suspés.",
      label: "Manifest"
    },
    pauses: {
      pause1: "Observa el buit, no com absència, sinó com el llenç on ocorre la vida.",
      pause2: "La naturalesa no s'apressa, i no obstant això, tot s'aconseguix."
    },
    rooms: [
      {
        id: "sala-1-silencio",
        title: "Sala I",
        subtitle: "El Silenci Arquitectònic",
        description: "Un estudi sobre la quietud i el buit dins de les metròpolis. Espais dissenyats per al soroll, capturats en absoluta soledat.",
        photos: [
          {
            id: "silencio-1",
            url: "https://picsum.photos/seed/ark1/1200/1600",
            title: "L'Encreuament Oblidat",
            description: "El ciment es troba amb el cel en una intersecció buida a l'alba.",
            year: "2024",
            isMasterpiece: true,
            audioUrl: "/audio/20260308-WA0017.mp3"
          },
          {
            id: "silencio-2",
            url: "https://picsum.photos/seed/ark2/1200/1600",
            title: "Gegants de Cristall",
            description: "La fragilitat dels nostres monuments econòmics moderns.",
            year: "2023"
          },
          {
            id: "silencio-3",
            url: "https://picsum.photos/seed/ark3/1200/1600",
            title: "Pluja de Neó",
            description: "L'asfalt com a llenç per a la llum artificial d'una ciutat que dorm.",
            year: "2024"
          }
        ]
      },
      {
        id: "sala-2-naturaleza",
        title: "Sala II",
        subtitle: "El Pols Orgànic",
        description: "Paisatges eteris que desdibuixen la línia entre el nostre pla físic i el regne dels somnis subconscients.",
        photos: [
          {
            id: "naturaleza-1",
            url: "https://picsum.photos/seed/nat1/1200/1600",
            title: "Respiració del Bosc",
            description: "Boira matinal filtrant-se a través d'arbres centenaris en el nord.",
            year: "2023",
            isMasterpiece: true
          },
          {
            id: "naturaleza-2",
            url: "https://picsum.photos/seed/nat2/1200/1600",
            title: "Espill Negre",
            description: "Un llac en calma reflectint la immensitat d'un cel sense estreles.",
            year: "2024"
          }
        ]
      },
      {
        id: "sala-3-identidad",
        title: "Sala III",
        subtitle: "Mapes de Pell",
        description: "El rostre humà com un territori inexplorat. Cada arruga i mirada conta una història de resiliència íntima.",
        photos: [
          {
            id: "identidad-1",
            url: "https://picsum.photos/seed/face1/1200/1600",
            title: "L'Artesà",
            description: "Mans cansades que han donat forma a la matèria durant cinc dècades.",
            year: "2022",
            audioUrl: "/audio/20260308-WA0017.mp3"
          },
          {
            id: "identidad-2",
            url: "https://picsum.photos/seed/face2/1200/1600",
            title: "Contemplació",
            description: "L'instant exacte abans de prendre una decisió que canviarà una vida.",
            year: "2024",
            isMasterpiece: true
          }
        ]
      }
    ],
    author: {
      name: "Maisse",
      title: "La Mirada de Maisse",
      bio: "Sóc Maria José Lozano. Per a mi, Benidorm no és només una ciutat de gratacels; és casa meua i el lloc on he après a mirar el cel amb fascinació. Soc docent i una ment inquieta, i la fotografia és el meu llenguatge per a celebrar la vida. El que va començar com una passió m'ha portat a guanyar un Premi Sony World Photography i a veure les meues imatges en revistes de Nova York, però la meua major il·lusió és compartir avui aquesta mirada amb tu."
    },
    contact: {
      label: "Consultes",
      title: "Connectem",
      description: "Per a col·laboracions, visites privades o diàleg artístic.",
      button: "Enviar un Missatge",
      aria_button: "Enviar un Missatge a la Galeria"
    },
    footer: {
      copy: "© 2026 Maisse - Somni Vertical",
      designed: "Dissenyat per a l'Ànima"
    }
  },
  en: {
    nav: {
      galeria: 'The Gallery',
      manifiesto: 'Manifesto',
      contacto: 'Contact',
      lang_es: 'ES',
      lang_ca: 'VAL',
      lang_en: 'EN',
    },
    hero: {
      title: 'Somni Vertical',
      subtitle: 'A photographic exploration of temporal suspension',
      scroll: 'Scroll to Immerse'
    },
    manifesto: {
      title: "The Suspended Instant",
      text: "We live in the tyranny of immediacy. This exhibition is an act of rebellion: an invitation to stop. Through the lens, we transform the ephemeral into the eternal, seeking the pure emotional core in the chaos of modern life. Breathe. You are about to enter the suspended instant.",
      label: "Manifesto"
    },
    pauses: {
      pause1: "Observe the void, not as absence, but as the canvas where life occurs.",
      pause2: "Nature does not hurry, yet everything is accomplished."
    },
    rooms: [
      {
        id: "sala-1-silencio",
        title: "Room I",
        subtitle: "Architectural Silence",
        description: "A study of stillness and emptiness within the metropolis. Spaces designed for noise, captured in absolute solitude.",
        photos: [
          {
            id: "silencio-1",
            url: "https://picsum.photos/seed/ark1/1200/1600",
            title: "The Forgotten Crossing",
            description: "Concrete meets the sky at an empty intersection at dawn.",
            year: "2024",
            isMasterpiece: true,
            audioUrl: "/audio/20260308-WA0017.mp3"
          },
          {
            id: "silencio-2",
            url: "https://picsum.photos/seed/ark2/1200/1600",
            title: "Glass Giants",
            description: "The fragility of our modern economic monuments.",
            year: "2023"
          },
          {
            id: "silencio-3",
            url: "https://picsum.photos/seed/ark3/1200/1600",
            title: "Neon Rain",
            description: "Asphalt as a canvas for the artificial light of a sleeping city.",
            year: "2024"
          }
        ]
      },
      {
        id: "sala-2-naturaleza",
        title: "Room II",
        subtitle: "The Organic Pulse",
        description: "Ethereal landscapes that blur the line between our physical plane and the realm of subconscious dreams.",
        photos: [
          {
            id: "naturaleza-1",
            url: "https://picsum.photos/seed/nat1/1200/1600",
            title: "Breath of the Forest",
            description: "Morning mist filtering through centuries-old trees in the north.",
            year: "2023",
            isMasterpiece: true
          },
          {
            id: "naturaleza-2",
            url: "https://picsum.photos/seed/nat2/1200/1600",
            title: "Black Mirror",
            description: "A calm lake reflecting the immensity of a starless sky.",
            year: "2024"
          }
        ]
      },
      {
        id: "sala-3-identidad",
        title: "Room III",
        subtitle: "Skin Maps",
        description: "The human face as an unexplored territory. Every wrinkle and glance tells a story of intimate resilience.",
        photos: [
          {
            id: "identidad-1",
            url: "https://picsum.photos/seed/face1/1200/1600",
            title: "The Artisan",
            description: "Tired hands that have shaped matter for five decades.",
            year: "2022",
            audioUrl: "/audio/20260308-WA0017.mp3"
          },
          {
            id: "identidad-2",
            url: "https://picsum.photos/seed/face2/1200/1600",
            title: "Contemplation",
            description: "The exact moment before making a life-changing decision.",
            year: "2024",
            isMasterpiece: true
          }
        ]
      }
    ],
    author: {
      name: "Maisse",
      title: "Maisse's Gaze",
      bio: "I am Maria José Lozano. To me, Benidorm is not just a city of skyscrapers; it is my home and the place where I learned to look at the sky with fascination. I am a teacher and a restless mind, and photography is my language to celebrate life. What began as a passion led me to win a Sony World Photography Award and to see my images in New York magazines, but my greatest joy is sharing this vision with you today."
    },
    contact: {
      label: "Inquiries",
      title: "Let's Connect",
      description: "For collaborations, private viewings, or artistic dialogue.",
      button: "Send a Message",
      aria_button: "Send a Message to the Gallery"
    },
    footer: {
      copy: "© 2026 Maisse - Somni Vertical",
      designed: "Designed for the Soul"
    }
  }
};
