import { clsx } from 'clsx';

import { NavItem } from '@components';

import { NavListModule as css } from '@styles';

import type { INavList } from '@types';

export const NavList: INavList = ({ block, data: { navItems } }) => {
  return (
    <nav className={css[`${block}__nav`]}>
      <ul className={clsx(css[`${block}__nav-list`], css['nav-list'])}>
        {navItems.map((navItem) => (
          <li key={navItem.text}>
            <NavItem block={block} data={navItem} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
