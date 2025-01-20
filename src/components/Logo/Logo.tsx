import { LogoText, LogoIcon } from '@components';

import { LogoData as data } from '@data';

import { LogoModule as css } from '@styles';

export const Logo = () => {
  return (
    <a className={css['header__logo-link']} href='/'>
      <div className={css['header__logo-wrapper']}>
        <LogoText accentText={data.accentText} mainText={data.mainText} />
        <LogoIcon />
      </div>
    </a>
  );
};
