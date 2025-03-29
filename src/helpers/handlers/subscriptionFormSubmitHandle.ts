import { toggleScrollLock } from '@helpers';

import type { ISubscriptionFormSubmitHandle } from '@types';

export const subscriptionFormSubmitHandle: ISubscriptionFormSubmitHandle = (
  event,
  setIsModalOpen
) => {
  event.preventDefault();

  const form = event.currentTarget as HTMLFormElement;

  const field = form.elements.namedItem('email') as HTMLInputElement;

  if (!field.value) {
    return;
  }

  toggleScrollLock();

  setIsModalOpen(true);

  form.reset();
};
