import { Title } from '@components';

import { SECTION_TITLE, SECTION_TITLE_ACCENT } from '@constants';

import { reviewSubmitFormModule as css } from '@styles';

import type { IReviewSubmitForm } from '@types';

export const ReviewSubmitForm: IReviewSubmitForm = ({ data: { title } }) => {
  return (
    <>
      <Title classNames={[SECTION_TITLE, SECTION_TITLE_ACCENT, css.modal_title]} data={title} />
    </>
  );
};
