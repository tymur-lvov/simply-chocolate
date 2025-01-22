import { LogoIcon, LogoText } from '@components';

import { LogoModule as css } from '@styles';

import type { ILogo } from '@types';

export const Logo: ILogo = ({ logo: { accentText, mainText } }) => {
  return (
    <a className={css['header__logo-link']} href='/'>
      <LogoText accentText={accentText} mainText={mainText} />
      <LogoIcon />
    </a>
  );
};
