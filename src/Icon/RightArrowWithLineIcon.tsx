import { IIcon } from '../types/icon';

export const RightArrowWithLineIcon = ({ fill, width, height }: IIcon) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M3.33301 10H16.6663M10.833 4.16669L16.6663 10L10.833 15.8334'
        stroke={fill}
        strokeOpacity='0.5'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
