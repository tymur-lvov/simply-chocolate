import { Icon } from '@components';

import { SocialsItemModule as css } from '@styles';

import type { ISocialsItem } from '@types';

export const SocialsItem: ISocialsItem = ({ block, data: { fragment, href } }) => {
  return (
    <a
      className={css[`${block}__socials-link`]}
      href={href}
      target='_blank'
      rel='noopener noreferrer'
    >
      <Icon className={css[`${block}__socials-icon`]} fragment={fragment} width={24} height={24} />
    </a>
  );
};
