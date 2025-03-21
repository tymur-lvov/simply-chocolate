import { Icon } from '@components';

import { logoModule as css } from '@styles';

import type { ILogo } from '@types';

export const Logo: ILogo = ({ data: { link, icon } }) => {
  return (
    <a className={css.logo_link} href={link.href}>
      <span className={css.logo_accent}>{link.textParts?.accent}</span>
      {link.textParts?.main}
      <Icon className={css.logo_icon} data={icon} />
    </a>
  );
};
