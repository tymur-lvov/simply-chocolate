import { clsx } from 'clsx';
import { useState } from 'react';

import { reviewsButtonClickHandle } from '@helpers';

import {
  Modal,
  Portal,
  Button,
  ReviewsList,
  SectionTitle,
  ReviewSubmitForm,
  SubmitNotification,
} from '@components';

import { CONTAINER, SECTION, SECTION_TITLE, SECTION_TITLE_ACCENT } from '@constants';

import { reviewsModule as css } from '@styles';

import type { IReviews } from '@types';

export const Reviews: IReviews = ({
  data: { sectionTitle, reviewsList, modalOpenButton, reviewsModal, reviewSubmitForm },
}) => {
  const [isReviewFormModalOpen, setIsReviewFormModalOpen] = useState(false);

  const [isOnSubmitModalOpen, setIsOnSubmitModalOpen] = useState(false);

  return (
    <section className={clsx(css.reviews, SECTION)} id={'reviews_section'}>
      <div className={clsx(css.reviews_container, CONTAINER)}>
        <SectionTitle
          classNames={[css.reviews_section_title, SECTION_TITLE, SECTION_TITLE_ACCENT]}
          data={sectionTitle}
        />
        <ReviewsList data={reviewsList} />
        <Button
          className={css.reviews_modal_toggle_button}
          data={modalOpenButton}
          onClick={() => reviewsButtonClickHandle(setIsReviewFormModalOpen)}
        />
      </div>
      <Portal>
        <Modal
          variant='submitForm'
          isModalOpen={isReviewFormModalOpen}
          setIsModalOpen={setIsReviewFormModalOpen}
          data={reviewsModal}
        >
          <ReviewSubmitForm
            data={reviewSubmitForm}
            setIsOnSubmitModalOpen={setIsOnSubmitModalOpen}
            setIsReviewFormModalOpen={setIsReviewFormModalOpen}
          />
        </Modal>
        <Modal
          data={reviewSubmitForm.onSubmitModal}
          isModalOpen={isOnSubmitModalOpen}
          variant='submitNotification'
          setIsModalOpen={setIsOnSubmitModalOpen}
        >
          <SubmitNotification data={reviewSubmitForm.onSubmitModal.submitNotification} />
        </Modal>
      </Portal>
    </section>
  );
};
