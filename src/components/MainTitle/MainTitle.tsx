import { useMedia } from '@hooks';

import type { IMainTitle } from '@types';

export const MainTitle: IMainTitle = ({ className, data: { textVersions } }) => {
  const { isMobile } = useMedia();

  return (
    <>
      {textVersions && (
        <h1 className={className}>
          {isMobile && textVersions.mobile.text}
          {!isMobile && textVersions.tablet.text}
        </h1>
      )}
    </>
  );
};
