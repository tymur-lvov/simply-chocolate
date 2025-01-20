import { useMedia } from '@hooks';

import { Logo, MenuButton, HeaderNav, HeaderSocials } from '@components';

import { HeaderModule as css } from '@styles';

export const Header = () => {
  const [isMobile] = useMedia();

  return (
    <div className={'container'}>
      <header className={css['header']}>
        <Logo />
        {isMobile && <MenuButton />}
        {!isMobile && <HeaderNav />}
        {!isMobile && <HeaderSocials />}
      </header>
    </div>
  );
};
