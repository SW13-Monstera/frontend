import { style } from '@vanilla-extract/css';

export const mainStyle = style({
  position: 'relative',

  display: 'flex',
  flexDirection: 'column',

  width: '100%',
  height: 'auto',
  minHeight: `51rem`,

  flex: 1,
});
