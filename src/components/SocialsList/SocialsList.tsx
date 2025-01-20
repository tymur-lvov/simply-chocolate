import { SocialsItem } from '@components';

import { SocialsListData as data } from '@data';

import { SocialsListModule as css } from '@styles';

export const SocialsList = () => {
  return (
    <ul className={css['header__socials-list']}>
      {data.socialItems.map(({ fragment, href }) => (
        <li className={css['header__socials-item']} key={fragment}>
          <SocialsItem fragment={fragment} href={href} />
        </li>
      ))}
    </ul>
  );
};
