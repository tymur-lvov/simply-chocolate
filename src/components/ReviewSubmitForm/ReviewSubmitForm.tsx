import { useState } from 'react';

import { Button, Field, Title } from '@components';

import { SECTION_TITLE, SECTION_TITLE_ACCENT } from '@constants';

import { reviewSubmitFormModule as css } from '@styles';

import type { FormEvent, MouseEvent } from 'react';
import type { IReviewSubmitForm } from '@types';

export const ReviewSubmitForm: IReviewSubmitForm = ({ data: { title, inputs, button } }) => {
  const [formStatus, setFormStatus] = useState({
    isSubmitAttempted: false,
  });

  const [errorPopupStatus, setErrorPopupStatus] = useState<{
    isErrorPopupVisible: boolean;
    errorPopupIndex: number | null | undefined;
  }>({
    isErrorPopupVisible: false,
    errorPopupIndex: null,
  });

  const formSubmitHandle = (event: FormEvent) => {
    event.preventDefault();

    setFormStatus((prev) => ({ ...prev, isSubmitAttempted: true }));
  };

  const formClickHandle = (event: MouseEvent) => {
    const element = event.target as HTMLElement;

    if (element.nodeName !== 'svg' && element.nodeName !== 'use') {
      setErrorPopupStatus({
        isErrorPopupVisible: false,
        errorPopupIndex: null,
      });
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
          formStatus={formStatus}
          errorPopupStatus={errorPopupStatus}
          setErrorPopupStatus={setErrorPopupStatus}
        />
      ))}
      <Button className={css.review_form_button} type='submit' data={button} />
    </form>
  );
};
