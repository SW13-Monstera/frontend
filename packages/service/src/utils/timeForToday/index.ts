import moment from 'moment';
import 'moment/dist/locale/ko';

export function timeForToday(createdAt: string) {
  return moment(createdAt).locale('ko').fromNow();
}
