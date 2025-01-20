import { Icon } from '@components';

import { LogoData as data } from '@data';

import { LogoModule as css } from '@styles';

export const Logo = () => {
  return (
    <a className={css['header__logo-link']} href='/'>
      <div className={css['header__logo-text']}>
        <span className={css['header__logo-accent']}>{data.accentText}</span>
        {data.mainText}
      </div>
      <Icon className={css['header__logo-icon']} width={21} height={21} fragment={'logo'} />
    </a>
  );
};
