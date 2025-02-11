import type { IGetIconFragment } from '@types';

export const getIconFragment: IGetIconFragment = (fragment, fragments, fragmentKey) => {
  if (fragments && fragmentKey) {
    return fragments[fragmentKey];
  }

  return fragment;
};
