import { clsx } from 'clsx';

import { SocialsItem } from '@components';

import { SocialsListModule as css } from '@styles';

import type { ISocialsList } from '@types';

export const SocialsList: ISocialsList = ({ block, data: { socialsItems } }) => {
  return (
    <ul className={clsx(css[`${block}__socials-list`], css['socials-list'])}>
      {socialsItems.map((socialsItem) => (
        <li
          className={clsx(css[`${block}__socials-item`], css['socials-item'])}
          key={socialsItem.href}
        >
          <SocialsItem block={block} data={socialsItem} />
        </li>
      ))}
    </ul>
  );
};
