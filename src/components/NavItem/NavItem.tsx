import { clsx } from 'clsx';

import { navItemModule as css } from '@styles';

import type { INavItem } from '@types';

export const NavItem: INavItem = ({ variant, data: { link } }) => {
  return (
    <a className={clsx(css[variant], css.nav_link)} href={link.href}>
      {link.text}
    </a>
  );
};
