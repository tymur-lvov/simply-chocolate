import { clsx } from 'clsx';

import { useState } from 'react';

import { Button, Icon, NavList, SocialsList } from '@components';

import { MobileMenuData as data } from '@data';

import { MobileMenuModule as css } from '@styles';

import type { IComponent } from '@types';

export const MobileMenu: IComponent = ({ block }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuButtonClickHandle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <Button
        className={clsx({
          [css['menu-btn']]: true,
          [css[`${block}__menu-btn--open`]]: !isMenuOpen,
          [css[`${block}__menu-btn--close`]]: isMenuOpen,
        })}
        onClick={menuButtonClickHandle}
      >
        <Icon
          className={clsx(css[`${block}__menu-icon`], css['menu-icon'])}
          fragment={!isMenuOpen ? 'open' : 'close'}
          width={32}
          height={32}
        />
      </Button>
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
    </>
  );
};
