import { HeaderNavItem } from '@components';

import { HeaderNavListData as data } from '@data';

import { HeaderNavListModule as css } from '@styles';

export const HeaderNavList = () => {
  return (
    <ul className={css['nav__list']}>
      {data.navItems.map(({ text }) => (
        <li className={css['nav__item']} key={text}>
          <HeaderNavItem text={text} />
        </li>
      ))}
    </ul>
  );
};
