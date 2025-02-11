import { Benefits, Hero, Ingredients } from '@components';

import type { IMain } from '@types';

export const Main: IMain = () => {
  return (
    <main>
      <Hero />
      <Benefits />
      <Ingredients />
    </main>
  );
};
