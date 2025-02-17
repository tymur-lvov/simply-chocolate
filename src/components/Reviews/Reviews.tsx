import { clsx } from 'clsx';

import { Button, ReviewsList, SectionTitle } from '@components';

import { CONTAINER, SECTION, SECTION_TITLE, SECTION_TITLE_ACCENT } from '@constants';

import { reviewsModule as css } from '@styles';

import type { IReviews } from '@types';

export const Reviews: IReviews = ({ data: { sectionTitle, reviewsList, modalToggleButton } }) => {
  return (
    <section className={clsx(css.reviews, SECTION)}>
      <div className={clsx(css.reviews_container, CONTAINER)}>
        <SectionTitle
          classNames={[css.reviews_section_title, SECTION_TITLE, SECTION_TITLE_ACCENT]}
          data={sectionTitle}
        />
        <ReviewsList data={reviewsList} />
        <Button className={css.reviews_modal_toggle_button} data={modalToggleButton} />
      </div>
    </section>
  );
};
