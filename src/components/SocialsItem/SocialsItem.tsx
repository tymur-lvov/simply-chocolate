import { clsx } from 'clsx';

import { Icon } from '@components';

import { socialsItemModule as css } from '@styles';

import type { ISocialsItem } from '@types';

export const SocialsItem: ISocialsItem = ({ block, data: { fragment, href } }) => {
  return (
    <a
      className={clsx(css[`${block}__socials-link`], css['socials-link'])}
      href={href}
      target='_blank'
      rel='noopener noreferrer'
    >
      <Icon
        className={clsx(css[`${block}__socials-icon`], css['socials-icon'])}
        fragment={fragment}
        width={24}
        height={24}
      />
    </a>
  );
};
