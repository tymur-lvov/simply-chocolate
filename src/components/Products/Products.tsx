import { clsx } from 'clsx';

import { ProductsList, SectionTitle } from '@components';

import { CONTAINER, SECTION, SECTION_TITLE, SECTION_TITLE_ACCENT } from '@constants';

import { productsModule as css } from '@styles';

import type { IProducts } from '@types';

export const Products: IProducts = ({ data: { sectionTitle, productsList } }) => {
  return (
    <section className={clsx(css.our_products, SECTION)}>
      <div className={clsx(css.our_products_container, CONTAINER)}>
        <SectionTitle classNames={[SECTION_TITLE, SECTION_TITLE_ACCENT]} data={sectionTitle} />
        <ProductsList data={productsList} />
      </div>
    </section>
  );
};
