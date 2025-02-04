import { clsx } from 'clsx';

import { navItemModule as css } from '@styles';

import type { INavItem } from '@types';

export const NavItem: INavItem = ({ variant, data: { text } }) => {
  return (
    <a className={clsx(css[variant], css.nav_link)} href='/'>
      {text}
    </a>
  );
};
