import { clsx } from 'clsx';

import { useState } from 'react';

import { Button, Icon, NavList, SocialsList } from '@components';

import { HeaderData as data } from '@data';

import { MobileMenuModule as css } from '@styles';

import type { IComponent } from '@types';

export const MobileMenu: IComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuButtonClickHandle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <Button className={css['menu__btn']} onClick={menuButtonClickHandle}>
        <Icon
          className={clsx({
            [css['menu__btn-icon']]: true,
            [css['menu__btn-icon--open']]: !isMenuOpen,
            [css['menu__btn-icon--close']]: isMenuOpen,
          })}
          fragment={!isMenuOpen ? 'open' : 'close'}
          width={32}
          height={32}
        />
      </Button>
      <div className={css['menu__overlay-thumb']}>
        <div
          className={clsx({
            [css['menu__overlay']]: true,
            [css['menu__overlay--visible']]: isMenuOpen,
          })}
        >
          <div className={css['menu__nav-wrapper']}>
            <NavList block='menu' data={data.navList} />
            <SocialsList block='menu' data={data.socialsList} />
          </div>
        </div>
      </div>
    </>
  );
};
