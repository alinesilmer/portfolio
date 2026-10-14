import { clamp } from '@/lib/math';
import { createPersona } from './persona';
import { onScrollFrame } from './scroll-frame';
import { createWorlds } from './worlds';

/**
 * Wires the scroll loop to the things that follow it: the persona, the color worlds
 * that burst out of her, the nav/progress color and the fall speed (--fall).
 */
function initChapters(): void {
  const root = document.documentElement;
  const sections = [...document.querySelectorAll<HTMLElement>('[data-chapter]')];
  const layers = [...document.querySelectorAll<HTMLElement>('[data-world]')];
  const personaEl = document.querySelector<HTMLElement>('[data-persona-root]');
  const progress = document.querySelector<HTMLElement>('[data-scroll-progress]');
  if (!sections.length || !personaEl) return;

  const persona = createPersona(personaEl, sections);
  const worlds = createWorlds(layers, sections);
  let active = -1;

  onScrollFrame({
    measure: persona.measure,
    render(frame) {
      const pose = persona.update(frame);
      if (!pose) return;

      const now = worlds.update(pose, frame.reducedMotion);
      if (now !== active) {
        active = now;
        root.style.setProperty('--nav-color', `var(--color-${sections[now]?.dataset.fg ?? 'paper'})`);
        // Only the active world and its neighbours keep their living color running.
        layers.forEach((layer, index) => layer.toggleAttribute('data-live', Math.abs(index - now) <= 1));
      }

      // How hard the page is falling: background currents swell and headings stretch with it.
      root.style.setProperty('--fall', frame.velocity.toFixed(3));

      if (progress) {
        const max = root.scrollHeight - window.innerHeight;
        progress.style.transform = `scaleX(${max > 0 ? clamp(frame.y / max).toFixed(4) : 0})`;
      }
    },
  });
}

initChapters();
