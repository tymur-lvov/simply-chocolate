import { saveToLocalStorage, validateReviewField } from '@helpers';

import type { IReviewFieldChangeHandle } from '@types';

export const reviewFieldChangeHandle: IReviewFieldChangeHandle = (
  event,
  setFormStatus,
  setIsFieldValid
) => {
  const field = event.target as HTMLInputElement;

  const errorKey = `is${field.id.charAt(0).toUpperCase() + field.id.slice(1)}Error`;

  const isFieldValid = validateReviewField(field);

  setIsFieldValid(isFieldValid);

  setFormStatus?.((prev) => ({
    ...prev,
    isAnyFieldChanged: true,
    fieldsErrorStatus: {
      ...prev.fieldsErrorStatus,
      [errorKey]: !isFieldValid,
    },
  }));

  if (field.id === 'privacy' && !field.checked) {
    saveToLocalStorage(field.id, '');

    return;
  }

  saveToLocalStorage(field.id, field.value);
};
