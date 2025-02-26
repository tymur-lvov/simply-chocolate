import type { IAddKeydownEventListener } from '@types';

export const addKeydownEventListener: IAddKeydownEventListener = (
  keydownHandle,
  setIsModalOpen
) => {
  document.addEventListener('keydown', (event) => keydownHandle(event, setIsModalOpen));
};
