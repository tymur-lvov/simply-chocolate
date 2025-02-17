import {
  Hero,
  Header,
  Reviews,
  Benefits,
  Products,
  HowItsMade,
  Ingredients,
  TopSellers,
} from '@components';

import {
  HERO_DATA,
  HEADER_DATA,
  REVIEWS_DATA,
  BENEFITS_DATA,
  INGREDIENTS_DATA,
  TOP_SELLERS_DATA,
  HOW_ITS_MADE_DATA,
  OUR_PRODUCTS_DATA,
} from '@data';

export const App = () => {
  return (
    <>
      <header>
        <Header data={HEADER_DATA} />
      </header>
      <main>
        <Hero data={HERO_DATA} />
        <Benefits data={BENEFITS_DATA} />
        <Ingredients data={INGREDIENTS_DATA} />
        <HowItsMade data={HOW_ITS_MADE_DATA} />
        <Products data={OUR_PRODUCTS_DATA} />
        <TopSellers data={TOP_SELLERS_DATA} />
        <Reviews data={REVIEWS_DATA} />
      </main>
    </>
  );
};
