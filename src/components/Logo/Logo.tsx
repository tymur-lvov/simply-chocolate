import { Icon } from '@components';

import { logoModule as css } from '@styles';

import type { ILogo } from '@types';

export const Logo: ILogo = ({ data: { text } }) => {
  return (
    <a className={css['logo-link']} href='/'>
      <span className={css['logo-accent']}>{text.accentPart}</span>
      {text.basePart}
      <Icon className={css['logo-icon']} fragment='logo' width={21} height={21} />
    </a>
  );
};
