import { clsx } from 'clsx';
import { useState } from 'react';

import { reviewFieldChangeHandle, reviewFieldErrorIconClickHandle } from '@helpers';

import { Checkbox, ErrorMessage, Icon, Input, Label, TextArea } from '@components';

import { fieldModule as css } from '@styles';

import type { IField } from '@types';

export const Field: IField = ({ data, fieldIndex, reviewFormStatus, setReviewFormStatus }) => {
  const [isFieldValid, setIsFieldValid] = useState(false);

  const { isSubmitAttempted } = reviewFormStatus.event;

  const { isErrorPopupVisible, errorFieldIndex } = reviewFormStatus.error;

  return (
    <>
      {data.label && <Label data={data} />}
      {data.type !== 'checkbox' && (
        <div className={css.review_form_field_wrapper}>
          {data.type !== 'textArea' && (
            <Input
              className={clsx({
                [css.review_form_field]: true,
                [css.review_form_field__error]: !isFieldValid && isSubmitAttempted,
              })}
              data={data}
              isFieldValid={isFieldValid}
              reviewFormStatus={reviewFormStatus}
              setReviewFormStatus={setReviewFormStatus}
              onChange={(event) =>
                reviewFieldChangeHandle(event, setReviewFormStatus, setIsFieldValid)
              }
            />
          )}
          {data.type === 'textArea' && (
            <TextArea
              className={clsx({
                [css.review_form_field]: true,
                [css.review_form_field__error]: !isFieldValid && isSubmitAttempted,
              })}
              data={data}
              onChange={(event) =>
                reviewFieldChangeHandle(event, setReviewFormStatus, setIsFieldValid)
              }
            />
          )}
          <Icon
            className={clsx({
              [css.review_form_input_icon]: true,
              [css.review_form_input_icon__error_icon]: true,
              [css.review_form_input_icon__error_icon__visible]: !isFieldValid && isSubmitAttempted,
            })}
            data={data.error?.icon}
            onClick={() =>
              reviewFieldErrorIconClickHandle(
                fieldIndex,
                isFieldValid,
                reviewFormStatus,
                setReviewFormStatus
              )
            }
          />
          <ErrorMessage
            className={clsx({
              [css.error_message]: true,
              [css.error_message__visible]: isErrorPopupVisible && errorFieldIndex === fieldIndex,
            })}
            data={data.error}
          />
        </div>
      )}
      {data.type === 'checkbox' && (
        <Checkbox
          data={data}
          isFieldValid={isFieldValid}
          reviewFormStatus={reviewFormStatus}
          onChange={(event) => reviewFieldChangeHandle(event, setReviewFormStatus, setIsFieldValid)}
        />
      )}
    </>
  );
};
