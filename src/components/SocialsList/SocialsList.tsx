import { SocialsItem } from '@components';

import { SocialsListModule as css } from '@styles';

import type { ISocialsList } from '@types';

export const SocialsList: ISocialsList = ({ socialsList: { socialsItems } }) => {
  return (
    <ul className={css['header__socials-list']}>
      {socialsItems.map(({ fragment, href }) => (
        <li className={css['header__socials-item']} key={fragment}>
          <SocialsItem fragment={fragment} href={href} />
        </li>
      ))}
    </ul>
  );
};
