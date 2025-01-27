import { clsx } from 'clsx';

import { NavItemModule as css } from '@styles';

import type { INavItem } from '@types';

export const NavItem: INavItem = ({ block, data: { text } }) => {
  return (
    <a className={clsx(css[`${block}__nav-link`], css['nav-link'])} href='/'>
      {text}
    </a>
  );
};
