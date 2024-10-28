import { Reason } from '@types';

import produceErrorMessage from './produceErrorMessage.js';

const produceError = (reason: Reason): Error => new Error(produceErrorMessage(reason));

export default produceError;
