import { clsx } from 'clsx';

import { Icon, RecipeList, SectionTitle, Title } from '@components';

import { CONTAINER, SECTION, SECTION_TITLE, SECTION_TITLE_ACCENT } from '@constants';

import { howItsMadeModule as css } from '@styles';

import type { IHowItsMade } from '@types';

export const HowItsMade: IHowItsMade = ({
  data: { sectionTitle, videoThumb, title, recipeList },
}) => {
  return (
    <section className={clsx(css.how_its_made_section, SECTION)}>
      <div className={clsx(css.how_its_made_container, CONTAINER)}>
        <SectionTitle classNames={[SECTION_TITLE, SECTION_TITLE_ACCENT]} data={sectionTitle} />
        <div className={css.how_its_made_video_thumb_recipe_list_wrapper}>
          <div className={css.how_its_made_video_thumb} tabIndex={0}>
            <Icon className={css.how_its_made_video_thumb_icon} data={videoThumb.icon} />
          </div>
          <div className={css.how_its_made_recipe_list_wrapper}>
            <Title className={css.how_its_made_title} data={title} />
            <RecipeList data={recipeList} />
          </div>
        </div>
      </div>
    </section>
  );
};
