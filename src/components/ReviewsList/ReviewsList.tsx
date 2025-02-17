import { ReviewsItem } from '@components';

import { reviewsListModule as css } from '@styles';

import type { IReviewsList } from '@types';

export const ReviewsList: IReviewsList = ({ data: { reviewsItems } }) => {
  return (
    <ul className={css.reviews_list}>
      {reviewsItems.map((reviewsItem) => (
        <li className={css.reviews_item} key={reviewsItem.title}>
          <ReviewsItem data={reviewsItem} />
        </li>
      ))}
    </ul>
  );
};
