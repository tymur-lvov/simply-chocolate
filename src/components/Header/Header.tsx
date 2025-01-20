import { useMedia } from '@hooks';

import { Logo, MobileMenuButton, HeaderNav, HeaderSocialsList } from '@components';

import { HeaderModule as css } from '@styles';

export const Header = () => {
  const [isMobile] = useMedia();

  return (
    <div className={'container'}>
      <header className={css['header']}>
        <Logo />
        {isMobile && <MobileMenuButton />}
        {!isMobile && (
          <div className={css['header__nav-socials-wrapper']}>
            <HeaderNav />
            <HeaderSocialsList />
          </div>
        )}
      </header>
    </div>
  );
};
