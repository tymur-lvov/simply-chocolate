import { isTargetElementAList, toggleScrollLock } from '@helpers';

import type { IMobileMenuClickHandle } from '@types';

export const mobileMenuClickHandle: IMobileMenuClickHandle = (target, setIsMobileMenuOpen) => {
  if (isTargetElementAList(target)) return;

  setIsMobileMenuOpen((prev) => !prev);

  toggleScrollLock();
};
