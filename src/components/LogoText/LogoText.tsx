import { LogoTextModule as css } from '@styles';

import type { ILogoText } from '@types';

export const LogoText: ILogoText = ({ accentText, mainText }) => {
  return (
    <div className={css['header__logo-text']}>
      <span className={css['header__logo-accent']}>{accentText}</span>
      {mainText}
    </div>
  );
};
