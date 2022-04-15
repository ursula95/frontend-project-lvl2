import stylish from './stylish.js';
// import styleField from './plain.js';
// import json from './json.js';

const format = (data, style) => {
  switch (style) {
    case 'stylish':
      return stylish(data);
    // case 'plain':
    //   return plain(tree);
    // case 'json':
    //   return json(tree);
    default:
      throw new Error(`Unexpected format: ${style}.`);
  }
};

export default format;
