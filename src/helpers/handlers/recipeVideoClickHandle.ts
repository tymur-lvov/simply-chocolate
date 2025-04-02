import { toggleScrollLock } from '@helpers';

import type { IRecipeVideoClickHandle } from '@types';

export const recipeVideoClickHandle: IRecipeVideoClickHandle = (setIsVideoOpen) => {
  setIsVideoOpen(true);

  toggleScrollLock();
};
