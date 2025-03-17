import { validateReviewField } from '@helpers';

import type { IReviewFieldChangeHandle } from '@types';

export const reviewFieldChangeHandle: IReviewFieldChangeHandle = (
  event,
  setFormStatus,
  setIsFieldValid
) => {
  const field = event.target as HTMLInputElement;

  const errorKey = `is${field.id.charAt(0).toUpperCase() + field.id.slice(1)}Error`;

  const isFieldValid = validateReviewField(field);

  setFormStatus?.((prev) => ({
    ...prev,
    isAnyFieldChanged: true,
    fieldsErrorStatus: {
      ...prev.fieldsErrorStatus,
      [errorKey]: !isFieldValid,
    },
  }));

  setIsFieldValid(isFieldValid);
};
