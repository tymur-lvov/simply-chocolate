import { Icon } from '@components';

import { HeaderSocialsItemModule as css } from '@styles';

import type { IHeaderSocialsItem } from '@types';

export const HeaderSocialsItem: IHeaderSocialsItem = ({ fragment, href }) => {
  return (
    <a className={css['header__socials-link']} href={href}>
      <Icon className={css['header__socials-icon']} width={24} height={24} fragment={fragment} />
    </a>
  );
};
