import { validateReviewField } from '@helpers';

import type { IReviewFieldChangeHandle } from '@types';

export const reviewFieldChangeHandle: IReviewFieldChangeHandle = (
  event,
  setReviewFormStatus,
  setIsFieldValid
) => {
  const field = event.target as HTMLInputElement;

  const errorKey = `is${field.id.charAt(0).toUpperCase() + field.id.slice(1)}Error`;

  const isFieldValid = validateReviewField(field);

  setReviewFormStatus?.((prev) => ({
    event: {
      ...prev.event,
      isAnyFieldChanged: true,
    },
    error: {
      ...prev.error,
      [errorKey]: !isFieldValid,
    },
  }));

  setIsFieldValid(isFieldValid);
};
