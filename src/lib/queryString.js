const keyValueToString = ([key, value]) => {
  if (typeof value === 'object' && !Array.isArray(value)) {
    throw new Error('Please check your parameters');
  }
  return `${key}=${value}`;
};

export const queryString = obj =>
  Object.entries(obj).map(keyValueToString).join('&');

export const parse = string =>
  Object.fromEntries(
    string.split('&').map(keyValue => {
      const [key, value] = keyValue.split('=');

      if (value.includes(',')) {
        return [key, value.split(',')];
      }

      return [key, value];
    })
  );
