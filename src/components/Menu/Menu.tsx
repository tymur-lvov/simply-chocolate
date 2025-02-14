import { clsx } from 'clsx';
import { useEffect, useState } from 'react';

import { releaseScrollLock, menuClickHandle } from '@helpers';

import { Button, Icon, NavList, Portal, SocialsList } from '@components';

import { MENU } from '@constants';

import { menuModule as css } from '@styles';

import type { IMenu } from '@types';

export const Menu: IMenu = ({ data }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    return () => releaseScrollLock();
  }, []);

  return (
    <>
      <Button
        className={css.menu_btn}
        onClick={({ target }) => menuClickHandle(target, setIsMenuOpen)}
      >
        <Icon
          className={clsx({
            [css.menu_btn_icon]: true,
            [css.menu_btn_icon__open]: !isMenuOpen,
            [css.menu_btn_icon__close]: isMenuOpen,
          })}
          fragmentKey={data.toggleIcon.getFragmentKey(isMenuOpen)}
          data={data.toggleIcon}
        />
      </Button>
      <Portal>
        <div
          className={clsx({
            [css.menu_overlay_thumb]: true,
            [css.menu_overlay_thumb__visible]: isMenuOpen,
          })}
        >
          <div
            className={clsx({
              [css.menu_overlay]: true,
              [css.menu_overlay__visible]: isMenuOpen,
            })}
            onClick={({ target }) => menuClickHandle(target, setIsMenuOpen)}
          >
            <div className={css.menu_nav_socials_wrapper}>
              <NavList variant={MENU} data={data.navList} />
              <SocialsList variant={MENU} data={data.socialsList} />
            </div>
          </div>
        </div>
      </Portal>
    </>
  );
};
