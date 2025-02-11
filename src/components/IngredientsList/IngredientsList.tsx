import { IngredientsItem } from '@components';

import { ingredientsListModule as css } from '@styles';

import type { IIngredientsList } from '@types';

export const IngredientsList: IIngredientsList = ({ data: { ingredientsItems } }) => {
  return (
    <ul className={css.ingredients_list}>
      {ingredientsItems.map((ingredientsItem) => (
        <li className={css.ingredients_item} key={ingredientsItem.title}>
          <IngredientsItem data={ingredientsItem} />
        </li>
      ))}
    </ul>
  );
};
