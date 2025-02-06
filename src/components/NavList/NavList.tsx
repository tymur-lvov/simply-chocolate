import { clsx } from 'clsx';

import { NavItem } from '@components';

import { navListModule as css } from '@styles';

import type { INavList } from '@types';

export const NavList: INavList = ({ variant, data: { navItems } }) => {
  return (
    <nav className={clsx(css[variant], css.nav)}>
      <ul className={clsx(css[variant], css.nav_list)}>
        {navItems.map((navItem) => (
          <li className={clsx(css[variant], css.nav_item)} key={navItem.link.text}>
            <NavItem variant={variant} data={navItem} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
