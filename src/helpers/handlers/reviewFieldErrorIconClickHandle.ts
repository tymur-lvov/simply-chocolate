import type { IReviewFieldErrorIconClickHandle } from '@types';

export const reviewFieldErrorIconClickHandle: IReviewFieldErrorIconClickHandle = (
  formStatus,
  fieldIndex,
  isFieldValid,
  setFormStatus
) => {
  const { isSubmitAttempted } = formStatus;

  if (isSubmitAttempted && !isFieldValid) {
    setFormStatus?.((prev) => ({
      ...prev,
      isErrorPopupVisible: !prev.isErrorPopupVisible,
      errorFieldIndex: fieldIndex,
    }));
  }
};
