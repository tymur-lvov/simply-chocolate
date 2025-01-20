import { Icon } from '@components';

import { HeaderSocialsData as data } from '@data';

import { HeaderSocialsModule as css } from '@styles';

export const HeaderSocials = () => {
  return (
    <ul className={css['header-socials__list']}>
      {data.socialItems.map(({ fragment, href }) => (
        <li className={css['header-socials__item']} key={fragment}>
          <a className={css['header-socials__link']} href={href}>
            <Icon
              className={css['header-socials__icon']}
              width={24}
              height={24}
              fragment={fragment}
            />
          </a>
        </li>
      ))}
    </ul>
  );
};
