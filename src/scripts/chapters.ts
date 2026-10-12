import { clamp } from '@/lib/math';
import { createPersona } from './persona';
import { onScrollFrame } from './scroll-frame';
import { createWorlds } from './worlds';

/**
 * Wires the scroll loop to the three things that follow it:
 * the persona, the color worlds that burst out of her, and the nav/progress color.
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
      }

      if (progress) {
        const max = root.scrollHeight - window.innerHeight;
        progress.style.transform = `scaleX(${max > 0 ? clamp(frame.y / max).toFixed(4) : 0})`;
      }
    },
  });
}

initChapters();
