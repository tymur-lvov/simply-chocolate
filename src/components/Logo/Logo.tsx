import { Icon } from '@components';

import { LogoModule as css } from '@styles';

import type { ILogo } from '@types';

export const Logo: ILogo = ({ data: { accentText, mainText } }) => {
  return (
    <a className={css['header__logo']} href='/'>
      <span className={css['header__logo-accent']}>{accentText}</span>
      {mainText}
      <Icon className={css['header__logo-icon']} fragment='logo' width={21} height={21} />
    </a>
  );
};
