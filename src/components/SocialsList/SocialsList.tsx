import { SocialsItem } from '@components';

import { SocialsListModule as css } from '@styles';

import type { ISocialsList } from '@types';

export const SocialsList: ISocialsList = ({ block, data: { socialsItems } }) => {
  return (
    <ul className={css[`${block}__socials-list`]}>
      {socialsItems.map((socialsItem) => (
        <li className={css[`${block}__socials-item`]} key={socialsItem.href}>
          <SocialsItem block={block} data={socialsItem} />
        </li>
      ))}
    </ul>
  );
};
