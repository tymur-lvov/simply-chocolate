import { isTargetElementAList, toggleScrollLock } from '@helpers';

import type { IMenuClickHandle } from '@types';

export const menuClickHandle: IMenuClickHandle = (target, setIsMenuOpen) => {
  if (isTargetElementAList(target)) {
    return;
  }

  setIsMenuOpen((prev) => !prev);

  toggleScrollLock();
};
