import { Icon } from '@components';

import { ScrollLinkModule as css } from '@styles';

import type { IScrollLink } from '@types';

export const ScrollLink: IScrollLink = ({ scrollLink: { text } }) => {
  return (
    <a className={css['hero__scroll-link']} href='/'>
      {text}
      <div className={css['hero__scroll-icon-thumb']}>
        <Icon className={css['hero__scroll-icon']} width={16} height={16} fragment='arrow-down' />
      </div>
    </a>
  );
};
