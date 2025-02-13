import type { IRecipeItem } from '@types';

export const RecipeItem: IRecipeItem = ({ data: { text } }) => {
  return <>{text}</>;
};
