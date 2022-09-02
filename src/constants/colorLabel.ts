import { COLOR } from './color';
import { PROBLEM_TYPE } from './problem';

export const COLOR_LABEL_LIST = [
  { color: COLOR.POINT1, name: '서술형', type: PROBLEM_TYPE.LONG },
  { color: COLOR.POINT2, name: '단답형', type: PROBLEM_TYPE.SHORT },
  { color: COLOR.POINT3, name: '객관식', type: PROBLEM_TYPE.MULTIPLE },
];
