import type { IRemoveMediaQueryListChangeListeners } from '@types';

export const removeMediaQueryListChangeListeners: IRemoveMediaQueryListChangeListeners = (
  mediaQueryLists,
  mediaQueryListChangeHandle
) => {
  Object.values(mediaQueryLists).forEach((mediaQueryList) => {
    mediaQueryList.removeEventListener('change', mediaQueryListChangeHandle);
  });
};
