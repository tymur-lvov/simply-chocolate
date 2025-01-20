import { HeaderNavItem } from '@components';

import { HeaderNavListData as data } from '@data';

import { HeaderNavListModule as css } from '@styles';

export const HeaderNavList = () => {
  return (
    <ul className={css['header__nav-list']}>
      {data.navItems.map(({ text }) => (
        <li className={css['header__nav-item']} key={text}>
          <HeaderNavItem text={text} />
        </li>
      ))}
    </ul>
  );
};
