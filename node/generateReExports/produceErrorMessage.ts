import { Reason, ErroMessage } from '@types';

const produceErrorMessage = (reason: Reason): ErroMessage => {
  switch (reason) {
    case '!isArgumentProvided':
      return 'Source file directory path as an argument is required.';

    case '!isAnyFilePath':
      return 'Target directories are empty.';

    default:
      return 'Unexpected error occured.';
  }
};

export default produceErrorMessage;
