import type { Lang } from './index';

/** Interface copy. Content that belongs to a project or a skill lives with its data in `src/data/`. */
export const ui = {
  es: {
    skipLink: 'Saltar al contenido',
    nav: { label: 'Principal', home: 'Volver al inicio', about: 'Sobre mí', projects: 'Proyectos', contact: 'Contacto' },
    switchTo: 'Ver el sitio en inglés',
    hero: { tagline: 'Programadora web', lines: ['Construyo', 'interfaces', 'vivas.'], hint: 'Desliza para caer ↓' },
    about: {
      kicker: 'Sobre mí',
      statement: 'Todo proyecto tiene algo propio. Disfruto encontrarlo.',
      lede: 'Soy programadora y psicóloga, pero lo que más me mueve es crear. Me gusta descubrir qué hace especial a un proyecto, qué quiere transmitir y cómo llevar eso a una experiencia que se sienta propia.',
      timeline: 'Formación y trabajo actual',
    },
    technical: {
      kicker: 'Lo técnico',
      title: 'Revisión de equipo',
      lede: 'Disfruto trabajar cerca de las ideas: probar, ajustar, simplificar y encontrar esa versión que no solo funciona, sino que se siente correcta. Soy curiosa, autodidacta y muy detallista.',
      ready: 'Listo',
      cv: 'Ver CV',
    },
    cv: {
      question: '¿Querés descargar mi CV?',
      download: 'Descargar ↓',
      close: 'Cerrar',
      alt: (name: string, role: string) => `CV de ${name}: ${role}, con experiencia, formación y herramientas`,
    },
    projects: {
      kicker: 'Proyectos · elige una pestaña',
      title: 'Proyectos',
      role: 'Rol',
      stack: 'Stack',
      year: 'Año',
      preview: (name: string) => `Vista previa de ${name}`,
      open: (name: string) => `Abrir ${name} en una pestaña nueva`,
      visit: 'Visitar sitio ↗',
    },
    contact: { kicker: 'Contacto', title: ['Trabajemos', 'juntos.'], copy: 'copiar', copied: 'Copiado' },
    footer: { top: 'Volver arriba ↑' },
  },
  en: {
    skipLink: 'Skip to content',
    nav: { label: 'Main', home: 'Back to top', about: 'About me', projects: 'Projects', contact: 'Contact' },
    switchTo: 'Ver el sitio en español',
    hero: { tagline: 'Web developer', lines: ['I build', 'living', 'interfaces.'], hint: 'Scroll to fall ↓' },
    about: {
      kicker: 'About me',
      statement: 'Every project has something of its own. I love finding it.',
      lede: 'I’m a programmer and a psychologist, but what drives me most is creating. I like discovering what makes a project special, what it wants to say, and how to turn that into an experience that feels like its own.',
      timeline: 'Education and current work',
    },
    technical: {
      kicker: 'The technical side',
      title: 'Gear check',
      lede: 'I enjoy working close to ideas: testing, adjusting, simplifying and finding the version that doesn’t just work, but feels right. I’m curious, self-taught and very detail-oriented.',
      ready: 'Ready',
      cv: 'View CV',
    },
    cv: {
      question: 'Want to download my CV?',
      download: 'Download ↓',
      close: 'Close',
      alt: (name: string, role: string) => `CV of ${name}: ${role}, with experience, education and tools`,
    },
    projects: {
      kicker: 'Projects · pick a tab',
      title: 'Projects',
      role: 'Role',
      stack: 'Stack',
      year: 'Year',
      preview: (name: string) => `Preview of ${name}`,
      open: (name: string) => `Open ${name} in a new tab`,
      visit: 'Visit site ↗',
    },
    contact: { kicker: 'Contact', title: ['Let’s work', 'together.'], copy: 'copy', copied: 'Copied' },
    footer: { top: 'Back to top ↑' },
  },
} satisfies Record<Lang, unknown>;

export function useTranslations(lang: Lang) {
  return ui[lang];
}
