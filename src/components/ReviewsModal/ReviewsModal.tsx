import { Button, Icon, Title } from '@components';

import { SECTION_TITLE, SECTION_TITLE_ACCENT } from '@constants';

import { reviewsModalModule as css } from '@styles';

import type { IReviewsModal } from '@types';

export const ReviewsModal: IReviewsModal = ({
  data: {
    form: {
      closeButton,
      title,
      // nameInput,
      // emainInput,
      // phoneInput,
      // commentInput,
      // checkboxInput,
      // button,
    },
  },
}) => {
  return (
    <div className={css.reviews_modal_backdrop}>
      <div className={css.reviews_modal_window}>
        <Button className={css.reviews_modal_close_button}>
          <Icon className={css.reviews_modal_close_icon} data={closeButton.icon} />
        </Button>
        <Title
          classNames={[SECTION_TITLE, SECTION_TITLE_ACCENT, css.reviews_modal_title]}
          data={title}
        />
      </div>
    </div>
  );
};
