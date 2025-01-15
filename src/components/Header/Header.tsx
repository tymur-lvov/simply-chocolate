import { container } from '@constants';

import { Logo, MenuButton } from '@components';

import { HeaderModule as css } from '@styles';

export const Header = () => {
  return (
    <div className={container}>
      <header className={css.header}>
        <Logo />
        <MenuButton />
      </header>
    </div>
  );
};
