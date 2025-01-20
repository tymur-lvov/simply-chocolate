import { HeaderNavData as data } from '@data';

import { HeaderNavModule as css } from '@styles';

export const HeaderNav = () => {
  return (
    <nav className={css['header__nav']}>
      <ul className={css['header__nav-list']}>
        {data.navItems.map(({ text }) => (
          <li className={css['header__nav-item']} key={text}>
            <a className={css['header__nav-link']} href='/'>
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
