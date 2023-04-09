import { INVALID_JSON_ERROR } from './../errors/index';

export const parseJson = (str: string) => {
  try {
    const parsedStr = JSON.parse(str);
    if (typeof parsedStr === 'object') {
      return parsedStr;
    } else {
      throw INVALID_JSON_ERROR;
    }
  } catch (e) {
    throw INVALID_JSON_ERROR;
  }
};
