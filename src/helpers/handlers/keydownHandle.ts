import { toggleModal } from '@helpers';

import type { IKeydownHandle } from '@types';

export const keydownHandle: IKeydownHandle = (event, setIsModalOpen) => {
  if (event.key === 'Escape') {
    toggleModal('close', setIsModalOpen);
  }
};
