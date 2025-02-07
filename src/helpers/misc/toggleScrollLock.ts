import type { IToggleScrollLock } from '@types';

export const toggleScrollLock: IToggleScrollLock = () => {
  document.body.classList.toggle('menu-is-open');
};
