import { clsx } from 'clsx';
import { useEffect, useState } from 'react';

import { releaseScrollLock, mobileMenuClickHandle } from '@helpers';

import { Button, Icon, NavList, Portal, SocialsList } from '@components';

import { HEADER_DATA as data } from '@data';

import { mobileMenuModule as css } from '@styles';

import type { IMobileMenu } from '@types';

export const MobileMenu: IMobileMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    return () => releaseScrollLock();
  }, []);

  return (
    <>
      <Button
        className={css['mobile-menu__btn']}
        onClick={({ target }) => mobileMenuClickHandle(target, setIsMobileMenuOpen)}
      >
        <Icon
          className={clsx({
            [css['mobile-menu__btn-icon']]: true,
            [css['mobile-menu__btn-icon--open']]: !isMobileMenuOpen,
            [css['mobile-menu__btn-icon--close']]: isMobileMenuOpen,
          })}
          fragment={!isMobileMenuOpen ? 'open' : 'close'}
          width={32}
          height={32}
        />
      </Button>
      <Portal>
        <div
          className={clsx({
            [css['mobile-menu__overlay-thumb']]: true,
            [css['mobile-menu__overlay-thumb--visible']]: isMobileMenuOpen,
          })}
        >
          <div
            className={clsx({
              [css['mobile-menu__overlay']]: true,
              [css['mobile-menu__overlay--visible']]: isMobileMenuOpen,
            })}
            onClick={({ target }) => mobileMenuClickHandle(target, setIsMobileMenuOpen)}
          >
            <div className={css['mobile-menu__nav-wrapper']}>
              <NavList block='mobile-menu' data={data.navList} />
              <SocialsList block='mobile-menu' data={data.socialsList} />
            </div>
          </div>
        </div>
      </Portal>
    </>
  );
};
