import type { IRemoveKeydownEventListener } from '@types';

export const removeKeydownEventListener: IRemoveKeydownEventListener = (
  keydownHandle,
  setIsModalOpen
) => {
  document.removeEventListener('keydown', (event) => keydownHandle(event, setIsModalOpen));
};
