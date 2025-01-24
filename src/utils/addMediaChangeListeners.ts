import type { IAddMediaChangeListeners } from '@types';

export const addMediaChangeListeners: IAddMediaChangeListeners = (
  mediaList,
  mediaStateChangeHandle
) => {
  Object.values(mediaList).forEach((media) => {
    media.addEventListener('change', mediaStateChangeHandle);
  });
};
