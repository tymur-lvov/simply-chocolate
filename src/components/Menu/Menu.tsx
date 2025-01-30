import { clsx } from 'clsx';

import { NavList, SocialsList } from '@components';

import { MenuModule as css } from '@styles';

import { HeaderData as data } from '@data';

import type { IMenu } from '@types';

export const Menu: IMenu = ({ isMenuOpen }) => {
  return (
    <div className={css['menu__overlay-thumb']}>
      <div
        className={clsx({
          [css['menu__overlay']]: true,
          [css['menu__overlay--active']]: isMenuOpen,
        })}
      >
        <div className={css['menu__wrapper']}>
          <NavList block='menu' data={data.navList} />
          <SocialsList block='menu' data={data.socialsList} />
        </div>
      </div>
    </div>
  );
};
