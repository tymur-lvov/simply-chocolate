import { Button, Icon } from '@components';

import { MenuButtonModule as css } from '@styles';

export const MenuButton = () => {
  return (
    <Button className={css['header__menu-btn']}>
      <Icon width={32} height={32} fragment={'burger'} />
    </Button>
  );
};
