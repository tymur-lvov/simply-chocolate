import { useState } from 'react';

import { reviewFormClickHandle, reviewFormSubmitHandle } from '@helpers';

import { Button, Field, Title } from '@components';

import { SECTION_TITLE, SECTION_TITLE_ACCENT } from '@constants';

import { reviewSubmitFormModule as css } from '@styles';

import type { IReviewFormStatus, IReviewSubmitForm } from '@types';

export const ReviewSubmitForm: IReviewSubmitForm = ({ data: { title, inputs, button } }) => {
  const [reviewFormStatus, setReviewFormStatus] = useState<IReviewFormStatus>({
    event: {
      isSubmitAttempted: false,
      isAnyFieldChanged: false,
    },
    error: {
      isNameError: false,
      isEmailError: false,
      isPhoneError: false,
      isCommentError: false,
      isPrivacyError: false,
      isErrorPopupVisible: false,
      errorFieldIndex: null,
    },
  });

  return (
    <form
      className={css.review_form}
      onSubmit={(event) => reviewFormSubmitHandle(event, reviewFormStatus, setReviewFormStatus)}
      onClick={(event) => reviewFormClickHandle(event, setReviewFormStatus)}
    >
      <Title
        classNames={[SECTION_TITLE, SECTION_TITLE_ACCENT, css.review_form_title]}
        data={title}
      />
      {inputs.map((input, index) => (
        <Field
          data={input}
          key={input.id}
          fieldIndex={index}
          reviewFormStatus={reviewFormStatus}
          setReviewFormStatus={setReviewFormStatus}
        />
      ))}
      <Button className={css.review_form_button} type='submit' data={button} />
    </form>
  );
};
