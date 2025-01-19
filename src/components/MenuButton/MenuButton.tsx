import { Icon } from '@components';

import { MenuButtonModule as css } from '@styles';

export const MenuButton = () => {
  return (
    <button className={css['menu__btn']} type='button'>
      <Icon className={css['menu__icon']} width={28} height={28} fragment={'burger'} />
    </button>
  );
};
