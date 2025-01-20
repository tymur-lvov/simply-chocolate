import { Icon } from '@components';

import { SocialsItemModule as css } from '@styles';

import type { ISocialsItem } from '@types';

export const SocialsItem: ISocialsItem = ({ fragment, href }) => {
  return (
    <a className={css['header__socials-link']} href={href}>
      <Icon className={css['header__socials-icon']} width={24} height={24} fragment={fragment} />
    </a>
  );
};
