import { Button, Icon } from '@components';

import { MenuButtonModule as css } from '@styles';

export const MenuButton = () => {
  return (
    <Button className={css['menu__btn']}>
      <Icon className={css['menu__icon']} width={28} height={28} fragment={'burger'} />
    </Button>
  );
};
