// import { useMedia } from '@hooks';

import { HeroTitleModule as css } from '@styles';

import type { IHeroTitle } from '@types';

export const HeroTitle: IHeroTitle = ({ title: { mobileText, tabletText } }) => {
  // const { isMobile } = useMedia();
  const isMobile = true;

  return (
    <h1 className={css['hero__title']}>
      {isMobile && mobileText}
      {!isMobile && tabletText}
    </h1>
  );
};
