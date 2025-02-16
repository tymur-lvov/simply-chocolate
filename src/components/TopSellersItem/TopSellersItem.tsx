import { Description, Image, Title } from '@components';

import { topSellersItemModule as css } from '@styles';

import type { ITopSellersItem } from '@types';

export const TopSellersItem: ITopSellersItem = ({ data: { image, title, description } }) => {
  return (
    <>
      <div className={css.top_sellers_item_overlay}>
        <Description className={css.top_sellers_item_description} data={description} />
      </div>
      <Image className={css.top_sellers_item_image} data={image} />
      <div className={css.top_sellers_item_title_thumb}>
        <Title className={css.top_sellers_item_title} data={title} />
      </div>
    </>
  );
};
