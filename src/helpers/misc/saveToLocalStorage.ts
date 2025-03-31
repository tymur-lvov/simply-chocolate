import type { ISaveToLocalStorage } from '@types';

export const saveToLocalStorage: ISaveToLocalStorage = (key, data) => {
  localStorage.setItem(key, data);
};
