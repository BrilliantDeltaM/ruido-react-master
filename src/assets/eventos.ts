export interface Evento {
    id: number;
    image: string;
    title: string;
    description: string;
    link: string;
    images: string[];
  }
  
  const eventos: Evento[] = [
    {
      id: 1,
      image: "./img/circuitomural/1.webp",
      title: "Circuito del Mural",
      description: "",
      link: "circuito-mural",
      images: [
        '/img/circuitomural/1.webp',
        '/img/circuitomural/2.webp',
        '/img/circuitomural/3.webp',
        '/img/circuitomural/4.webp',
        '/img/circuitomural/5.webp',
        '/img/circuitomural/6.webp',
        '/img/circuitomural/7.webp',
        '/img/circuitomural/8.webp',
        '/img/circuitomural/9.webp',
        '/img/circuitomural/10.webp',
        '/img/circuitomural/11.webp',
        '/img/circuitomural/12.webp',    
      ]
    },
    {
      id: 2,
      image: "./img/circuitomural23/3.webp",
      title: "Corte Circuito 2023",
      description: "Encuentro Internacional de Arte Urbano",
      link: "corte-circuito-2023",
      images: [
        '/img/circuitomural23/1.webp',
        '/img/circuitomural23/2.webp',
        '/img/circuitomural23/3.webp',
        '/img/circuitomural23/4.webp',
        '/img/circuitomural23/5.webp',
        '/img/circuitomural23/6.webp'
      ]
    }
  ];
  
  export default eventos;