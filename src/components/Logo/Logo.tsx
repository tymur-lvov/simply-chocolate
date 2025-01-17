import { Icon } from '@components';

import { LogoData as data } from '@data';

import { LogoModule as css } from '@styles';

export const Logo = () => {
  return (
    <a className={css['logo__link']} href='/'>
      <div className={css['logo__wrapper']}>
        <span className={css['logo__accent']}>{data.title.accentText}</span>
        {data.title.mainText}
        <div className={css['logo__icon-thumb']}>
          <Icon className={css['logo__icon']} width={21} height={21} fragment={'logo'} />
        </div>
      </div>
    </a>
  );
};
