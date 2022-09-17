import { IIcon } from '../types/icon';

export const ArrowRightIcon = ({ fill, width, height }: IIcon) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 18 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clip-path='url(#clip0_34_480)'>
        <path
          d='M6.44238 12.4425L9.87738 9L6.44238 5.5575L7.49988 4.5L11.9999 9L7.49988 13.5L6.44238 12.4425Z'
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id='clip0_34_480'>
          <rect width='18' height='18' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};
