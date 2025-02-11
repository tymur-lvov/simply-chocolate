import { Icon, Image, Title } from '@components';

import { ingredientsItemModule as css } from '@styles';

import type { IIngredientsItem } from '@types';

export const IngredientsItem: IIngredientsItem = ({ data: { link, icon, image, title } }) => {
  return (
    <>
      <a className={css.ingredients_link} href={link.href}>
        <Icon className={css.ingredients_icon} data={icon} />
        <Image className={css.ingredients_image} data={image} />
        <Title className={css.ingredients_title} data={title} />
      </a>
    </>
  );
};
