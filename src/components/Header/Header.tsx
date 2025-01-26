import { clsx } from 'clsx';

import { useMedia } from '@hooks';

import { Logo, MenuButton, NavList, SocialsList } from '@components';

import { HeaderData as data } from '@data';

import { HeaderModule as css } from '@styles';

export const Header = () => {
  const { isMobile } = useMedia();

  return (
    <header>
      <div className={clsx(css['header__container'], 'container')}>
        <Logo logo={data.logo} />
        {isMobile && <MenuButton />}
        {!isMobile && (
          <div className={css['header__nav-socials-wrapper']}>
            <NavList variant={'header'} navList={data.navList} />
            <SocialsList socialsList={data.socialsList} />
          </div>
        )}
      </div>
    </header>
  );
};
