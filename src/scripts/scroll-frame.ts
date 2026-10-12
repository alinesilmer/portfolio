import { clamp } from '@/lib/math';
import { REDUCED_MOTION_QUERY } from '@/lib/media';

export interface ScrollFrame {
  /** Smoothed scroll position in px; eases toward the real one. */
  y: number;
  /** 0–1, how fast the page is being scrolled. */
  velocity: number;
  reducedMotion: boolean;
}

interface Options {
  render: (frame: ScrollFrame) => void;
  /** Called before the next render whenever layout may have changed. */
  measure?: () => void;
}

const SMOOTHING = 0.14;
const FULL_SPEED_PX = 380;

/**
 * One requestAnimationFrame loop for all scroll-linked motion. It runs only while the
 * smoothed position is still catching up with the real one, then goes idle.
 * Returns a cleanup function.
 */
export function onScrollFrame({ render, measure }: Options): () => void {
  const reducedMotion = matchMedia(REDUCED_MOTION_QUERY);
  let current = window.scrollY;
  let raf = 0;

  const frame = () => {
    raf = 0;
    const target = window.scrollY;
    const still = reducedMotion.matches;
    const velocity = still ? 0 : clamp(Math.abs(target - current) / FULL_SPEED_PX);
    current = still ? target : current + (target - current) * SMOOTHING;
    if (Math.abs(target - current) < 0.5) current = target;
    render({ y: current, velocity, reducedMotion: still });
    if (current !== target) raf = requestAnimationFrame(frame);
  };

  const schedule = () => {
    if (!raf) raf = requestAnimationFrame(frame);
  };
  const remeasure = () => {
    measure?.();
    schedule();
  };

  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', remeasure);
  window.addEventListener('load', remeasure);
  void document.fonts?.ready.then(remeasure);

  measure?.();
  frame();

  return () => {
    cancelAnimationFrame(raf);
    window.removeEventListener('scroll', schedule);
    window.removeEventListener('resize', remeasure);
    window.removeEventListener('load', remeasure);
  };
}
