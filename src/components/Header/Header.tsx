import { useMedia } from '@hooks';

import { Logo, MenuButton, HeaderNav } from '@components';

import { HeaderModule as css } from '@styles';

export const Header = () => {
  const [isMobile] = useMedia();

  return (
    <div className={'container'}>
      <header className={css['header']}>
        <Logo />
        {isMobile && <MenuButton />}
        {!isMobile && <HeaderNav />}
      </header>
    </div>
  );
};
