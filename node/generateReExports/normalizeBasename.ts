import { funcA, funcB } from '@types';

const removeExtension = (basename: string): string => basename.replace(/\.[^./]+$/, '');

const removeInvalidSymbols = (basename: string): string => basename.replace(/[^a-zA-Z0-9_$]/g, '');

const composeFunctions = (funcA: funcA, funcB: funcB) => (argC: string) => funcB(funcA(argC));

const normalizeBasename = composeFunctions(removeExtension, removeInvalidSymbols);

export default normalizeBasename;
