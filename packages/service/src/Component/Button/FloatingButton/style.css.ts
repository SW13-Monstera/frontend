import { style } from '@vanilla-extract/css';
import { COLOR } from '../../../constants/color';
import { spreadBoxShadow } from '../../../styles/keyframe.css';
import { themeColors } from '../../../styles/theme.css';

export const floatingButtonStyle = style({
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '56px',
  height: '56px',
  cursor: 'pointer',
  borderRadius: '24px',
  background: `linear-gradient(${COLOR.PRIMARY} 0%, rgba(42,90,243) 100%)`,
  color: COLOR.BACKGROUND.ALICE_BLUE,
  fontSize: '2rem',
  boxShadow: `0px 0px 4px ${themeColors.shadow[1]}`,
  animation: spreadBoxShadow,
  zIndex: '10',

  ':hover': {
    boxShadow: `4px 8px 24px  ${themeColors.shadow[1]}`,
  },
});
