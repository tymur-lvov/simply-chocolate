import { clsx } from 'clsx';

import { useMedia } from '@hooks';

import { Logo, MobileMenu, NavList, SocialsList } from '@components';

import { HeaderData as data } from '@data';

import { HeaderModule as css } from '@styles';

export const Header = () => {
  const { isMobile } = useMedia();

  return (
    <header>
      <div className={clsx(css['header__container'], 'container')}>
        <Logo block='header' data={data.logo} />
        {isMobile && <MobileMenu block={'header'} />}
        {!isMobile && (
          <div className={css['header__nav-socials-wrapper']}>
            <NavList block='header' data={data.navList} />
            <SocialsList block='header' data={data.socialsList} />
          </div>
        )}
      </div>
    </header>
  );
};
