import { container } from '@constants';

import { Button, Icon } from '@components';

import { HeroData as data } from '@data';

import { HeroModule as css } from '@styles';

export const Hero = () => {
  return (
    <div className={container}>
      <section className={css['hero']}>
        <div className={css['hero__container']}>
          <h1 className={css['hero__container__title']}>{data.title}</h1>
          <div className={css['hero__container__main-buttons-container']}>
            <Button
              className={css['hero__container__main-buttons-container__order-btn']}
              text={data.orderBtn}
            />
            <Button
              className={css['hero__container__main-buttons-container__info-btn']}
              text={data.infoBtn}
            />
          </div>
          <a className={css['hero__container__aux-buttons-link']} href='#'>
            <div className={css['hero__container__aux-buttons-link__aux-buttons-container']}>
              <p className={css['hero__container__aux-buttons-link__aux-buttons-container__text']}>
                {data.auxBtn}
              </p>
              <div
                className={
                  css['hero__container__aux-buttons-link__aux-buttons-container__icon-thumb']
                }
              >
                <Icon
                  className={
                    css[
                      'hero__container__aux-buttons-link__aux-buttons-container__icon-thumb__icon'
                    ]
                  }
                  width={16}
                  height={16}
                  fragment='arrow_down'
                  fill='var(--orange)'
                />
              </div>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};
