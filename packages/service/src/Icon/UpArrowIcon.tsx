import { IIcon } from '../types/icon';

export const UpArrowIcon = ({ fill, width, height }: IIcon) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 15 10'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M13.2375 10L7.5 3.81916L1.7625 10L0 8.09717L7.5 -1.74356e-07L15 8.09717L13.2375 10Z'
        fill={fill}
      />
    </svg>
  );
};
