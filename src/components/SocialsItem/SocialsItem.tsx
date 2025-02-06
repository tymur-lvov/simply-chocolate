import { clsx } from 'clsx';
import { useState } from 'react';

import { socialsLinkClickHandle } from '@helpers';

import { Icon } from '@components';

import { socialsItemModule as css } from '@styles';

import type { ISocialsItem } from '@types';

export const SocialsItem: ISocialsItem = ({
  variant,
  data: {
    link: { ...props },
    icon,
  },
}) => {
  const [linkClickCount, setLinkClickCount] = useState(0);

  return (
    <a
      className={clsx(css[variant], css.socials_link)}
      onClick={() => socialsLinkClickHandle(setLinkClickCount)}
      key={linkClickCount}
      {...props}
    >
      <Icon className={clsx(css[variant], css.socials_icon)} data={icon} />
    </a>
  );
};
