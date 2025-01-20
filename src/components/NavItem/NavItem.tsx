import { NavItemModule as css } from '@styles';

import type { INavItem } from '@types';

export const NavItem: INavItem = ({ text }) => {
  return (
    <a className={css['header__nav-link']} href='/'>
      {text}
    </a>
  );
};
