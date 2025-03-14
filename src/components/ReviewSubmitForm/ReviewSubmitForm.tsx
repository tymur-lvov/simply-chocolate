import { useState } from 'react';

import { Button, Field, Title } from '@components';

import { SECTION_TITLE, SECTION_TITLE_ACCENT } from '@constants';

import { reviewSubmitFormModule as css } from '@styles';

import type { FormEvent, MouseEvent } from 'react';
import type { IReviewSubmitForm } from '@types';

export const ReviewSubmitForm: IReviewSubmitForm = ({ data: { title, inputs, button } }) => {
  const [formEventStatus, setFormEventStatus] = useState({
    isSubmitAttempted: false,
    isAnyFieldChanged: false,
  });

  const [formErrorStatus, setFormErrorStatus] = useState<{
    isNameError: boolean;
    isEmailError: boolean;
    isPhoneError: boolean;
    isCommentError: boolean;
    isPrivacyError: boolean;
    isErrorPopupVisible: boolean;
    errorFieldIndex: number | null | undefined;
  }>({
    isNameError: false,
    isEmailError: false,
    isPhoneError: false,
    isCommentError: false,
    isPrivacyError: false,
    isErrorPopupVisible: false,
    errorFieldIndex: null,
  });

  const formSubmitHandle = (event: FormEvent) => {
    event.preventDefault();

    setFormEventStatus((prev) => ({ ...prev, isSubmitAttempted: true }));

    if (!formEventStatus.isAnyFieldChanged) {
      return;
    }

    const errorKeys = Object.keys(formErrorStatus);

    const formError = errorKeys.some((key) => formErrorStatus[key as keyof typeof formErrorStatus]);

    if (formError) {
      return;
    }
  };

  const formClickHandle = (event: MouseEvent) => {
    const element = event.target as HTMLElement;

    if (element.nodeName !== 'svg' && element.nodeName !== 'use') {
      setFormErrorStatus((prev) => ({
        ...prev,
        isErrorPopupVisible: false,
        errorFieldIndex: null,
      }));
    }
  };

  return (
    <form className={css.review_form} onSubmit={formSubmitHandle} onClick={formClickHandle}>
      <Title
        classNames={[SECTION_TITLE, SECTION_TITLE_ACCENT, css.review_form_title]}
        data={title}
      />
      {inputs.map((input, index) => (
        <Field
          data={input}
          index={index}
          key={input.id}
          formEventStatus={formEventStatus}
          formErrorStatus={formErrorStatus}
          setFormEventStatus={setFormEventStatus}
          setFormErrorStatus={setFormErrorStatus}
        />
      ))}
      <Button className={css.review_form_button} type='submit' data={button} />
    </form>
  );
};
