import { IIcon } from '../types/icon';

export const CheckboxChecked = ({ fill, width, height, id }: IIcon) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      id={id}
    >
      <path
        d='M13.8333 0.5H2.16667C1.24167 0.5 0.5 1.25 0.5 2.16667V13.8333C0.5 14.75 1.24167 15.5 2.16667 15.5H13.8333C14.7583 15.5 15.5 14.75 15.5 13.8333V2.16667C15.5 1.25 14.7583 0.5 13.8333 0.5ZM6.33333 12.1667L2.16667 8L3.34167 6.825L6.33333 9.80833L12.6583 3.48333L13.8333 4.66667L6.33333 12.1667Z'
        fill={fill}
      />
    </svg>
  );
};
