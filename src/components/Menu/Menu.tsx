import { NavList, MenuButton } from '@components';

import { MenuModule as css } from '@styles';

import { HeaderData as data } from '@data';

export const Menu = () => {
  return (
    <div className={css['menu__overlay']}>
      <MenuButton block='menu' modifier='close' />
      <NavList block='menu' data={data.navList} />
    </div>
  );
};
