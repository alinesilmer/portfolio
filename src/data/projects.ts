import type { ImageMetadata } from 'astro';

import colegioMedico from '@/assets/projects/colegio-medico.webp';
// import franky from '@/assets/projects/franky.webp';
import hobbyst from '@/assets/projects/hobbyst.webp';
import hz1312 from '@/assets/projects/1312hz.webp';
import akali from '@/assets/projects/akali.webp';
import avalon from '@/assets/projects/avalon-v2.webp';
import lavalle from '@/assets/projects/lavalle.webp';
import look from '@/assets/projects/look.webp';
import medisystem from '@/assets/projects/medisystem.webp';
// import zion from '@/assets/projects/zion.webp';

export interface Project {
  name: string;
  url: string;
  image: ImageMetadata;
  description: string;
  role?: string;
  stack?: string;
  year?: string;
}

/** Shown in this order, left to right. */
export const projects: Project[] = [
  {
    name: 'Lavalle Odontología',
    url: 'https://lavalleodontologia.vercel.app/',
    image: lavalle,
    description: 'Sitio para un consultorio odontológico, con reserva de turnos por WhatsApp.',
  },
  {
    name: 'Avalon',
    url: 'https://avalongabineteestetico.vercel.app/',
    image: avalon,
    description: 'Gabinete estético y spa: tratamientos y productos de belleza.',
  },
  {
    name: 'Hobbyst',
    url: 'https://hobbyst-demo.vercel.app/',
    image: hobbyst,
    description: 'Buscador de personas, profes, lugares y planes creativos en Corrientes.',
  },
  {
    name: 'Look',
    url: 'https://pickapp-delta.vercel.app/',
    image: look,
    description: 'Subís una imagen y encontrás productos parecidos a lo que ves.',
  },
  {
    name: 'MediSystem',
    url: 'https://system-doctors.vercel.app/',
    image: medisystem,
    description: 'Sistema de gestión para consultorios médicos.',
  },
  {
    name: 'Colegio Médico de Corrientes',
    url: 'https://www.colegiomedicocorrientes.com/',
    image: colegioMedico,
    description: 'Sitio institucional con servicios, convenios y gestión para médicos.',
  },
  {
    name: '1312Hz',
    url: 'https://1312hz.vercel.app/',
    image: hz1312,
    description: 'Sitio de DJs de música electrónica y experimental: tracks y galería.',
  },
  {
    name: 'Akali Piercings',
    url: 'https://akali-piercings.vercel.app/',
    image: akali,
    description: 'Sitio para un estudio de piercings.',
  },
  // {
  //   name: 'Franky Store',
  //   url: 'https://franky-store.vercel.app/',
  //   image: franky,
  //   description: 'Tienda online de Franky Crew.',
  // },
  // {
  //   name: 'Zion Market',
  //   url: 'https://zion-market-flame.vercel.app/',
  //   image: zion,
  //   description: 'Tienda online para pedir y retirar o recibir en el día.',
  // },
];
