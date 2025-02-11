import { Icon, Image, Title } from '@components';

import { ingredientsItemModule as css } from '@styles';

import type { IIngredientsItem } from '@types';

export const IngredientsItem: IIngredientsItem = ({ data: { icon, image, title } }) => {
  return (
    <>
      <Icon data={icon} />
      <Image className={css.ingredients_image} data={image} />
      <Title className={css.ingredients_title} data={title} />
    </>
  );
};
