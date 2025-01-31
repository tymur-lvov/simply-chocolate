import { isTargetElementAList, toggleScrollLock } from '@helpers';

import type { IToggleMobileMenu } from '@types';

export const toggleMobileMenu: IToggleMobileMenu = (target, setIsMobileMenuOpen) => {
  if (isTargetElementAList(target)) return;

  setIsMobileMenuOpen((prev) => !prev);

  toggleScrollLock();
};
