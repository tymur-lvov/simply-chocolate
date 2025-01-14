import { Icon } from '@components';

import { MenuButtonModule as css } from '@styles';

export const MenuButton = () => {
  return (
    <button className={css.button} type='button'>
      <Icon width={28} height={28} fragment={'burger'} />
    </button>
  );
};
