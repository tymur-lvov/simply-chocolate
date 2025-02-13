import { RecipeItem } from '@components';

import { recipeListModule as css } from '@styles';

import type { IRecipeList } from '@types';

export const RecipeList: IRecipeList = ({ data: { recipeItems } }) => {
  return (
    <ul className={css.recipe_list}>
      {recipeItems.map((recipeItem) => (
        <li className={css.recipe_list_item} key={recipeItem.text}>
          <RecipeItem data={recipeItem} />
        </li>
      ))}
    </ul>
  );
};
