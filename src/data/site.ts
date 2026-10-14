import type { Localized } from '@/i18n';

export const site = {
  name: 'Aliné Silva',
  /** Spellings people may type into a search box. */
  alternateNames: ['Aline Silva'],
  shortName: 'Aliné',
  role: {
    es: 'Programadora web y desarrolladora front-end',
    en: 'Front-end web developer',
  },
  title: {
    es: 'Aliné Silva — Programadora web y desarrolladora front-end en Corrientes',
    en: 'Aliné Silva — Front-end web developer in Corrientes, Argentina',
  },
  description: {
    es: 'Aliné Silva, programadora web y desarrolladora front-end en Corrientes, Argentina. Desarrollo de sitios web con identidad, motion con intención y atención al detalle.',
    en: 'Aliné Silva is a front-end web developer in Corrientes, Argentina, building websites with identity, purposeful motion and attention to detail.',
  },
  email: 'alejandraalinesilva67@gmail.com',
  links: {
    github: 'https://github.com/alinesilmer',
    linkedin: 'https://www.linkedin.com/in/aalin%C3%A9-silva',
  },
  cv: {
    href: '/cv/aline-silva-cv.png',
    filename: 'CV-Aline-Silva.png',
  },
} as const;

export interface TimelineEntry {
  when: Localized;
  what: Localized;
  where: string;
}

export const education: TimelineEntry[] = [
  {
    when: { es: '2025', en: '2025' },
    what: { es: 'Técnica Universitaria en Programación', en: 'University Technician in Programming' },
    where: 'Universidad Tecnológica Nacional',
  },
  {
    when: { es: '2025', en: '2025' },
    what: { es: 'Licenciatura en Psicología', en: 'Degree in Psychology' },
    where: 'Universidad de la Cuenca del Plata',
  },
  {
    when: { es: 'Actualmente', en: 'Currently' },
    what: { es: 'Tecnología, diseño y soluciones digitales', en: 'Technology, design and digital solutions' },
    where: 'Colegio Médico de Corrientes',
  },
];

export interface Skill {
  area: Localized;
  items: Localized<string[]>;
}

export const skills: Skill[] = [
  {
    area: { es: 'Interfaces', en: 'Interfaces' },
    items: {
      es: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Tailwind'],
      en: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Tailwind'],
    },
  },
  {
    area: { es: 'Motion', en: 'Motion' },
    items: {
      es: ['Scroll interactions', 'CSS Animations', 'Microinteracciones', 'Transiciones'],
      en: ['Scroll interactions', 'CSS Animations', 'Microinteractions', 'Transitions'],
    },
  },
  {
    area: { es: 'Accesibilidad', en: 'Accessibility' },
    items: {
      es: ['Jerarquía clara', 'Contraste', 'Legibilidad', 'Navegación intuitiva'],
      en: ['Clear hierarchy', 'Contrast', 'Legibility', 'Intuitive navigation'],
    },
  },
  {
    area: { es: 'Rendimiento', en: 'Performance' },
    items: {
      es: ['WebP', 'Optimización de recursos', 'Código liviano', 'Carga eficiente'],
      en: ['WebP', 'Asset optimization', 'Lightweight code', 'Efficient loading'],
    },
  },
  {
    area: { es: 'Herramientas', en: 'Tools' },
    items: {
      es: ['Git', 'GitHub', 'Vercel', 'Firebase', 'SQL'],
      en: ['Git', 'GitHub', 'Vercel', 'Firebase', 'SQL'],
    },
  },
];
