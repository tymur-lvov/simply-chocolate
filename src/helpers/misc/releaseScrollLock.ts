export const releaseScrollLock = () => {
  document.querySelector('html')?.classList.remove('menu_is_open');
  document.body.classList.remove('menu_is_open');
};
