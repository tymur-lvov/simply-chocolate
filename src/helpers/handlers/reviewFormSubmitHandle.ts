import type { IReviewFormSubmitHandle } from '@types';

export const reviewFormSubmitHandle: IReviewFormSubmitHandle = (
  event,
  reviewFormStatus,
  setReviewFormStatus
) => {
  event.preventDefault();

  setReviewFormStatus((prev) => ({
    ...prev,
    event: {
      ...prev.event,
      isSubmitAttempted: true,
    },
  }));

  if (!reviewFormStatus.event.isAnyFieldChanged) {
    return;
  }

  const errorKeys = Object.keys(reviewFormStatus.error);

  const formError = errorKeys.some((key) => reviewFormStatus[key as keyof typeof reviewFormStatus]);

  if (formError) {
    return;
  }
};
