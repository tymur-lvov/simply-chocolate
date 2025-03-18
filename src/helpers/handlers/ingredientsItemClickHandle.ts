import { toggleModal, toggleScrollLock } from '@helpers';

import type { IIngredientsItemClickHandle } from '@types';

export const ingredientsItemClickHandle: IIngredientsItemClickHandle = (setIsModalOpen) => {
  toggleModal('open', setIsModalOpen);

  toggleScrollLock();
};
