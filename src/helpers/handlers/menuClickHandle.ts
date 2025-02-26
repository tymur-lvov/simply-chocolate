import { toggleScrollLock } from '@helpers';

import type { IMenuClickHandle } from '@types';

export const menuClickHandle: IMenuClickHandle = (target, setIsMenuOpen) => {
  if (target instanceof HTMLElement && target.nodeName === 'UL') {
    return;
  }

  setIsMenuOpen((prev) => !prev);

  toggleScrollLock();
};
