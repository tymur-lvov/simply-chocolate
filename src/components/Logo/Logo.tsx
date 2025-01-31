import { clsx } from 'clsx';

import { Icon } from '@components';

import { logoModule as css } from '@styles';

import type { ILogo } from '@types';

export const Logo: ILogo = ({ block, data: { text } }) => {
  return (
    <a className={clsx(css[`${block}__logo-link`], css['logo-link'])} href='/'>
      <span className={clsx(css[`${block}__logo-accent`], css['logo-accent'])}>
        {text.accentPart}
      </span>
      {text.basePart}
      <Icon
        className={clsx(css[`${block}__logo-icon`], css['logo-icon'])}
        fragment='logo'
        width={21}
        height={21}
      />
    </a>
  );
};
