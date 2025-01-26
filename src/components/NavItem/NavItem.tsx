import { clsx } from 'clsx';

import { NavItemModule as css } from '@styles';

import type { INavItem } from '@types';

export const NavItem: INavItem = ({ variant, text }) => {
  return (
    <a className={clsx(css[`${variant}__nav-link`], css['nav-link'])} href='/'>
      {text}
    </a>
  );
};
