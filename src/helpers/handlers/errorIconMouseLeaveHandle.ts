import type { IErrorIconMouseLeaveHandle } from '@types';

export const errorIconMouseLeaveHandle: IErrorIconMouseLeaveHandle = (setFormStatus) => {
  setFormStatus((prev) => ({ ...prev, isErrorPopupVisible: false, errorFieldIndex: null }));
};
