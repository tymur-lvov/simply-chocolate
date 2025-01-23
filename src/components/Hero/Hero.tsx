import { CtaButtons, HeroTitle, Icon } from '@components';

import { HeroData as data } from '@data';

import { HeroModule as css } from '@styles';

export const Hero = () => {
  return (
    <div className={'container'}>
      <section className={css['hero']}>
        <HeroTitle title={data.title} />
        <div className={css['hero__cta-btns-scroll-link-wrapper']}>
          <CtaButtons ctaBtns={data.ctaBtns} />
          <a className={css['hero__scroll-link']} href='/'>
            {data.scrollBtn.text}
            <div className={css['hero__scroll-icon-thumb']}>
              <Icon
                className={css['hero__scroll-icon']}
                width={16}
                height={16}
                fragment='arrow-down'
              />
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};
