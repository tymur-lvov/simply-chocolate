import { Icon } from '@components';

import { logoModule as css } from '@styles';

import type { ILogo } from '@types';

export const Logo: ILogo = ({ data: { href, text, icon } }) => {
  return (
    <a className={css.logo_link} href={href}>
      <span className={css.logo_accent}>{text.accent}</span>
      {text.main}
      <Icon className={css.logo_icon} data={icon} />
    </a>
  );
};
