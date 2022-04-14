import resultDiff from './src/resultDiff.js';
import parsers from './src/parsers.js';

const genDiff = (filepath1, filepath2) => {
  const obj1 = parsers(filepath1);
  const obj2 = parsers(filepath2);

  const diff = resultDiff(obj1, obj2);

  const formatDiff = `{${diff.join('')}\n}`;

  return formatDiff;
};

export default genDiff;
