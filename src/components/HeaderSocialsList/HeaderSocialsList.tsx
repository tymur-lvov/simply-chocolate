import { HeaderSocialsItem } from '@components';

import { HeaderSocialsListData as data } from '@data';

import { HeaderSocialsListModule as css } from '@styles';

export const HeaderSocialsList = () => {
  return (
    <ul className={css['header__socials-list']}>
      {data.socialItems.map(({ fragment, href }) => (
        <li className={css['header__socials-item']} key={fragment}>
          <HeaderSocialsItem fragment={fragment} href={href} />
        </li>
      ))}
    </ul>
  );
};
