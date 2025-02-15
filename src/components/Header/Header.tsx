import { clsx } from 'clsx';

import { useMedia } from '@hooks';

import { Logo, Menu, NavList, SocialsList } from '@components';

import { MENU_DATA } from '@data';

import { CONTAINER, HEADER } from '@constants';

import { headerModule as css } from '@styles';

import type { IHeader } from '@types';

export const Header: IHeader = ({ data }) => {
  const { isMobile } = useMedia();

  return (
    <div className={clsx(css.header_container, CONTAINER)}>
      <Logo data={data.logo} />
      {isMobile && <Menu data={MENU_DATA} />}
      {!isMobile && (
        <div className={css.header_nav_socials_wrapper}>
          <NavList variant={HEADER} data={data.navList} />
          <SocialsList variant={HEADER} data={data.socialsList} />
        </div>
      )}
    </div>
  );
};
