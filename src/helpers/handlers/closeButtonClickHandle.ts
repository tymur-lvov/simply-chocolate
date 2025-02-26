import { toggleModal } from '@helpers';

import type { ICloseButtonClickHandle } from '@types';

export const closeButtonClickHandle: ICloseButtonClickHandle = (event, setIsModalOpen) => {
  const parentButton = (event.target as HTMLElement).closest('button');

  if (parentButton?.className.includes('close_button')) {
    toggleModal('close', setIsModalOpen);
  }
};
