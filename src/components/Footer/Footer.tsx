import { clsx } from 'clsx';

import {
  Title,
  NavList,
  SocialsList,
  ContactsList,
  SectionTitle,
  SubscriptionForm,
} from '@components';

import { CONTAINER, MENU, SECTION_TITLE_ACCENT } from '@constants';

import { footerModule as css } from '@styles';

import type { IFooter } from '@types';

export const Footer: IFooter = ({
  data: {
    navList,
    socialsList,
    contactsList,
    socialsTitle,
    sectionTitle,
    contactsTitle,
    subscriptionForm,
  },
}) => {
  return (
    <footer className={css.footer}>
      <div className={CONTAINER}>
        <SectionTitle classNames={[SECTION_TITLE_ACCENT, css.section_title]} data={sectionTitle} />
        <div className={css.list_wrapper}>
          <Title className={css.list_title} data={contactsTitle} />
          <ContactsList data={contactsList} />
        </div>
        <div className={clsx(css.list_wrapper, css.list_wrapper__socials)}>
          <Title className={css.list_title} data={socialsTitle} />
          <SocialsList variant={MENU} data={socialsList} />
        </div>
        <div className={css.list_wrapper}>
          <NavList variant={MENU} className={css.list_wrapper} data={navList} />
        </div>
        <SubscriptionForm data={subscriptionForm} />
      </div>
    </footer>
  );
};
