import { clsx } from 'clsx';

import { useMedia } from '@hooks';

import { Logo, Menu, NavList, SocialsList } from '@components';

import { CONTAINER, HEADER } from '@constants';

import { HEADER_DATA as data } from '@data';

import { headerModule as css } from '@styles';

import type { IHeader } from '@types';

export const Header: IHeader = () => {
  const { isMobile } = useMedia();

  return (
    <header>
      <div className={clsx(css.header_container, CONTAINER)}>
        <Logo data={data.logo} />
        {isMobile && <Menu />}
        {!isMobile && (
          <div className={css.header_nav_socials_wrapper}>
            <NavList variant={HEADER} data={data.navList} />
            <SocialsList variant={HEADER} data={data.socialsList} />
          </div>
        )}
      </div>
    </header>
  );
};
