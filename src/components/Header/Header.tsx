import { clsx } from 'clsx';

import { useMedia } from '@hooks';

import { Logo, Menu, NavList, SocialsList } from '@components';

import { HEADER_DATA as data } from '@data';

import { headerModule as css } from '@styles';

import type { IHeader } from '@types';

export const Header: IHeader = () => {
  const { isMobile } = useMedia();

  return (
    <header>
      <div className={clsx(css['header-container'], 'container')}>
        <Logo data={data.logo} />
        {isMobile && <Menu />}
        {!isMobile && (
          <div className={css['header-nav-socials-wrapper']}>
            <NavList variant='header' data={data.navList} />
            <SocialsList block='header' data={data.socialsList} />
          </div>
        )}
      </div>
    </header>
  );
};
