import { Description, Image, Title } from '@components';

import { reviewsItemModule as css } from '@styles';

import type { IReviewsItem } from '@types';

export const ReviewsItem: IReviewsItem = ({ data: { image, title, description } }) => {
  return (
    <>
      <Image className={css.reviews_item_image} data={image} />
      <Title className={css.reviews_item_title} data={title} />
      <Description className={css.reviews_item_description} data={description} />
    </>
  );
};
