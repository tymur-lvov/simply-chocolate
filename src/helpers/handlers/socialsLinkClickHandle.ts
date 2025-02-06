import type { ISocialsLinkClickHandle } from '@types';

export const socialsLinkClickHandle: ISocialsLinkClickHandle = (setLinkClickCount) => {
  setLinkClickCount((prev) => ++prev);
};
