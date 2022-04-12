import _ from 'lodash';

const resultDiff = (obj1, obj2) => {
  const unitedKeys = _.union(Object.keys(obj1), Object.keys(obj2));
  const sortedUnitedKeys = _.sortBy(unitedKeys);
 
  const newDiff = sortedUnitedKeys.map((key) => {
    const value1 = obj1[key];
    const value2 = obj2[key];

    if (!_.has(obj1, key)) {
      return `\n+ ${key}: ${value2}`;
    }

    if (!_.has(obj2, key)) {
      return `\n- ${key}: ${value1}`;

    }

    if (value1 === value2) {
      return `\n  ${key}: ${value1}`;
    }

    return `\n- ${key}: ${value1}\n+ ${key}: ${value2}`;
  });

  return newDiff;
};

export default resultDiff;