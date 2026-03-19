export interface Photo {
  id: string;
  url: string;
  title: string;
  description: string;
  year: string;
  audioUrl?: string; // Optional audio guide
  isMasterpiece?: boolean; // If true, display larger
}

export interface Room {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  photos: Photo[];
}

export const EXPOSITION_MANIFESTO = {
  title: "El Instante Suspendido",
  text: "Vivimos en la tiranía de la inmediatez. Esta exposición es un acto de rebeldía: una invitación a detenernos. A través de la lente, transformamos lo efímero en eterno, buscando el núcleo emocional puro en el caos de la vida moderna. Respira. Estás a punto de adentrarte en el instante suspendido."
};

export const GALLERY_DATA: Room[] = [
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
];
