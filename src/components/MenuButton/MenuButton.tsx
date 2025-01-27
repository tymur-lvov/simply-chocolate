import { Button, Icon } from '@components';

import { MenuButtonModule as css } from '@styles';

import type { IMenuButton } from '@types';

export const MenuButton: IMenuButton = ({ block }) => {
  return (
    <Button className={css[`${block}__menu-btn`]}>
      <Icon className={css[`${block}__menu-icon`]} fragment={'burger'} width={32} height={32} />
    </Button>
  );
};
