import { Icon } from '@components';

import { LogoModule as css } from '@styles';

export const Logo = () => {
  return (
    <a href='/' className={css.logo}>
      <div className={css.logo__container}>
        <span className={css.logo__accent}>SIMPLY</span>CHOCOLATE
        <div className={css.logo__icon_thumb}>
          <Icon width={21} height={21} fragment={'logo'} />
        </div>
      </div>
    </a>
  );
};
