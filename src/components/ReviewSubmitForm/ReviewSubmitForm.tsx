import { useState } from 'react';

import { reviewFormClickHandle, reviewFormSubmitHandle } from '@helpers';

import { Button, Field, Title } from '@components';

import { SECTION_TITLE, SECTION_TITLE_ACCENT } from '@constants';

import { reviewSubmitFormModule as css } from '@styles';

import type { IReviewFormStatus, IReviewSubmitForm } from '@types';

export const ReviewSubmitForm: IReviewSubmitForm = ({
  data: { title, inputs, button },
  setIsOnSubmitModalOpen,
  setIsReviewFormModalOpen,
}) => {
  const [formStatus, setFormStatus] = useState<IReviewFormStatus>({
    errorFieldIndex: null,
    isSubmitAttempted: false,
    isAnyFieldChanged: false,
    isErrorPopupVisible: false,
    fieldsErrorStatus: {
      isNameError: false,
      isEmailError: false,
      isPhoneError: false,
      isCommentError: false,
      isPrivacyError: false,
    },
  });

  return (
    <>
      <form
        className={css.review_form}
        onSubmit={(event) =>
          reviewFormSubmitHandle(
            event,
            formStatus,
            setFormStatus,
            setIsOnSubmitModalOpen,
            setIsReviewFormModalOpen
          )
        }
        onClick={(event) => reviewFormClickHandle(event, setFormStatus)}
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
            formStatus={formStatus}
            setFormStatus={setFormStatus}
          />
        ))}
        <Button className={css.review_form_button} type='submit' data={button} />
      </form>
    </>
  );
};
