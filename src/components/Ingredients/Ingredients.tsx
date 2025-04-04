import { clsx } from 'clsx';

import { IngredientsList, SectionTitle } from '@components';

import { CONTAINER, SECTION, SECTION_TITLE, SECTION_TITLE_ACCENT } from '@constants';

import { ingredientsModule as css } from '@styles';

import type { IIngredients } from '@types';

export const Ingredients: IIngredients = ({ data }) => {
  return (
    <section className={clsx(css.ingredients, SECTION)} id={'ingredients_section'}>
      <div className={clsx(css.ingredients_container, CONTAINER)}>
        <SectionTitle
          classNames={[SECTION_TITLE, SECTION_TITLE_ACCENT, css.ingredients_section_title]}
          data={data.sectionTitle}
        />
        <IngredientsList data={data.ingredientsList} />
      </div>
    </section>
  );
};
