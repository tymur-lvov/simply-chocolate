import { NavItem } from '@components';

import { NavListData as data } from '@data';

import { NavListModule as css } from '@styles';

export const NavList = () => {
  return (
    <ul className={css['header__nav-list']}>
      {data.navItems.map(({ text }) => (
        <li className={css['header__nav-item']} key={text}>
          <NavItem text={text} />
        </li>
      ))}
    </ul>
  );
};
