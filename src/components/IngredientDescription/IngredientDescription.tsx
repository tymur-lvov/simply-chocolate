import { ingredientDescriptionModule as css } from '@styles';

import type { IIngredientDescription } from '@types';

export const IngredientDescription: IIngredientDescription = ({ data: { title, description } }) => {
  return (
    <>
      <h3 className={css.modal_title}>{title.text}</h3>
      <p className={css.modal_description}>{description.text}</p>
    </>
  );
};
