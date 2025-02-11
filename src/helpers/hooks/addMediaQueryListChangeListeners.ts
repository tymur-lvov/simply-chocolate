import type { IAddMediaQueryListChangeListeners } from '@types';

export const addMediaQueryListChangeListeners: IAddMediaQueryListChangeListeners = (
  mediaQueryLists,
  mediaQueryListChangeHandle
) => {
  Object.values(mediaQueryLists).forEach((mediaQueryList) => {
    mediaQueryList.addEventListener('change', mediaQueryListChangeHandle);
  });
};
