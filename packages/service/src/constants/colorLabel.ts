import { COLOR } from './color';
import { PROBLEM_TYPE } from './problem';

export const COLOR_LABEL_LIST = [
  {
    color: COLOR.BACKGROUND.PURPLE,
    name: '서술형',
    type: PROBLEM_TYPE.LONG,
  },
  {
    color: COLOR.BACKGROUND.ORANGE,
    name: '단답형',
    type: PROBLEM_TYPE.SHORT,
  },
  {
    color: COLOR.BACKGROUND.GREEN,
    name: '객관식',
    type: PROBLEM_TYPE.MULTIPLE,
  },
];
