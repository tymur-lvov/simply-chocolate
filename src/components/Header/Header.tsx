import { useMedia } from '@hooks';

import { Logo, MenuButton, NavList, SocialsList } from '@components';

import { HeaderData as data } from '@data';

import { HeaderModule as css } from '@styles';

export const Header = () => {
  const { isMobile } = useMedia();

  return (
    <div className={'container'}>
      <header className={css['header']}>
        <Logo logo={data.logo} />
        {isMobile && <MenuButton />}
        {!isMobile && (
          <div className={css['header__nav-socials-wrapper']}>
            <NavList navList={data.navList} />
            <SocialsList socialsList={data.socialsList} />
          </div>
        )}
      </header>
    </div>
  );
};
