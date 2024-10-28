export type Reason = '!isArgumentProvided' | '!isAnyFilePath';

export type ErroMessage =
  | 'Source file directory path as an argument is required.'
  | 'Target directories are empty.'
  | 'Unexpected error occured.';
