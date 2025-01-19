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
          <div className={css['hero__main-buttons-wrapper']}>
            <Button
              className={`${css['hero__main-button']} ${css['hero__main-button--order']}`}
              text={data.orderButton}
            />
            <Button
              className={`${css['hero__main-button']} ${css['hero__main-button--info']}`}
              text={data.infoButton}
            />
          </div>
          <a className={css['hero__scroll-link']} href='#'>
            <div className={css['hero__scroll-wrapper']}>
              <p className={css['hero__scroll-label']}>{data.scrollButton}</p>
              <button className={css['hero__scroll-button']} type='button'>
                <Icon
                  className={css['hero__scroll-icon']}
                  width={16}
                  height={16}
                  fragment='arrow_down'
                  fill='var(--orange)'
                />
              </button>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};
