import { IIcon } from '../types/icon';

export const PolygonIcon = ({ width, height, fill }: IIcon) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 19'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M2.70577 17L10.5 3.5L18.2942 17H2.70577Z' stroke={fill} strokeWidth='3' />
    </svg>
  );
};
