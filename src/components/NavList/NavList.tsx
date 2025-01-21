import { NavItem } from '@components';

import { NavListModule as css } from '@styles';

import type { INavList } from '@types';

export const NavList: INavList = ({ navList: { navItems } }) => {
  return (
    <nav>
      <ul className={css['header__nav-list']}>
        {navItems.map(({ text }) => (
          <li className={css['header__nav-item']} key={text}>
            <NavItem text={text} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
