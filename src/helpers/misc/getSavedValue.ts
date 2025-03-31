import type { IGetSavedValue } from '@types';

export const getSavedValue: IGetSavedValue = (key) => {
  return localStorage.getItem(key);
};
