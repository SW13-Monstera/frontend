import { themeColors } from './../../../styles/theme.css';
import { style } from '@vanilla-extract/css';
import { spreadBoxShadow } from '../../../styles/keyframe.css';

export const problemSetListPageWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '2rem',
  padding: '3rem 1.5rem',
  width: '100%',
  height: '100%',
  alignSelf: 'center',
});

export const problemSetListPageContentStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '2rem',
  padding: '1.5rem',
  width: '90%',
  border: `1px solid ${themeColors.line.d}`,
  borderRadius: '8px',
  alignSelf: 'center',
});

export const titleWrapperStyle = style({
  display: 'flex',
  gap: '1rem',
});

export const titleDetailWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '.5rem',
});

export const titleStyle = style({
  fontWeight: '700',
  fontSize: '2.25rem',
  lineHeight: '2.75rem',
});

export const titleDescStyle = style({
  fontWeight: '500',
  fontSize: '1.25rem',
  lineHeight: '1.5rem',
});

export const problemSetListStyle = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  rowGap: '1.25rem',
  columnGap: '1.5rem',
  width: '100%',
  paddingTop: '1rem',
  overflowX: 'auto',

  '@media': {
    'screen and (max-width: 1600px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    'screen and (max-width: 1100px)': {
      gridTemplateColumns: 'repeat(1, 1fr)',
    },
  },
});

export const problemSetBoxStyle = style({
  width: '100%',
  height: '100%',
  padding: '1rem 1.5rem',
  color: themeColors.text[1],
  background: themeColors.background.FFLight,
  boxShadow: `0px 0px 4px ${themeColors.shadow[1]}`,
  borderRadius: '8px',
  transition: 'box-shadow .3s',
  animation: spreadBoxShadow,
  overflow: 'hidden',
  ':hover': {
    boxShadow: `4px 8px 24px  ${themeColors.shadow[1]}`,
  },
});

export const problemSetDetailWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

export const problemSetTitleStyle = style({
  fontWeight: '700',
  fontSize: '1.125rem',
  lineHeight: '1.5rem',
  color: themeColors.text[1],
  '@media': {
    'screen and (max-width: 650px)': {
      width: '20rem',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
  },
});

export const problemSetDescStyle = style({
  fontSize: '0.85rem',
  color: themeColors.text[3],
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

export const descriptionWrapStyle = style({
  height: '2.1875rem',
  lineHeight: '2.1875rem',
});

export const problemSetCountStyle = style({
  fontSize: '0.85rem',
  lineHeight: '1rem',
  color: themeColors.text[1],
});

export const startButtonWrapStyle = style({
  float: 'right',
  marginLeft: '1rem',
});
