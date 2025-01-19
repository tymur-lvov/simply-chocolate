import { useMedia } from '@hooks';

import { Button, Icon } from '@components';

import { HeroData as data } from '@data';

import { HeroModule as css } from '@styles';

export const Hero = () => {
  const [isMobile] = useMedia();

  return (
    <div className={'container'}>
      <section className={css['hero']}>
        <div className={css['hero__wrapper']}>
          <h1 className={css['hero__title']}>{data.title[isMobile ? 'mobile' : 'tablet']}</h1>
          <div className={css['hero__main-btns-wrapper']}>
            <Button
              className={`${css['hero__main-btn']} ${css['hero__main-btn--order']}`}
              text={data.orderBtn}
            />
            <Button
              className={`${css['hero__main-btn']} ${css['hero__main-btn--info']}`}
              text={data.infoBtn}
            />
          </div>
          <a className={css['hero__scroll-link']} href='#'>
            <div className={css['hero__scroll-wrapper']}>
              <p className={css['hero__scroll-label']}>{data.scrollBtn}</p>
              <Button className={css['hero__scroll-btn']}>
                <Icon
                  className={css['hero__scroll-icon']}
                  width={16}
                  height={16}
                  fragment='arrow-down'
                  fill='var(--orange)'
                />
              </Button>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};
