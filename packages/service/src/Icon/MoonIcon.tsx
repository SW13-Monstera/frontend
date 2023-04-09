import { IIcon } from '../types/icon';

export const MoonIcon = ({ width, height }: IIcon) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_58_640)'>
        <path
          d='M6 0.277993C6.09761 0.396606 6.15741 0.541765 6.17168 0.694716C6.18594 0.847667 6.154 1.00138 6.08 1.13599C5.50186 2.19747 5.19993 3.38729 5.202 4.59599C5.202 8.61699 8.48 11.873 12.52 11.873C13.047 11.873 13.56 11.818 14.053 11.713C14.2041 11.6803 14.3615 11.6928 14.5056 11.749C14.6497 11.8052 14.774 11.9026 14.863 12.029C14.957 12.1604 15.0049 12.3193 14.9993 12.4808C14.9937 12.6423 14.9349 12.7974 14.832 12.922C14.0477 13.8854 13.0582 14.6617 11.9358 15.1942C10.8134 15.7267 9.58632 16.002 8.344 16C3.734 16 0 12.286 0 7.70999C0 4.26599 2.114 1.31199 5.124 0.0599933C5.27394 -0.00337482 5.44039 -0.0163809 5.59835 0.022929C5.75631 0.0622388 5.89725 0.151742 6 0.277993Z'
          fill='#555555'
        />
      </g>
      <defs>
        <clipPath id='clip0_58_640'>
          <rect width='16' height='16' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};