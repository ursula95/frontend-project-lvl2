import resultDiff from './src/resultDiff.js';
import parsers from './src/parsers.js';
import format from './src/formatters/index.js';

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const obj1 = parsers(filepath1);
  const obj2 = parsers(filepath2);

  const diff = resultDiff(obj1, obj2);

  const formattedDiff = format(diff, formatName);

  return formattedDiff;
};

export default genDiff;
