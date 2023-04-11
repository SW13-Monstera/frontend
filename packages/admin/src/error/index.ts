import { isNumeric } from '../utils';

export const isEmptyOrNotNumericError = (value: any) => {
  if (!value || !isNumeric(value)) {
    alert('Invalid value: 에러가 발생했습니다. 이전 페이지로 돌아갑니다.');
    setTimeout(() => {
      history.back();
    }, 1000);
    throw new Error('invalid value');
  }
};
