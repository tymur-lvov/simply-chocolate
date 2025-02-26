import { toggleModal } from '@helpers';

import type { IReviewsButtonClickHandle } from '@types';

export const reviewsButtonClickHandle: IReviewsButtonClickHandle = (setIsModalOpen) => {
  toggleModal('open', setIsModalOpen);
};
