import { style, styleVariants } from '@vanilla-extract/css';
import { COLOR } from '../../../constants/color';

export const numberLineValueWrapperStyle = style({
  position: 'relative',
  display: 'flex',
  justifyContent: 'space-between',
  paddingTop: '1rem',
});

export const numberLineWrapperStyle = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: '0.75rem',
  background: COLOR.LINE.d,
  borderRadius: '8px',
});

export const numberCircleMarkStyle = style({
  position: 'absolute',
  width: '1.3125rem',
  height: '1.3125rem',
  borderRadius: '50%',
  backgroundColor: COLOR.WHITE,
});

export const numberCircleMarkColorStyle = styleVariants({
  same: [numberCircleMarkStyle, { boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.25)' }],
  bigger: [numberCircleMarkStyle, { boxShadow: ' 0px 0px 16px #2A7AF3' }],
  smaller: [numberCircleMarkStyle, { boxShadow: '0px 0px 16px #EB564C' }],
});

export const numberMarkTextStyle = style({
  fontWeight: '700',
  fontSize: '1rem',
  lineHeight: '1.5rem',
  color: COLOR.WHITE,
});

export const numberMarkTextLabelStyle = styleVariants({
  same: [numberMarkTextStyle, { fontWeight: '400', color: COLOR.LINE.c }],
  bigger: [numberMarkTextStyle, { fontWeight: '400', color: COLOR.BACKGROUND.RED }],
  smaller: [numberMarkTextStyle, { fontWeight: '400', color: COLOR.BACKGROUND.BLUE }],
});

export const numberCircleMarkWrapper = style({
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

export const numberCircleMarkSpeechBubble = style({
  position: 'absolute',
  height: '6.25rem',
  display: 'flex',
  alignItems: 'start',
  justifyContent: 'center',
});

export const speechBubbleTextWrapperStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '.3rem',
  whiteSpace: 'nowrap',
  margin: 0,
});
