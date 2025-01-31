import { clsx } from 'clsx';
import { useState } from 'react';

import { socialsLinkClickHandle } from '@helpers';

import { Icon } from '@components';

import { socialsItemModule as css } from '@styles';

import type { ISocialsItem } from '@types';

export const SocialsItem: ISocialsItem = ({ block, data: { fragment, href } }) => {
  const [socialsLinkClickCount, setSocialsLinkClickCount] = useState(0);

  return (
    <a
      className={clsx(css[`${block}__socials-link`], css['socials-link'])}
      onClick={() => socialsLinkClickHandle(setSocialsLinkClickCount)}
      key={socialsLinkClickCount}
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
