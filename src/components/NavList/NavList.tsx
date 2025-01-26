import { clsx } from 'clsx';

import { NavItem } from '@components';

import { NavListModule as css } from '@styles';

import type { INavList } from '@types';

export const NavList: INavList = ({ variant, navList: { navItems } }) => {
  return (
    <nav>
      <ul className={clsx(css[`${variant}__nav-list`], css['nav-list'])}>
        {navItems.map(({ text }) => (
          <li key={text}>
            <NavItem variant={variant} text={text} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
