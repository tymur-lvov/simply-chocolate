import type { IHandleTopSellersItemClick } from '@types';

export const handleTopSellersItemClick: IHandleTopSellersItemClick = (
  itemIndex,
  activeItemIndex,
  setActiveItemIndex
) => {
  if (itemIndex === activeItemIndex) {
    return setActiveItemIndex(null);
  }

  return setActiveItemIndex(itemIndex);
};
