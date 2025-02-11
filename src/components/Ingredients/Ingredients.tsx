import { clsx } from 'clsx';

import { IngredientsList, SectionTitle } from '@components';

import { CONTAINER, VISUALLY_HIDDEN } from '@constants';

import { INGREDIENTS_DATA as data } from '@data';

import { ingredientsModule as css } from '@styles';

import type { IIngredients } from '@types';

export const Ingredients: IIngredients = () => {
  return (
    <section className={css.ingredients}>
      <div className={clsx(css.ingredients_container, CONTAINER)}>
        <SectionTitle className={VISUALLY_HIDDEN} data={data.sectionTitle} />
        <IngredientsList data={data.ingredientsList} />
      </div>
    </section>
  );
};
