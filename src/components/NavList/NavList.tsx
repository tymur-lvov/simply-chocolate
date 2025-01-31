import { clsx } from 'clsx';

import { NavItem } from '@components';

import { navListModule as css } from '@styles';

import type { INavList } from '@types';

export const NavList: INavList = ({ block, data: { navItems } }) => {
  return (
    <nav className={clsx(css[`${block}__nav`], css['nav'])}>
      <ul className={clsx(css[`${block}__nav-list`], css['nav-list'])}>
        {navItems.map((navItem) => (
          <li className={clsx(css[`${block}__nav-item`], css['nav-item'])} key={navItem.text}>
            <NavItem block={block} data={navItem} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
