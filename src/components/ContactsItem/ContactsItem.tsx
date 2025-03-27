import { contactsItemModule as css } from '@styles';

import type { IContactsItem } from '@types';

export const ContactsItem: IContactsItem = ({ data: { href, text } }) => {
  return (
    <a className={css.contacts_link} href={href}>
      {text}
    </a>
  );
};
