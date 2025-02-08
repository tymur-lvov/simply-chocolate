import { Icon } from '@components';

import { BenefitsItemModule as css } from '@styles';

import type { IBenefitsItem } from '@types';

export const BenefitsItem: IBenefitsItem = ({ data: { title, description, icon } }) => {
  return (
    <>
      <Icon className={css.benefits_icon} data={icon} />
      <h3 className={css.benefits_sub_title}>{title}</h3>
      <p className={css.benefits_description}>{description}</p>
    </>
  );
};
