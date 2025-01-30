import type { IIsTargetElementAList } from '@types';

export const isTargetElementAList: IIsTargetElementAList = (event) => {
  return event.target instanceof HTMLElement && event.target.nodeName === 'UL';
};
