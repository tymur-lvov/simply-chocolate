import { useMedia } from '@hooks';

import type { IMainTitle } from '@types';

export const MainTitle: IMainTitle = ({ className, data: { text } }) => {
  const { isMobile } = useMedia();

  return (
    <h1 className={className}>
      {isMobile && text.mobile}
      {!isMobile && text.tablet}
    </h1>
  );
};
