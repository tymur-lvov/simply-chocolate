import { clsx } from 'clsx';

import { Button, Icon } from '@components';

import { MenuButtonModule as css } from '@styles';

import type { IMenuButton } from '@types';

export const MenuButton: IMenuButton = ({ block, modifier }) => {
  return (
    <Button className={clsx(css[`${block}__menu-btn--${modifier}`], css['menu-btn'])}>
      <Icon
        className={clsx(css[`${block}__menu-icon--${modifier}`], css['menu-icon'])}
        fragment={modifier}
        width={32}
        height={32}
      />
    </Button>
  );
};
