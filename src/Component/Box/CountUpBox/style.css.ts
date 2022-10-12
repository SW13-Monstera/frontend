import { style } from '@vanilla-extract/css';
import { COLOR } from '../../../constants/color';

export const statisticsBoxStyle = style([
  {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',

    width: '30%',
    maxWidth: '25rem',
    minWidth: 'fit-content',
    height: '10rem',

    background: COLOR.BACKGROUND.BLUE,
    color: COLOR.PRIMARY,
    borderRadius: '10px',
    padding: '1rem',
  },
]);

export const statisticsLabelStyle = style({
  fontWeight: '400',
  fontSize: '1.25rem',
  lineHeight: '1.5rem',
  color: COLOR.TEXT[8],
  whiteSpace: 'nowrap',
});

export const statisticsNumberStyle = style({
  fontWeight: '900',
  fontSize: '2.5rem',
  lineHeight: '2.5rem',
  color: COLOR.PRIMARY,
});
