import type { IReviewFormClickHandle } from '@types';

export const reviewFormClickHandle: IReviewFormClickHandle = (event, setFormStatus) => {
  const element = event.target as HTMLElement;

  if (element.nodeName !== 'svg' && element.nodeName !== 'use') {
    setFormStatus((prev) => ({
      ...prev,
      isErrorPopupVisible: false,
      errorFieldIndex: null,
    }));
  }
};
