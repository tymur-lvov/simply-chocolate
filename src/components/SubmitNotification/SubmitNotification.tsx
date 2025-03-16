import { submitNotificationModule as css } from '@styles';

import type { ISubmitNotification } from '@types';

export const SubmitNotification: ISubmitNotification = ({ data: { title, description } }) => {
  return (
    <>
      <h3 className={css.modal_title}>{title.text}</h3>
      <p className={css.modal_description}>{description.text}</p>
    </>
  );
};
