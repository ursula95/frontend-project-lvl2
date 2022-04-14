import { readFileSync } from 'fs';
import { resolve } from 'path';
import resultDiff from './src/resultDiff.js';

const getParsedData = (path) => {
  const getData = readFileSync(resolve(path), 'utf-8');

  return JSON.parse(getData);
};

const genDiff = (filepath1, filepath2) => {
  const obj1 = getParsedData(filepath1);
  const obj2 = getParsedData(filepath2);

  const diff = resultDiff(obj1, obj2);

  const formatDiff = `{${diff.join('')}\n}`;

  return formatDiff;
};

export default genDiff;
