import { clsx } from 'clsx';

import { IngredientsList, SectionTitle } from '@components';

import { CONTAINER, SECTION } from '@constants';

import { INGREDIENTS_DATA as data } from '@data';

import { ingredientsModule as css } from '@styles';

import type { IIngredients } from '@types';

export const Ingredients: IIngredients = () => {
  return (
    <section className={clsx(css.ingredients, SECTION)}>
      <div className={clsx(css.ingredients_container, CONTAINER)}>
        <SectionTitle
          classNames={[css.ingredients_section_title, css.ingredients_title_accent]}
          data={data.sectionTitle}
        />
        <IngredientsList data={data.ingredientsList} />
      </div>
    </section>
  );
};
