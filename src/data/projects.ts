import type { ImageMetadata } from 'astro';

import colegioMedico from '@/assets/projects/colegio-medico.webp';
// import franky from '@/assets/projects/franky.webp';
import hobbyst from '@/assets/projects/hobbyst.webp';
import hz1312 from '@/assets/projects/1312hz.webp';
import akali from '@/assets/projects/akali.webp';
import avalon from '@/assets/projects/avalon-v2.webp';
import lavalle from '@/assets/projects/lavalle.webp';
// import look from '@/assets/projects/look.webp';
import medisystem from '@/assets/projects/medisystem.webp';
// import zion from '@/assets/projects/zion.webp';
import type { Localized } from '@/i18n';

export interface Project {
  name: string;
  url: string;
  image: ImageMetadata;
  description: Localized;
  role?: Localized;
  stack?: string;
  year?: string;
}

/** Shown in this order, left to right. */
export const projects: Project[] = [
  {
    name: 'Lavalle Odontología',
    url: 'https://lavalleodontologia.vercel.app/',
    image: lavalle,
    description: {
      es: 'Sitio para un consultorio odontológico, con reserva de turnos por WhatsApp.',
      en: 'Site for a dental practice, with appointment booking over WhatsApp.',
    },
  },
  {
    name: 'Avalon',
    url: 'https://avalongabineteestetico.vercel.app/',
    image: avalon,
    description: {
      es: 'Gabinete estético y spa: tratamientos y productos de belleza.',
      en: 'Beauty salon and spa: treatments and beauty products.',
    },
  },
  {
    name: 'Hobbyst',
    url: 'https://hobbyst-demo.vercel.app/',
    image: hobbyst,
    description: {
      es: 'Buscador de personas, profes, lugares y planes creativos en Corrientes.',
      en: 'A finder for creative people, teachers, places and plans in Corrientes.',
    },
  },
  // {
  //   name: 'Look',
  //   url: 'https://pickapp-delta.vercel.app/',
  //   image: look,
  //   description: {
  //     es: 'Subís una imagen y encontrás productos parecidos a lo que ves.',
  //     en: 'Upload an image and find products like the ones you see.',
  //   },
  // },
  {
    name: 'MediSystem',
    url: 'https://system-doctors.vercel.app/',
    image: medisystem,
    description: {
      es: 'Sistema de gestión para consultorios médicos.',
      en: 'Management system for medical practices.',
    },
  },
  {
    name: 'Colegio Médico de Corrientes',
    url: 'https://www.colegiomedicocorrientes.com/',
    image: colegioMedico,
    description: {
      es: 'Sitio institucional con servicios, convenios y gestión para médicos.',
      en: 'Institutional site with services, agreements and tools for doctors.',
    },
  },
  {
    name: '1312Hz',
    url: 'https://1312hz.vercel.app/',
    image: hz1312,
    description: {
      es: 'Sitio de DJs de música electrónica y experimental: tracks y galería.',
      en: 'Site for electronic and experimental music DJs: tracks and gallery.',
    },
  },
  {
    name: 'Akali Piercings',
    url: 'https://akali-piercings.vercel.app/',
    image: akali,
    description: {
      es: 'Sitio para un estudio de piercings.',
      en: 'Site for a piercing studio.',
    },
  },
  // {
  //   name: 'Franky Store',
  //   url: 'https://franky-store.vercel.app/',
  //   image: franky,
  //   description: {
  //     es: 'Tienda online de Franky Crew.',
  //     en: 'Online store for Franky Crew.',
  //   },
  // },
  // {
  //   name: 'Zion Market',
  //   url: 'https://zion-market-flame.vercel.app/',
  //   image: zion,
  //   description: {
  //     es: 'Tienda online para pedir y retirar o recibir en el día.',
  //     en: 'Online store to order and pick up or get same-day delivery.',
  //   },
  // },
];
