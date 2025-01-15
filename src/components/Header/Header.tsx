import { container } from '@constants';

import { Logo, MenuButton } from '@components';

import { HeaderModule as css } from '@styles';

export const Header = () => {
  return (
    <div className={container}>
      <header className={css.wrapper}>
        <Logo />
        <MenuButton />
      </header>
    </div>
  );
};
