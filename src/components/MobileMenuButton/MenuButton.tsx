import { Button, Icon } from '@components';

import { MobileMenuButtonModule as css } from '@styles';

export const MobileMenuButton = () => {
  return (
    <Button className={css['header__mobile-menu-btn']}>
      <Icon
        className={css['header__mobile-menu-icon']}
        width={28}
        height={28}
        fragment={'burger'}
      />
    </Button>
  );
};
