import { clamp, easeOutCubic } from '@/lib/math';

interface Origin {
  /** Viewport units (vw / vh): where the color burst starts. */
  x: number;
  y: number;
}

/** Fraction of the viewport a section travels while its color takes over. */
const WIPE_DISTANCE = 0.42;
/** Covers the viewport from any origin. */
const FULL_RADIUS_VMAX = 150;
const ACTIVE_FROM = 0.55;

/**
 * Each chapter has a fixed full-screen color layer. As a chapter scrolls in, its layer
 * opens as a circle from `origin` (the persona) until it covers the viewport.
 */
export function createWorlds(layers: HTMLElement[], sections: HTMLElement[]) {
  /** Returns the index of the chapter whose color currently dominates. */
  function update(origin: Origin, reducedMotion: boolean): number {
    const viewport = window.innerHeight;
    let active = 0;

    sections.forEach((section, index) => {
      const layer = layers[index];
      if (!layer || index === 0) return; // the first world is the page's base color

      let progress = clamp((viewport - section.getBoundingClientRect().top) / (viewport * WIPE_DISTANCE));
      if (reducedMotion) progress = progress > 0.5 ? 1 : 0;

      const radius = easeOutCubic(progress) * FULL_RADIUS_VMAX;
      layer.style.clipPath = `circle(${radius.toFixed(1)}vmax at ${origin.x.toFixed(1)}vw ${origin.y.toFixed(1)}vh)`;
      if (progress > ACTIVE_FROM) active = index;
    });

    return active;
  }

  return { update };
}
