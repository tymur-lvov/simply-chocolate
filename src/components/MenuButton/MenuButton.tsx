import { clsx } from 'clsx';

import { useState } from 'react';

import { Button, Icon, Menu } from '@components';

import { MenuButtonModule as css } from '@styles';

import type { IComponent } from '@types';

export const MenuButton: IComponent = ({ block }) => {
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
      <Menu isMenuOpen={isMenuOpen} />
    </>
  );
};
