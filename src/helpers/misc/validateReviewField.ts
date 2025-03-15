import { REVIEW_FIELD_INPUT_REGEXP } from '@constants';

import type { IValidateReviewField } from '@types';

export const validateReviewField: IValidateReviewField = (field) => {
  const fieldName = field.id as keyof typeof REVIEW_FIELD_INPUT_REGEXP | 'privacy';

  if (fieldName === 'privacy') {
    return field.checked;
  }

  return REVIEW_FIELD_INPUT_REGEXP[fieldName].test(field.value);
};
