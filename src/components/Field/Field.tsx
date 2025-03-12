import { clsx } from 'clsx';
import { useState } from 'react';

import { Checkbox, ErrorMessage, Icon, Input, Label, TextArea } from '@components';

import { fieldModule as css } from '@styles';

import type { ChangeEvent } from 'react';
import type { IField } from '@types';

export const Field: IField = ({
  data,
  index,
  formEventStatus,
  formErrorStatus,
  setFormEventStatus,
  setFormErrorStatus,
}) => {
  const [isFieldValid, setIsFieldValid] = useState(false);

  const isSubmitAttempted = formEventStatus?.isSubmitAttempted;

  const isErrorPopupVisible = formErrorStatus?.isErrorPopupVisible;

  const errorFieldIndex = formErrorStatus?.errorFieldIndex;

  const validateField = (field: HTMLInputElement) => {
    const fieldName = field.id as keyof typeof userInputRegExpCollection | 'privacy';

    const userInput = field.value;

    const isCheckboxChecked = field.checked;

    if (fieldName === 'privacy') {
      return isCheckboxChecked;
    }

    const userInputRegExpCollection = {
      name: /^[A-Za-z\s\-]{2,50}$/,
      email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      phone: /^(\+?\d{1,3})?[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{2}[-.\s]?\d{2}$/,
      comment: /^[A-Za-z0-9\s.,!?()\-'"%$#@:;]{2,500}$/,
    };

    return userInputRegExpCollection[fieldName].test(userInput);
  };

  const fieldChangeHandle = (event: ChangeEvent) => {
    const field = event.target as HTMLInputElement;

    const errorKey = `is${field.id}Error`;

    const isFieldValid = validateField(field);

    setFormEventStatus?.((prev) => ({ ...prev, isAnyFieldChanged: true }));

    setFormErrorStatus?.((prev) => ({ ...prev, [errorKey]: isFieldValid }));

    setIsFieldValid(isFieldValid);
  };

  const errorIconClickHandle = () => {
    if (isSubmitAttempted && !isFieldValid) {
      setFormErrorStatus?.((prev) => ({
        ...prev,
        isErrorPopupVisible: !prev.isErrorPopupVisible,
        errorFieldIndex: index,
      }));
    }
  };

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
              isSubmitAttempted={isSubmitAttempted}
              onChange={fieldChangeHandle}
            />
          )}
          {data.type === 'textArea' && (
            <TextArea
              className={clsx({
                [css.review_form_field]: true,
                [css.review_form_field__error]: !isFieldValid && isSubmitAttempted,
              })}
              data={data}
              onChange={fieldChangeHandle}
            />
          )}
          <Icon
            className={clsx({
              [css.review_form_input_icon]: true,
              [css.review_form_input_icon__error_icon]: true,
              [css.review_form_input_icon__error_icon__visible]: !isFieldValid && isSubmitAttempted,
            })}
            data={data.error?.icon}
            onClick={errorIconClickHandle}
          />
          <ErrorMessage
            className={clsx({
              [css.error_message]: true,
              [css.error_message__visible]: isErrorPopupVisible && errorFieldIndex === index,
            })}
            data={data.error}
          />
        </div>
      )}
      {data.type === 'checkbox' && (
        <Checkbox
          data={data}
          isFieldValid={isFieldValid}
          isSubmitAttempted={isSubmitAttempted}
          onChange={fieldChangeHandle}
        />
      )}
    </>
  );
};
