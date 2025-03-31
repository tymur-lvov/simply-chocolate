import { clsx } from 'clsx';

import { Icon, MainTitle } from '@components';

import { CONTAINER } from '@constants';

import { heroModule as css } from '@styles';

import type { IHero } from '@types';

export const Hero: IHero = ({ data }) => {
  return (
    <section className={clsx(css.hero)}>
      <div className={clsx(css.hero_container, CONTAINER)}>
        <div className={css.hero_bg_thumb}>
          <MainTitle className={css.hero_main_title} data={data.mainTitle} />
          <div className={css.hero_interactive_elements_wrapper}>
            <div className={css.hero_order_info_btns_wrapper}>
              <a className={clsx(css.hero_order_link, css.hero_link)} href={data.orderLink.href}>
                {data.orderLink.text}
              </a>
              <a className={clsx(css.hero_info_link, css.hero_link)} href={data.infoLink.href}>
                {data.infoLink.text}
              </a>
            </div>
            <a className={css.hero_scroll_link} href={data.scrollBlock.link.href}>
              {data.scrollBlock.link.text}
              <Icon className={css.hero_scroll_icon} data={data.scrollBlock.icon} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
