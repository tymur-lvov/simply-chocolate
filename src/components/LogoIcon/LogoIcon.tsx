import { Icon } from '@components';

import { LogoIconModule as css } from '@styles';

export const LogoIcon = () => {
  return (
    <div className={css['logo__icon-thumb']}>
      <Icon className={css['logo__icon']} width={21} height={21} fragment={'logo'} />
    </div>
  );
};
