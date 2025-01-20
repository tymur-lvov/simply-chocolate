import { LogoTextModule as css } from '@styles';

import type { ILogoText } from '@types';

export const LogoText: ILogoText = ({ accentText, mainText }) => {
  return (
    <div className={css['logo__text']}>
      <span className={css['logo__accent']}>{accentText}</span>
      {mainText}
    </div>
  );
};
