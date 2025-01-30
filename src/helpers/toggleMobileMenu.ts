import { isTargetElementAList, toggleScrollLock } from '@helpers';

import type { IToggleMobileMenu } from '@types';

export const toggleMobileMenu: IToggleMobileMenu = (event, setIsMobileMenuOpen) => {
  if (isTargetElementAList(event)) {
    return;
  }

  setIsMobileMenuOpen((prev) => !prev);

  toggleScrollLock();
};
