export const site = {
  name: 'Aliné Silva',
  shortName: 'Aliné',
  role: 'Creative developer / Front-end',
  title: 'Aliné Silva — Creative developer front-end',
  description:
    'Portfolio de Aliné Silva, desarrolladora front-end en Corrientes, Argentina. Interfaces con identidad, motion con intención y atención al detalle.',
  locale: 'es_AR',
  lang: 'es',
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
  when: string;
  what: string;
  where: string;
}

export const education: TimelineEntry[] = [
  { when: '2025', what: 'Técnica Universitaria en Programación', where: 'Universidad Tecnológica Nacional' },
  { when: '2025', what: 'Licenciatura en Psicología', where: 'Universidad de la Cuenca del Plata' },
  { when: 'Actualmente', what: 'Tecnología, diseño y soluciones digitales', where: 'Colegio Médico de Corrientes' },
];

export interface Skill {
  area: string;
  items: string[];
}

export const skills: Skill[] = [
  { area: 'Interfaces', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Tailwind'] },
  { area: 'Motion', items: ['Scroll interactions', 'CSS Animations', 'Microinteracciones', 'Transiciones'] },
  { area: 'Accesibilidad', items: ['Jerarquía clara', 'Contraste', 'Legibilidad', 'Navegación intuitiva'] },
  { area: 'Rendimiento', items: ['WebP', 'Optimización de recursos', 'Código liviano', 'Carga eficiente'] },
  { area: 'Herramientas', items: ['Git', 'GitHub', 'Vercel', 'Firebase', 'SQL'] },
];
