import { HeaderNavItemModule as css } from '@styles';

import type { IHeaderNavItem } from '@types';

export const HeaderNavItem: IHeaderNavItem = ({ text }) => {
  return (
    <a className={css['header__nav-link']} href='/'>
      {text}
    </a>
  );
};
