import { clsx } from 'clsx';

import { Icon, RecipeList, SectionTitle, Title } from '@components';

import { CONTAINER, SECTION } from '@constants';

import { HOW_ITS_MADE_DATA as data } from '@data';

import { howItsMadeModule as css } from '@styles';

import type { IHowItsMade } from '@types';

export const HowItsMade: IHowItsMade = () => {
  return (
    <section className={clsx(css.how_its_made_section, SECTION)}>
      <div className={clsx(css.how_its_made_container, CONTAINER)}>
        <SectionTitle
          classNames={[css.how_its_made_section_title, css.how_its_made_section_title_accent]}
          data={data.sectionTitle}
        />
        <div className={css.how_its_made_video_thumb_recipe_list_wrapper}>
          <div className={css.how_its_made_video_thumb} tabIndex={0}>
            <Icon className={css.how_its_made_video_thumb_icon} data={data.videoThumb.icon} />
          </div>
          <div className={css.how_its_made_recipe_list_wrapper}>
            <Title className={css.how_its_made_title} data={data.title} />
            <RecipeList data={data.recipeList} />
          </div>
        </div>
      </div>
    </section>
  );
};
