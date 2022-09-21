import { style } from '@vanilla-extract/css';
import { COLOR } from '../../../constants/color';

export const speechBubbleStyle = style({
  margin: '0 auto',
  position: 'relative',
  width: '7.75rem',
  height: '3rem',
  textAlign: 'center',
  backgroundColor: COLOR.PRIMARY,
  borderRadius: '8px',
  boxShadow: '2px 2px 4px #888',

  fontWeight: '700',
  fontSize: '1rem',
  lineHeight: '1.5rem',

  '::after': {
    content: '',
    position: 'absolute',
    width: '0',
    height: '0',
    top: '100%',
    right: '50%',
    transform: 'translateX(50%)',
    border: '14px solid',
    borderColor: `${COLOR.PRIMARY} transparent transparent transparent`,
  },
});
