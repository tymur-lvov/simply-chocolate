import { clsx } from 'clsx';

import { Icon, Button, MainTitle } from '@components';

import { HeroData as data } from '@data';

import { HeroModule as css } from '@styles';

import type { IHero } from '@types';

export const Hero: IHero = () => {
  return (
    <section>
      <div className={clsx(css['hero__container'], 'container')}>
        <MainTitle block='hero' data={data.mainTitle} />
        <div className={css['hero__interactive-elements-wrapper']}>
          <div className={css['hero__order-info-btns-wrapper']}>
            <Button className={clsx(css['hero__order-btn'], css['hero__btn'])}>
              {data.orderButton.text}
            </Button>
            <Button className={clsx(css['hero__info-btn'], css['hero__btn'])}>
              {data.infoButton.text}
            </Button>
          </div>
          <a className={css['hero__scroll-link']} href='/'>
            {data.scrollLink.text}
            <Icon
              className={css['hero__scroll-icon']}
              fragment='arrow_down'
              width={16}
              height={16}
            />
          </a>
        </div>
      </div>
    </section>
  );
};
