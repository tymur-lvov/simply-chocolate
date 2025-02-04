import { clsx } from 'clsx';

import { useMedia } from '@hooks';

import { Logo, Menu, NavList, SocialsList } from '@components';

import { container } from '@constants';

import { HEADER_DATA as data } from '@data';

import { headerModule as css } from '@styles';

import type { IHeader } from '@types';

export const Header: IHeader = () => {
  const { isMobile } = useMedia();
  const variant = 'header';

  return (
    <header>
      <div className={clsx(css.header_container, container)}>
        <Logo data={data.logo} />
        {/* {isMobile && <Menu />}
        {!isMobile && (
          <div className={css.header_nav_socials_wrapper}>
            <NavList data={data.navList} variant={variant} />
            <SocialsList data={data.socialsList} block={variant} />
          </div>
        )} */}
      </div>
    </header>
  );
};
