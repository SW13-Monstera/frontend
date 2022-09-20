import { IIcon } from '../types/icon';
import { ArrowRightIcon } from './ArrowRightIcon';

export const ArrowLeftIcon = ({ fill, width, height }: IIcon) => {
  return (
    <div style={{ transform: 'rotate(180deg)' }}>
      <ArrowRightIcon fill={fill} width={width} height={height} />
    </div>
  );
};
