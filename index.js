import resultDiff from './src/resultDiff.js';
import parsers from './src/parsers.js';
import format from './src/formatters/formatter.js';

const genDiff = (filepath1, filepath2, style = 'stylish') => {
  const obj1 = parsers(filepath1);
  const obj2 = parsers(filepath2);

  // const diff = resultDiff(obj1, obj2);
  // const formatDiff = `{${diff.join('')}\n}`;
  // return format(resultDiff(obj1, obj2), style);
  const diff = resultDiff(obj1, obj2);

  const formattedDiff = format(diff, style);

  return formattedDiff;
};

export default genDiff;
