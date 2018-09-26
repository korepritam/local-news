var root = document.documentElement;

document.addEventListener('resize', () => {
  root.style.setProperty('--screen-x', window.screenX)
  root.style.setProperty('--screen-y', windo