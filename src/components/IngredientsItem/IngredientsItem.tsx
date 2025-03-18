import { useState } from 'react';

import { ingredientsItemClickHandle } from '@helpers';

import { Icon, Image, Modal, Portal, Title, IngredientDescription } from '@components';

import { ingredientsItemModule as css } from '@styles';

import type { IIngredientsItem } from '@types';

export const IngredientsItem: IIngredientsItem = ({ data: { icon, image, title, modal } }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className={css.ingredients_wrapper}
        onClick={() => ingredientsItemClickHandle(setIsModalOpen)}
      >
        <Icon className={css.ingredients_icon} data={icon} />
        <Image className={css.ingredients_image} data={image} />
        <Title className={css.ingredients_title} data={title} />
      </div>
      <Portal>
        <Modal
          data={modal}
          variant='ingredientsInfo'
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        >
          <IngredientDescription data={modal.ingredientDescription} />
        </Modal>
      </Portal>
    </>
  );
};
