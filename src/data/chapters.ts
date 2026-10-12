/**
 * A chapter is one full-screen color world. Each one says which color it floods the
 * viewport with and where the persona sits (and which drawing she shows) while it is centered.
 */
export type ColorToken = 'ink' | 'paper' | 'red' | 'green' | 'blue' | 'pink' | 'orange';

export interface PersonaPlacement {
  /** Center of the persona in viewport units (vw / vh). */
  x: number;
  y: number;
  scale: number;
}

export interface PersonaKey extends PersonaPlacement {
  /** Index of the drawing in `Persona.astro`; fractions crossfade between two. */
  frame: number;
  /** Lean in degrees. */
  tilt: number;
  /** Placement override for phones. */
  phone: PersonaPlacement;
}

export interface Chapter {
  id: string;
  bg: ColorToken;
  fg: ColorToken;
  persona: PersonaKey;
}

/** On phones she rides in the band above each chapter's content. */
const phoneCorner: PersonaPlacement = { x: 82, y: 15, scale: 0.3 };

export const chapters = [
  {
    id: 'inicio',
    bg: 'ink',
    fg: 'paper',
    persona: { frame: 0, tilt: -4, x: 86, y: 54, scale: 0.95, phone: { x: 70, y: 56, scale: 0.6 } },
  },
  {
    id: 'sobre',
    bg: 'red',
    fg: 'paper',
    persona: { frame: 1, tilt: 6, x: 80, y: 50, scale: 0.95, phone: phoneCorner },
  },
  {
    id: 'tecnico',
    bg: 'green',
    fg: 'paper',
    persona: { frame: 2, tilt: 0, x: 20, y: 50, scale: 0.95, phone: phoneCorner },
  },
  {
    id: 'proyectos',
    bg: 'blue',
    fg: 'paper',
    persona: { frame: 3, tilt: -6, x: 92, y: 48, scale: 0.62, phone: phoneCorner },
  },
  {
    id: 'contacto',
    bg: 'orange', // trying orange; was 'pink'
    fg: 'paper',
    // Her feet meet the footer rule (82vh): center = 82vh minus the drawing's leg reach.
    persona: { frame: 4, tilt: 0, x: 82, y: 52, scale: 1, phone: { x: 84, y: 67, scale: 0.5 } },
  },
] as const satisfies readonly Chapter[];

export type ChapterId = (typeof chapters)[number]['id'];

export function getChapter(id: ChapterId): Chapter {
  const chapter = chapters.find((c) => c.id === id);
  if (!chapter) throw new Error(`Unknown chapter: ${id}`);
  return chapter;
}
