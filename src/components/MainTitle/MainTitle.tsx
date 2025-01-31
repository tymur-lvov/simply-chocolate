import { clsx } from 'clsx';

import { useMedia } from '@hooks';

import { mainTitleModule as css } from '@styles';

import type { IMainTitle } from '@types';

export const MainTitle: IMainTitle = ({ block, data: { mobile, tablet } }) => {
  const { isMobile } = useMedia();

  return (
    <h1 className={clsx(css[`${block}__main-title`], css['main-title'])}>
      {isMobile && mobile.text}
      {!isMobile && tablet?.text}
    </h1>
  );
};
