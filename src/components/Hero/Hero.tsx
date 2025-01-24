import { clsx } from 'clsx';

import { CtaButtons, HeroTitle, ScrollLink } from '@components';

import { HeroData as data } from '@data';

import { HeroModule as css } from '@styles';

export const Hero = () => {
  return (
    <section>
      <div className={clsx('container', css['hero__container'])}>
        <HeroTitle title={data.title} />
        <div className={css['hero__cta-btns-scroll-link-wrapper']}>
          <CtaButtons ctaButtons={data.ctaButtons} />
          <ScrollLink scrollLink={data.scrollLink} />
        </div>
      </div>
    </section>
  );
};
