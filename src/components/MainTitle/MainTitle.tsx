import { useMedia } from '@hooks';

import { MainTitleModule as css } from '@styles';

import type { IMainTitle } from '@types';

export const MainTitle: IMainTitle = ({ block, data: { mobile, tablet } }) => {
  const { isMobile } = useMedia();

  return (
    <h1 className={css[`${block}__main-title`]}>
      {isMobile && mobile.text}
      {!isMobile && tablet?.text}
    </h1>
  );
};
