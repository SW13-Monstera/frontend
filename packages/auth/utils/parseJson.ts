export const parseJson = (str: string) => {
  try {
    const parsedStr = JSON.parse(str);
    if (typeof parsedStr === 'object') {
      return parsedStr;
    } else {
      throw new Error('Invalid Json');
    }
  } catch (e) {
    throw new Error('Invalid Json');
  }
};
