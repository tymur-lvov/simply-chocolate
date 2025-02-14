import { Header, Benefits, Hero, HowItsMade, Ingredients } from '@components';

import { HEADER_DATA, HERO_DATA, BENEFITS_DATA, INGREDIENTS_DATA, HOW_ITS_MADE_DATA } from '@data';

export const App = () => {
  return (
    <>
      <Header data={HEADER_DATA} />
      <main>
        <Hero data={HERO_DATA} />
        <Benefits data={BENEFITS_DATA} />
        <Ingredients data={INGREDIENTS_DATA} />
        <HowItsMade data={HOW_ITS_MADE_DATA} />
      </main>
    </>
  );
};
