import { container } from '@constants';

import { HeroModule as css } from '@styles';

export const Hero = () => {
  return (
    <div className={container}>
      <section className={css.hero}>
        <div className={css.hero__container}>
          <h1 className={css.hero__title}>
            Treat yourself or a loved one to our finest ingredients for a moment of pure delight!
          </h1>
          <div className={css.hero__main_buttons_container}></div>
        </div>
      </section>
    </div>
  );
};
