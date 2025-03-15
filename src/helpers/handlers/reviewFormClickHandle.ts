import type { IReviewFormClickHandle } from '@types';

export const reviewFormClickHandle: IReviewFormClickHandle = (event, setReviewFormStatus) => {
  const element = event.target as HTMLElement;

  if (element.nodeName !== 'svg' && element.nodeName !== 'use') {
    setReviewFormStatus((prev) => ({
      ...prev,
      error: {
        ...prev.error,
        isErrorPopupVisible: false,
        errorFieldIndex: null,
      },
    }));
  }
};
