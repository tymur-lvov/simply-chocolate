import type { IToggleModal } from '@types';

export const toggleModal: IToggleModal = (action, setIsModalOpen) => {
  if (action === 'open') {
    setIsModalOpen(true);
  }

  if (action === 'close') {
    setIsModalOpen(false);
  }
};
