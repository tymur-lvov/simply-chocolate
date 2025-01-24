import { Icon } from '@components';

import { LogoModule as css } from '@styles';

import type { ILogo } from '@types';

export const Logo: ILogo = ({ logo: { accentText, mainText } }) => {
  return (
    <a className={css['header__logo-link']} href='/'>
      <div className={css['header__logo-text']}>
        <span className={css['header__logo-accent']}>{accentText}</span>
        {mainText}
      </div>
      <div className={css['header__logo-icon-thumb']}>
        <Icon width={21} height={21} fragment={'logo'} />
      </div>
    </a>
  );
};
