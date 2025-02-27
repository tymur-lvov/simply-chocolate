import { clsx } from 'clsx';

import { Icon } from '@components';

import { inputModule as css } from '@styles';

import type { IInput } from '@types';

export const Input: IInput = ({ data: { type, id, label, icon, link, placeholder } }) => {
  return (
    <>
      {type !== 'textArea' && type !== 'checkbox' && (
        <>
          <label className={css.review_form_label} htmlFor={id}>
            {label?.text}
          </label>
          <div className={css.review_form_input_icon_wrapper}>
            <input id={id} className={css.review_form_input} type={type} />
            <Icon className={css.review_form_input_icon} data={icon} />
          </div>
        </>
      )}
      {type === 'textArea' && (
        <>
          <label className={css.review_form_label} htmlFor={id}>
            {label?.text}
          </label>
          <textarea
            id={id}
            className={clsx(css.review_form_input, css.review_form_text_area)}
            placeholder={placeholder}
          />
        </>
      )}
      {type === 'checkbox' && (
        <div className={css.review_form_checkbox_label_icon_wrapper}>
          <div className={css.review_form_checkbox_icon_wrapper}>
            <input id={id} className={css.review_form_checkbox_input} type={type} />
            <Icon className={css.review_form_checkbox_icon} data={icon} />
          </div>
          <p className={css.review_form_checkbox_label}>
            {label?.text}
            <a className={css.review_form_checkbox_label_link} href={link?.href}>
              {link?.text}
            </a>
          </p>
        </div>
      )}
    </>
  );
};
