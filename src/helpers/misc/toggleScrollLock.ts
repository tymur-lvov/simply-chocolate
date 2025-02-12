import type { IToggleScrollLock } from '@types';

export const toggleScrollLock: IToggleScrollLock = () => {
  document.querySelector('html')?.classList.toggle('menu_is_open');
  document.body.classList.toggle('menu_is_open');
};
