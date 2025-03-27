import { ContactsItem } from '@components';

import { contactsListModule as css } from '@styles';

import type { IContactsList } from '@types';

export const ContactsList: IContactsList = ({ data: { contactsItems } }) => {
  return (
    <ul className={css.contacts_list}>
      {contactsItems.map((contactsItem) => (
        <li className={css.contacts_item} key={contactsItem.href}>
          <ContactsItem data={contactsItem} />
        </li>
      ))}
    </ul>
  );
};
