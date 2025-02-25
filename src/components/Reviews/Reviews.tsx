import { clsx } from 'clsx';
import { useState } from 'react';

import { Button, Portal, ReviewsList, Modal, SectionTitle, ReviewSubmitForm } from '@components';

import { CONTAINER, SECTION, SECTION_TITLE, SECTION_TITLE_ACCENT } from '@constants';

import { reviewsModule as css } from '@styles';

import type { IBooleanStateSetter, IReviews } from '@types';

export const Reviews: IReviews = ({
  data: { sectionTitle, reviewsList, modalOpenButton, reviewsModal },
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (setIsModalOpen: IBooleanStateSetter) => {
    setIsModalOpen(true);
  };

  const reviewsButtonClickHandle = () => {
    openModal(setIsModalOpen);
  };

  return (
    <section className={clsx(css.reviews, SECTION)}>
      <div className={clsx(css.reviews_container, CONTAINER)}>
        <SectionTitle
          classNames={[css.reviews_section_title, SECTION_TITLE, SECTION_TITLE_ACCENT]}
          data={sectionTitle}
        />
        <ReviewsList data={reviewsList} />
        <Button
          className={css.reviews_modal_toggle_button}
          data={modalOpenButton}
          onClick={reviewsButtonClickHandle}
        />
      </div>
      <Portal>
        <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} data={reviewsModal}>
          <ReviewSubmitForm data={reviewsModal.reviewSubmitForm} />
        </Modal>
      </Portal>
    </section>
  );
};
