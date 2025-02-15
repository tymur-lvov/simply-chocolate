import { ProductsItem } from '@components';

import { productsListModule as css } from '@styles';

import type { IProductsList } from '@types';

export const ProductsList: IProductsList = ({ data: { productsItems } }) => {
  return (
    <ul className={css.products_list}>
      {productsItems.map((productsItem) => (
        <li className={css.products_item} key={productsItem.image.alt}>
          <ProductsItem data={productsItem} />
        </li>
      ))}
    </ul>
  );
};
