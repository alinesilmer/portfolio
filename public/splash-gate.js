// Runs before first paint: skip the splash when this browser session has already seen it.
try {
  if (sessionStorage.getItem('splash-seen')) document.documentElement.classList.add('no-splash');
} catch (error) {
  // Storage blocked: the splash simply plays.
}
