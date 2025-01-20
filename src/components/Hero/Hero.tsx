import { useMedia } from '@hooks';

import { Button, Icon } from '@components';

import { HeroData as data } from '@data';

import { HeroModule as css } from '@styles';

export const Hero = () => {
  const [isMobile] = useMedia();

  return (
    <div className={'container'}>
      <section className={css['hero']}>
        <h1 className={css['hero__title']}>
          {isMobile ? data.title.mobile.text : data.title.tablet.text}
        </h1>
        <div className={css['hero__nav-wrapper']}>
          <div className={css['hero__main-btns-wrapper']}>
            {data.mainBtns.map(({ className, text }) => (
              <Button
                className={`${css['hero__main-btn']} ${css[className]}`}
                text={text}
                key={className}
              />
            ))}
          </div>
          <a className={css['hero__scroll-link']} href='#'>
            <div className={css['hero__scroll-wrapper']}>
              <p className={css['hero__scroll-label']}>{data.scrollBtn.text}</p>
              <div className={css['hero__scroll-icon-thumb']}>
                <Icon
                  className={css['hero__scroll-icon']}
                  width={16}
                  height={16}
                  fragment='arrow-down'
                />
              </div>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};
