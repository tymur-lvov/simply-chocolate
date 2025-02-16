import { clsx } from 'clsx';

import { SectionTitle, TopSellersList } from '@components';

import { CONTAINER, SECTION, SECTION_TITLE, SECTION_TITLE_ACCENT } from '@constants';

import { topSellersModule as css } from '@styles';

import type { ITopSellers } from '@types';

export const TopSellers: ITopSellers = ({ data: { sectionTitle, topSellersList } }) => {
  return (
    <section className={clsx(css.top_sellers_section, SECTION)}>
      <div className={clsx(css.top_sellers_container, CONTAINER)}>
        <SectionTitle classNames={[SECTION_TITLE, SECTION_TITLE_ACCENT]} data={sectionTitle} />
        <TopSellersList data={topSellersList} />
      </div>
    </section>
  );
};
