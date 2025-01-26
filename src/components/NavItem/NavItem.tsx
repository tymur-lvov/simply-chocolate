import { clsx } from 'clsx';

import { NavItemModule as css } from '@styles';

import type { INavItem } from '@types';

export const NavItem: INavItem = ({ className, text }) => {
  const block = clsx({
    header: className.includes('header__'),
    menu: className.includes('menu__'),
  });

  return (
    <a className={clsx(css[`${block}__nav-link`], css['nav-link'])} href='/'>
      {text}
    </a>
  );
};
