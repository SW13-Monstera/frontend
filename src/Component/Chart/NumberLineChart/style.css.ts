import { themeColors } from './../../../styles/theme.css';
import { style, styleVariants } from '@vanilla-extract/css';

export const numberLineValueWrapperStyle = style({
  position: 'relative',
  display: 'flex',
  justifyContent: 'space-between',
  paddingBottom: '1rem',
});

export const numberLineWrapperStyle = style({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: '0.75rem',
  background: themeColors.line.d,
  borderRadius: '8px',
});

export const numberCircleMarkStyle = style({
  position: 'absolute',
  width: '1.3125rem',
  height: '1.3125rem',
  borderRadius: '50%',
  backgroundColor: themeColors.background.FF,
});

export const numberCircleMarkColorStyle = styleVariants({
  same: [numberCircleMarkStyle, { boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.25)' }],
  bigger: [numberCircleMarkStyle, { boxShadow: ' 0px 0px 16px #2A7AF3' }],
  smaller: [numberCircleMarkStyle, { boxShadow: '0px 0px 16px #EB564C' }],
});

export const numberCircleMarkWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

export const numberCircleMarkSpeechBubble = style({
  position: 'absolute',
  height: '100px',
  display: 'flex',
  alignItems: 'start',
  justifyContent: 'center',
});

export const numberCirleMarkContentStyle = style({});
