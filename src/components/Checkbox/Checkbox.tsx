import { Icon } from '@components';

import { checkboxModule as css } from '@styles';

import type { ICheckbox } from '@types';

export const Checkbox: ICheckbox = ({ data: { id, type, icon, description, link }, onChange }) => {
  return (
    <div className={css.review_form_checkbox_description_wrapper}>
      <div className={css.review_form_checkbox_wrapper}>
        <input className={css.review_form_checkbox} onChange={onChange} id={id} type={type} />
        <Icon className={css.review_form_checkbox_icon} data={icon} />
      </div>
      <p className={css.review_form_checkbox_description}>
        {description?.text}
        <a className={css.review_form_checkbox_description_link} href={link?.href}>
          {link?.text}
        </a>
      </p>
    </div>
  );
};
