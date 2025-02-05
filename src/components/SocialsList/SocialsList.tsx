import { clsx } from 'clsx';

import { SocialsItem } from '@components';

import { socialsListModule as css } from '@styles';

import type { ISocialsList } from '@types';

export const SocialsList: ISocialsList = ({ variant, data: { socialsItems } }) => {
  return (
    <ul className={clsx(css[variant], css.socials_list)}>
      {socialsItems.map((socialsItem) => (
        <li className={clsx(css[variant], css.socials_item)} key={socialsItem.icon.fragment}>
          <SocialsItem variant={variant} data={socialsItem} />
        </li>
      ))}
    </ul>
  );
};
