import { MenuButton, NavList, SocialsList } from '@components';

import { MenuModule as css } from '@styles';

import { HeaderData as data } from '@data';

export const Menu = () => {
  return (
    <div className={css['menu__overlay']}>
      <div className={css['menu__wrapper']}>
        <MenuButton block='menu' modifier='close' />
        <NavList block='menu' data={data.navList} />
        <SocialsList block='menu' data={data.socialsList} />
      </div>
    </div>
  );
};
