import { IIcon } from '../types/icon';

export const UploadIcon = ({ fill, width, height }: IIcon) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      version='1.1'
      id='Capa_1'
      x='0px'
      y='0px'
      viewBox='0 0 512.022 512.022'
      xmlSpace='preserve'
      width={width}
      height={height}
      fill={fill}
    >
      <g>
        <path d='M165.558,141.889l59.328-59.349l0.448,290.816c0,17.673,14.327,32,32,32l0,0c17.673,0,32-14.327,32-32l-0.448-290.453   l58.987,58.987c12.278,12.712,32.536,13.064,45.248,0.786s13.064-32.536,0.786-45.248c-0.258-0.267-0.52-0.529-0.786-0.786   l-68.523-68.523c-37.49-37.491-98.274-37.491-135.765-0.001c0,0-0.001,0.001-0.001,0.001L120.31,96.641   c-12.278,12.712-11.926,32.97,0.786,45.248C133.497,153.866,153.157,153.866,165.558,141.889z' />
        <path d='M480.011,309.355c-17.673,0-32,14.327-32,32v97.941c-0.012,4.814-3.911,8.714-8.725,8.725H72.736   c-4.814-0.012-8.714-3.911-8.725-8.725v-97.941c0-17.673-14.327-32-32-32s-32,14.327-32,32v97.941   c0.047,40.146,32.58,72.678,72.725,72.725h366.549c40.146-0.047,72.678-32.58,72.725-72.725v-97.941   C512.011,323.682,497.684,309.355,480.011,309.355z' />
      </g>
    </svg>
  );
};