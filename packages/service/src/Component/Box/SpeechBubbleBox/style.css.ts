import { style, styleVariants } from '@vanilla-extract/css';
import { COLOR } from '../../../constants/color';

export const speechBubbleStyle = style({
  margin: '0 auto',
  position: 'relative',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: 'fit-content',
  minWidth: '6rem',
  height: 'fit-content',
  minHeight: '2rem',
  textAlign: 'center',
  color: COLOR.WHITE,
  backgroundColor: COLOR.PRIMARY,
  borderRadius: '8px',

  fontWeight: '700',
  fontSize: '1rem',
  lineHeight: '1.5rem',

  padding: '.5rem',
  bottom: '1.2rem',

  '::after': {
    content: '',
    position: 'absolute',
    width: '0',
    height: '0',
    top: '100%',
    right: '50%',
    transform: 'translateX(50%)',
    border: '.875rem solid',
    borderColor: `${COLOR.PRIMARY} transparent transparent transparent`,
  },

  ':hover': {
    zIndex: 1,
  },
});

export const speechBubbleColorStyle = styleVariants({
  same: [
    speechBubbleStyle,
    {
      backgroundColor: COLOR.TEXT[5],
      '::after': { borderColor: `${COLOR.TEXT[5]} transparent transparent transparent` },
    },
  ],
  bigger: [
    speechBubbleStyle,
    {
      backgroundColor: COLOR.PRIMARY,
      '::after': { borderColor: `${COLOR.PRIMARY} transparent transparent transparent` },
    },
  ],
  smaller: [
    speechBubbleStyle,
    {
      backgroundColor: COLOR.RED,
      '::after': { borderColor: `${COLOR.RED} transparent transparent transparent` },
    },
  ],
});
