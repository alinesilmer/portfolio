import { REDUCED_MOTION_QUERY } from '@/lib/media';

/**
 * Publishes the pointer position as --px / --py (-1 to 1 from the viewport center) so
 * background layers can lean toward it. Mouse and trackpad only: touch has no hover.
 */
function initPointer(): void {
  if (!matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  if (matchMedia(REDUCED_MOTION_QUERY).matches) return;

  const root = document.documentElement;
  let x = 0;
  let y = 0;
  let raf = 0;

  const write = () => {
    raf = 0;
    root.style.setProperty('--px', x.toFixed(3));
    root.style.setProperty('--py', y.toFixed(3));
  };

  window.addEventListener(
    'pointermove',
    (event) => {
      x = (event.clientX / window.innerWidth) * 2 - 1;
      y = (event.clientY / window.innerHeight) * 2 - 1;
      if (!raf) raf = requestAnimationFrame(write);
    },
    { passive: true },
  );
}

initPointer();
