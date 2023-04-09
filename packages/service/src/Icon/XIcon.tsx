import { IIcon } from '../types/icon';

export const XIcon = ({ width, height, fill }: IIcon) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 10 10'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M9.66683 1.27333L8.72683 0.333328L5.00016 4.05999L1.2735 0.333328L0.333496 1.27333L4.06016 4.99999L0.333496 8.72666L1.2735 9.66666L5.00016 5.93999L8.72683 9.66666L9.66683 8.72666L5.94016 4.99999L9.66683 1.27333Z'
      fill={fill}
    />
  </svg>
);
