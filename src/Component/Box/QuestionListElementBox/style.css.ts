import { style } from '@vanilla-extract/css';
import { COLOR } from '../../../constants/color';
import baseFontStyle from '../../../styles/font.css';

export const textBoxStyle = style({
  boxSizing: 'border-box',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '10px',

  width: '100%',
  height: '100%',
  padding: '0.625rem',

  color: COLOR.TITLEACTIVE,
  background: COLOR.WHITE,
  border: `1px solid ${COLOR.GRAY}`,
  borderRadius: '10px',
});

export const textBoxMainStyle = style({
  boxSizing: 'border-box',

  display: 'flex',
  flexDirection: 'column',

  '@media': {
    'screen and (min-width: 600px)': {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '1rem',
    },
  },
});

export const detailWrapperStyle = style([
  baseFontStyle.xsmall,
  {
    '@media': { 'screen and (max-width: 600px)': { display: 'none' } },
  },
]);

export const titleStyle = style({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '1.5rem',
  lineHeight: '1.5rem',
});

export const detailStyle = style({
  fontFamily: 'Inter',
  fontStyle: 'italic',
  fontWeight: '300',
  fontSize: '0.75rem',
  lineHeight: '1rem',
});

export const tagListStyle = style({ display: 'flex', gap: '0.125rem' });
