import { clsx } from 'clsx';

import { Checkbox, ErrorMessage, Icon, Input, Label, TextArea } from '@components';

import { fieldModule as css } from '@styles';

import type { IField } from '@types';
import { useState, type ChangeEvent } from 'react';

export const Field: IField = ({
  data,
  index,
  formStatus,
  errorPopupStatus,
  setErrorPopupStatus,
}) => {
  const [isFieldValid, setIsFieldValid] = useState(false);

  const isSubmitAttempted = formStatus?.isSubmitAttempted;

  const isErrorPopupVisible = errorPopupStatus?.isErrorPopupVisible;

  const errorPopupIndex = errorPopupStatus?.errorPopupIndex;

  const validateField = (field: HTMLInputElement) => {
    if (field.id === 'privacy') {
      return field.checked;
    }

    const fieldValueRegExpCollection = {
      name: /^[A-Za-z\s\-]{2,50}$/,
      email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      phone: /^(\+?\d{1,3})?[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{2}[-.\s]?\d{2}$/,
      comment: /^[A-Za-z0-9\s.,!?()\-'"%$#@:;]{2,500}$/,
    };

    const fieldName = field.id as keyof typeof fieldValueRegExpCollection;

    return fieldValueRegExpCollection[fieldName].test(field.value);
  };

  const fieldChangeHandle = (event: ChangeEvent) => {
    const field = event.target as HTMLInputElement;

    setIsFieldValid(validateField(field));
  };

  const errorIconClickHandle = () => {
    if (isSubmitAttempted && !isFieldValid) {
      setErrorPopupStatus?.((prev) => ({
        isErrorPopupVisible: !prev.isErrorPopupVisible,
        errorPopupIndex: index,
      }));
    }
  };

  return (
    <>
      {data.label && <Label data={data} />}
      {data.type !== 'checkbox' && (
        <div className={css.review_form_field_wrapper}>
          {data.type === 'input' && (
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
              [css.error_message__visible]: isErrorPopupVisible && errorPopupIndex === index,
            })}
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
