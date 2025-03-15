import type { IReviewFieldErrorIconClickHandle } from '@types';

export const reviewFieldErrorIconClickHandle: IReviewFieldErrorIconClickHandle = (
  fieldIndex,
  isFieldValid,
  reviewFormStatus,
  setReviewFormStatus
) => {
  if (reviewFormStatus.event.isSubmitAttempted && !isFieldValid) {
    setReviewFormStatus?.((prev) => ({
      ...prev,
      error: {
        ...prev.error,
        isErrorPopupVisible: !prev.error.isErrorPopupVisible,
        errorFieldIndex: fieldIndex,
      },
    }));
  }
};
