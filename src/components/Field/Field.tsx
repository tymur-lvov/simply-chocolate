import { clsx } from 'clsx';
import { useState } from 'react';

import { reviewFieldChangeHandle, reviewFieldErrorIconClickHandle } from '@helpers';

import { Checkbox, ErrorMessage, Icon, Input, Label, TextArea } from '@components';

import { fieldModule as css } from '@styles';

import type { IField } from '@types';

export const Field: IField = ({ data, fieldIndex, formStatus, setFormStatus }) => {
  const [isFieldValid, setIsFieldValid] = useState(false);

  const { isSubmitAttempted, isErrorPopupVisible, errorFieldIndex } = formStatus;

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
              formStatus={formStatus}
              setFormStatus={setFormStatus}
              onChange={(event) => reviewFieldChangeHandle(event, setFormStatus, setIsFieldValid)}
            />
          )}
          {data.type === 'textArea' && (
            <TextArea
              className={clsx({
                [css.review_form_field]: true,
                [css.review_form_field__error]: !isFieldValid && isSubmitAttempted,
              })}
              data={data}
              onChange={(event) => reviewFieldChangeHandle(event, setFormStatus, setIsFieldValid)}
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
              reviewFieldErrorIconClickHandle(formStatus, fieldIndex, isFieldValid, setFormStatus)
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
          formStatus={formStatus}
          onChange={(event) => reviewFieldChangeHandle(event, setFormStatus, setIsFieldValid)}
        />
      )}
    </>
  );
};
