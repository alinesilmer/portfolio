export const clamp = (value: number, min = 0, max = 1): number => Math.min(max, Math.max(min, value));

export const lerp = (from: number, to: number, t: number): number => from + (to - from) * t;

export const smoothstep = (t: number): number => t * t * (3 - 2 * t);

export const easeOutCubic = (t: number): number => 1 - Math.pow(1 - t, 3);
