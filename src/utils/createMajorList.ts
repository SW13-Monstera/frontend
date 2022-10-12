import { IDropdownElement } from '../types/util';
import { IMajorListElement } from './../types/api/major';

export const createMajorList = (
  apiResponse: IMajorListElement[] | undefined,
): IDropdownElement[] => {
  if (!apiResponse) return [];

  const data = apiResponse.map(
    (major) => ({ id: major.majorSeq, name: major.mClass } as IDropdownElement),
  );
  return data;
};
