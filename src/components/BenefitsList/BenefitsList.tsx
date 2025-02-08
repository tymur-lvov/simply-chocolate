import { BenefitsItem } from '@components';

import { BenefitsListModule as css } from '@styles';

import type { IBenefitsList } from '@types';

export const BenefitsList: IBenefitsList = ({ data: { benefitsItems } }) => {
  return (
    <ul className={css.benefits_list}>
      {benefitsItems.map((benefitsItem) => (
        <li className={css.benefits_item}>
          <BenefitsItem key={benefitsItem.title} data={benefitsItem} />
        </li>
      ))}
    </ul>
  );
};
