import { Description, Title, Icon } from '@components';

import { benefitsItemModule as css } from '@styles';

import type { IBenefitsItem } from '@types';

export const BenefitsItem: IBenefitsItem = ({ data: { title, description, icon } }) => {
  return (
    <>
      <Icon className={css.benefits_icon} data={icon} />
      <Title className={css.benefits_sub_title} data={title} />
      <Description className={css.benefits_description} data={description} />
    </>
  );
};
