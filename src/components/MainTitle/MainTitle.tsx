import { useMedia } from '@hooks';

import type { IMainTitle } from '@types';

export const MainTitle: IMainTitle = ({ className, data: { textParts } }) => {
  const { isMobile } = useMedia();

  return (
    <h1 className={className}>
      {isMobile && textParts?.mobile}
      {!isMobile && textParts?.tablet}
    </h1>
  );
};
