import { style } from '@vanilla-extract/css';
import baseFontStyle from '../../styles/font.css';

export const pageWrapperStyle = style({
  display: 'flex',

  padding: '3rem',
});

export const pageTitleStyle = style([
  baseFontStyle.xlarge,
  {
    fontWeight: 'bold',
    marginBottom: '1rem',
    paddingLeft: '0.7rem',
  },
]);

export const rightSideWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',

  marginLeft: '3rem',
});

export const colorLabelListStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
  gap: '1rem',

  alignSelf: 'end',
});
