import { Header, Benefits, Hero, HowItsMade, Ingredients, Products } from '@components';

import {
  HEADER_DATA,
  HERO_DATA,
  BENEFITS_DATA,
  INGREDIENTS_DATA,
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
      </main>
    </>
  );
};
