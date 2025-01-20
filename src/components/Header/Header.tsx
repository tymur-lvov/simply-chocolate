import { useMedia } from '@hooks';

import { Logo, MenuButton, NavList, SocialsList } from '@components';

import { HeaderModule as css } from '@styles';

export const Header = () => {
  const [isMobile] = useMedia();

  return (
    <div className={'container'}>
      <header className={css['header']}>
        <Logo />
        {isMobile && <MenuButton />}
        {!isMobile && (
          <div className={css['header__nav-socials-wrapper']}>
            <NavList />
            <SocialsList />
          </div>
        )}
      </header>
    </div>
  );
};
