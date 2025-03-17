import { toggleModal, toggleScrollLock } from '@helpers';

import type { IBackdropClickHandle } from '@types';

export const backdropClickHandle: IBackdropClickHandle = (event, setIsModalOpen) => {
  if (event.target === event.currentTarget) {
    toggleModal('close', setIsModalOpen);

    toggleScrollLock();
  }
};
