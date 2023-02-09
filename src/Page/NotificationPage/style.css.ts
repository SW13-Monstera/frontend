import { style } from '@vanilla-extract/css';
import { COLOR } from '../../constants/color';

export const contentStyle = style({
  padding: '5rem 3rem',
});

export const titleWrapStyle = style({
  padding: '1.2rem 1rem',
  borderRadius: '4px',
  backgroundColor: COLOR.BACKGROUND.F3,
  color: COLOR.TEXT[1],
  fontSize: '1.25rem',
  lineHeight: '1.5rem',
});

export const titleNumberStyle = style({
  color: COLOR.PRIMARY,
});

export const listStyle = style({
  marginTop: '1rem',
  fontSize: '1.125rem',
  lineHeight: '1.5rem',
  overflow: 'hidden',
});

export const itemStyle = style({
  '::before': {
    float: 'left',
    width: '0.5rem',
    height: '0.5rem',
    margin: '0.75rem 0.25rem 0 0',
    borderRadius: '50%',
    backgroundColor: COLOR.PRIMARY,
    content: '',
  },
});

export const itemDimmedStyle = style([
  itemStyle,
  {
    color: COLOR.LINE.c,
    '::before': {
      backgroundColor: COLOR.LINE.c,
    },
  },
]);

export const itemLinkStyle = style({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0.25rem 0',
  overflow: 'hidden',
});

export const itemTextStyle = style({
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
});

export const itemTimeStyle = style({
  marginLeft: '1rem',
  whiteSpace: 'nowrap',
});
