import {
  Hero,
  Header,
  Footer,
  Reviews,
  Benefits,
  Products,
  HowItsMade,
  TopSellers,
  Ingredients,
} from '@components';

import {
  HERO_DATA,
  HEADER_DATA,
  FOOTER_DATA,
  REVIEWS_DATA,
  BENEFITS_DATA,
  PRODUCTS_DATA,
  INGREDIENTS_DATA,
  TOP_SELLERS_DATA,
  HOW_ITS_MADE_DATA,
} from '@data';

export const App = () => {
  return (
    <>
      <Header data={HEADER_DATA} />
      <main>
        <Hero data={HERO_DATA} />
        <Benefits data={BENEFITS_DATA} />
        <Ingredients data={INGREDIENTS_DATA} />
        <HowItsMade data={HOW_ITS_MADE_DATA} />
        <Products data={PRODUCTS_DATA} />
        <TopSellers data={TOP_SELLERS_DATA} />
        <Reviews data={REVIEWS_DATA} />
      </main>
      <Footer data={FOOTER_DATA} />
    </>
  );
};
