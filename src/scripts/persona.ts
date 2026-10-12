import type { PersonaKey } from '@/data/chapters';
import { clamp, lerp, smoothstep } from '@/lib/math';
import { PHONE_QUERY } from '@/lib/media';
import type { ScrollFrame } from './scroll-frame';

export interface PersonaPose {
  frame: number;
  tilt: number;
  x: number;
  y: number;
  scale: number;
}

interface Stop {
  /** Scroll position at which this pose is fully reached. */
  at: number;
  pose: PersonaPose;
}

/** How far around a whole frame index its drawing stays fully opaque, and how long it takes to fade. */
const HOLD = 0.25;
const FADE = 0.5;
/** Extra lean while one drawing swaps for the next, so the change reads as a tumble. */
const SWAP_SWING_DEG = 16;
const GUST_DEG = 5;
const STRETCH = 0.04;
const LANDED_FROM_FRAME = 3.9;

function mixPose(a: PersonaPose, b: PersonaPose, t: number): PersonaPose {
  return {
    frame: lerp(a.frame, b.frame, t),
    tilt: lerp(a.tilt, b.tilt, t),
    x: lerp(a.x, b.x, t),
    y: lerp(a.y, b.y, t),
    scale: lerp(a.scale, b.scale, t),
  };
}

/**
 * Drives the fixed persona from scroll: where she is, which drawing shows and how she leans.
 * Each chapter section carries its key pose in `data-persona`.
 */
export function createPersona(root: HTMLElement, sections: HTMLElement[]) {
  const tilt = root.querySelector<HTMLElement>('[data-persona-tilt]');
  const drawings = [...root.querySelectorAll<HTMLElement>('img')];
  const phone = matchMedia(PHONE_QUERY);
  let stops: Stop[] = [];

  function measure(): void {
    const viewport = window.innerHeight;
    stops = sections.map((section) => {
      const key = JSON.parse(section.dataset.persona ?? '{}') as PersonaKey;
      const rect = section.getBoundingClientRect();
      const placement = phone.matches ? key.phone : key;
      return {
        // Centered on the section when it is taller than the viewport.
        at: rect.top + window.scrollY + Math.max(0, rect.height - viewport) / 2,
        pose: { frame: key.frame, tilt: key.tilt, x: placement.x, y: placement.y, scale: placement.scale },
      };
    });
  }

  function poseAt(y: number): PersonaPose | undefined {
    const first = stops[0];
    if (!first || y <= first.at) return first?.pose;
    for (let i = 0; i < stops.length - 1; i++) {
      const from = stops[i]!;
      const to = stops[i + 1]!;
      if (y < to.at) return mixPose(from.pose, to.pose, smoothstep(clamp((y - from.at) / (to.at - from.at))));
    }
    return stops[stops.length - 1]!.pose;
  }

  function update({ y, velocity }: ScrollFrame): PersonaPose | undefined {
    const pose = poseAt(y);
    if (!pose) return undefined;

    root.style.transform = `translate(${pose.x.toFixed(1)}vw, ${pose.y.toFixed(1)}vh) translate(-50%, -50%) scale(${pose.scale.toFixed(3)})`;

    drawings.forEach((drawing, index) => {
      drawing.style.opacity = clamp((HOLD + FADE - Math.abs(pose.frame - index)) / FADE).toFixed(3);
    });

    if (tilt) {
      const swing = Math.sin(Math.PI * (pose.frame % 1)) * SWAP_SWING_DEG;
      const gust = Math.sin(y / 120) * velocity * GUST_DEG;
      tilt.style.transform = `rotate(${(pose.tilt + swing + gust).toFixed(2)}deg) scaleY(${(1 + velocity * STRETCH).toFixed(3)})`;
    }

    root.classList.toggle('is-landed', pose.frame > LANDED_FROM_FRAME);
    return pose;
  }

  return { measure, update };
}
