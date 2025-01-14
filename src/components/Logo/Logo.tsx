import { Icon } from '@components';

import { LogoModule as css } from '@styles';

export const Logo = () => {
  return (
    <a href='/' className={css.text}>
      <div className={css.container}>
        <span className={css.accent}>SIMPLY</span>CHOCOLATE
        <Icon width={21} height={21} fragment={'logo'} />
      </div>
    </a>
  );
};
