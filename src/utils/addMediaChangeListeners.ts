export const addMediaChangeListeners = (mediaList, mediaStateChangeHandle) => {
  Object.values(mediaList).forEach((media) => {
    media.addEventListener('change', mediaStateChangeHandle);
  });
};
