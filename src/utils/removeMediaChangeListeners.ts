import type { IRemoveMediaChangeListeners } from '@types';

export const removeMediaChangeListeners: IRemoveMediaChangeListeners = (
  mediaList,
  mediaStateChangeHandle
) => {
  Object.values(mediaList).forEach((media) => {
    media.removeEventListener('change', mediaStateChangeHandle);
  });
};
