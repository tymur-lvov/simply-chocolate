import { clsx } from 'clsx';

import { Icon } from '@components';

import { LogoModule as css } from '@styles';

import type { ILogo } from '@types';

export const Logo: ILogo = ({ className, data: { accentText, mainText } }) => {
  return (
    <a className={clsx(css['header__logo'], className)} href='/'>
      <span className={css['header__logo-accent']}>{accentText}</span>
      {mainText}
      <Icon className={css['header__logo-icon']} fragment='logo' width={21} height={21} />
    </a>
  );
};
