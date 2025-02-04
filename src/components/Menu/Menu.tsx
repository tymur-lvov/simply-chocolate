import { clsx } from 'clsx';
import { useEffect, useState } from 'react';

import { releaseScrollLock, menuClickHandle } from '@helpers';

import { Button, Icon, NavList, Portal, SocialsList } from '@components';

import { HEADER_DATA as data } from '@data';

import { menuModule as css } from '@styles';

import type { IMenu } from '@types';

export const Menu: IMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    return () => releaseScrollLock();
  }, []);

  return (
    <>
      <Button
        className={css['menu-btn']}
        onClick={({ target }) => menuClickHandle(target, setIsMenuOpen)}
      >
        <Icon
          className={clsx(css['menu-btn-icon'], {
            [css['menu-btn-icon--open']]: !isMenuOpen,
            [css['menu-btn-icon--close']]: isMenuOpen,
          })}
          fragment={!isMenuOpen ? 'open' : 'close'}
          width={32}
          height={32}
        />
      </Button>
      <Portal>
        <div
          className={clsx(css['menu-overlay-thumb'], {
            [css['menu-overlay-thumb--visible']]: isMenuOpen,
          })}
        >
          <div
            className={clsx(css['menu-overlay'], {
              [css['menu-overlay--visible']]: isMenuOpen,
            })}
            onClick={({ target }) => menuClickHandle(target, setIsMenuOpen)}
          >
            <div className={css['menu-nav-wrapper']}>
              <NavList block='menu' data={data.navList} />
              <SocialsList block='menu' data={data.socialsList} />
            </div>
          </div>
        </div>
      </Portal>
    </>
  );
};
