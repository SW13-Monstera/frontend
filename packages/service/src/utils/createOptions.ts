import { IOption } from '../types/select';

export const createOptions = (values: string[]): IOption[] =>
  values.map((e) => {
    return { label: e, value: e };
  });
