import { clsx } from 'clsx';
import { useEffect, useState } from 'react';

import { useMedia } from '@hooks';

import {
  reviewFieldChangeHandle,
  errorIconMouseEnterHandle,
  errorIconMouseLeaveHandle,
  reviewFieldErrorIconClickHandle,
} from '@helpers';

import { Checkbox, ErrorMessage, Icon, Input, Label, TextArea } from '@components';

import { fieldModule as css } from '@styles';

import type { IField } from '@types';

export const Field: IField = ({
  data,
  formStatus,
  fieldIndex,
  fieldValues,
  setFormStatus,
  setFieldValues,
}) => {
  const [isFieldValid, setIsFieldValid] = useState(false);

  const { isDesktop } = useMedia();

  useEffect(() => {
    if (!formStatus.isSubmitAttempted) {
      setIsFieldValid(false);
    }
  }, []);

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
              formStatus={formStatus}
              fieldValues={fieldValues}
              isFieldValid={isFieldValid}
              setFormStatus={setFormStatus}
              setFieldValues={setFieldValues}
              setIsFieldValid={setIsFieldValid}
              onChange={reviewFieldChangeHandle}
            />
          )}
          {data.type === 'textArea' && (
            <TextArea
              className={clsx({
                [css.review_form_field]: true,
                [css.review_form_field__error]: !isFieldValid && isSubmitAttempted,
              })}
              data={data}
              fieldValues={fieldValues}
              setFormStatus={setFormStatus}
              setFieldValues={setFieldValues}
              setIsFieldValid={setIsFieldValid}
              onChange={reviewFieldChangeHandle}
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
            onMouseEnter={
              isDesktop ? () => errorIconMouseEnterHandle(fieldIndex, setFormStatus) : () => {}
            }
            onMouseLeave={isDesktop ? () => errorIconMouseLeaveHandle(setFormStatus) : () => {}}
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
          formStatus={formStatus}
          fieldValues={fieldValues}
          isFieldValid={isFieldValid}
          setFormStatus={setFormStatus}
          setFieldValues={setFieldValues}
          setIsFieldValid={setIsFieldValid}
          onChange={reviewFieldChangeHandle}
        />
      )}
    </>
  );
};
