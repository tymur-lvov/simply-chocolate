import { Icon } from '@components';

import { LogoModule as css } from '@styles';

import type { ILogo } from '@types';

export const Logo: ILogo = ({ block, data: { text } }) => {
  return (
    <a className={css[`${block}__logo`]} href='/'>
      <span className={css[`${block}__logo-accent`]}>{text.accentPart}</span>
      {text.basePart}
      <Icon className={css[`${block}__logo-icon`]} fragment='logo' width={21} height={21} />
    </a>
  );
};
