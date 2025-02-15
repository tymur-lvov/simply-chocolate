import { Button, Description, Image, Title } from '@components';

import { productsItemModule as css } from '@styles';

import type { IProductsItem } from '@types';

export const ProductsItem: IProductsItem = ({ data: { image, title, description, button } }) => {
  return (
    <>
      <Image className={css.products_item_image} data={image} />
      <Title className={css.products_item_title} data={title} />
      <Description className={css.products_item_description} data={description} />
      <Button className={css.products_item_button} data={button} />
    </>
  );
};
