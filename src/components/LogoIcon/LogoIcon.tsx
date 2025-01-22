import { Icon } from '@components';

import { LogoIconModule as css } from '@styles';

export const LogoIcon = () => {
  return (
    <div className={css['header__logo-icon-thumb']}>
      <Icon className={css['header__logo-icon']} width={21} height={21} fragment={'logo'} />
    </div>
  );
};
