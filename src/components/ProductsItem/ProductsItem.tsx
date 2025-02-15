import { Description, Image, Title } from '@components';

import { productsItemModule as css } from '@styles';

import type { IProductsItem } from '@types';

export const ProductsItem: IProductsItem = ({
  data: { link, image, title, description, price },
}) => {
  return (
    <a className={css.products_item_link} href={link.href}>
      <Image className={css.products_item_image} data={image} />
      <Title className={css.products_item_title} data={title} />
      <Description className={css.products_item_description} data={description} />
      <div className={css.products_item_price}>{price}</div>
    </a>
  );
};
