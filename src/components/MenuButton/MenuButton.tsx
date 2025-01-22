import { Button, Icon } from '@components';

import { MenuButtonModule as css } from '@styles';

export const MenuButton = () => {
  return (
    <Button className={css['header__menu-btn']}>
      <Icon className={css['header__menu-icon']} width={32} height={32} fragment={'burger'} />
    </Button>
  );
};
