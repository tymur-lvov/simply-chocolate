import { Button, Icon, NavList } from '@components';

import { MenuModule as css } from '@styles';

import { HeaderData as data } from '@data';

export const Menu = () => {
  return (
    <div className={css['menu__overlay']}>
      <Button className={css['menu__close-btn']}>
        <Icon className={css['menu__icon']} width={28} height={28} fragment='close' />
      </Button>
      <NavList className={css['menu__nav-list']} navList={data.navList} />
    </div>
  );
};
