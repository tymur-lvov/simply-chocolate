export const removeMediaChangeListeners = (mediaList, mediaStateChangeHandle) => {
  Object.values(mediaList).forEach((media) => {
    media.removeEventListener('change', mediaStateChangeHandle);
  });
};
