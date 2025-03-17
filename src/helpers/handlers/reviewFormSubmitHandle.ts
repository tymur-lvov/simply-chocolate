import { getReviewFormFields, validateReviewField } from '@helpers';

import type { IReviewFormSubmitHandle } from '@types';

export const reviewFormSubmitHandle: IReviewFormSubmitHandle = (
  event,
  formStatus,
  setFormStatus,
  setIsOnSubmitModalOpen,
  setIsReviewFormModalOpen
) => {
  event.preventDefault();

  setFormStatus((prev) => ({ ...prev, isSubmitAttempted: true }));

  const { isAnyFieldChanged } = formStatus;

  const form = event.currentTarget as HTMLFormElement;

  const formFields = getReviewFormFields(form);

  const fieldKeys = Object.keys(formFields);

  const isAnyFieldInvalid = fieldKeys.some(
    (key) => !validateReviewField(formFields[key as keyof typeof formFields])
  );

  if (!isAnyFieldChanged || isAnyFieldInvalid) {
    return;
  }

  setIsOnSubmitModalOpen(true);

  setIsReviewFormModalOpen(false);

  form.reset();
};
