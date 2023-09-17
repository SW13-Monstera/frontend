import { style } from '@vanilla-extract/css';
import { COLOR } from '../../constants/color';
import { themeColors } from '../../styles/theme.css';

export const messageBaseStyle = style({
  position: 'relative',
  margin: '0 16px 20px 16px',
  maxHeight: '200px',
  padding: '8px',
  borderRadius: '4px',
});

export const messageBotStyle = style([
  messageBaseStyle,
  {
    backgroundColor: themeColors.background.F0,
    color: themeColors.text[1],
    '::before': {
      content: '',
      position: 'absolute',
      borderTop: '9px solid transparent',
      borderLeft: '9px solid transparent',
      borderRight: `9px solid ${themeColors.background.F0}`,
      borderBottom: '9px solid transparent',
      top: '3px',
      left: '-17px',
    },
  },
]);

export const messageUserStyle = style([
  messageBaseStyle,
  {
    backgroundColor: themeColors.text[2],
    color: themeColors.background.F0,
    '::before': {
      content: '',
      position: 'absolute',
      borderTop: '9px solid transparent',
      borderLeft: `9px solid ${themeColors.text[2]}`,
      borderRight: '9px solid transparent',
      borderBottom: '9px solid transparent',
      bottom: '3px',
      right: '-17px',
    },
  },
]);

export const messageListStyle = style({
  marginBottom: '20px',
  overflowX: 'hidden',
  overflowY: 'auto',
  height: '190px',
});

export const messageFormStyle = style({
  display: 'flex',
});

export const messageInputStyle = style({
  flexGrow: 1,
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  marginRight: '10px',
});

export const messageSubmitButtonStyle = style({
  padding: '10px 20px',
  backgroundColor: COLOR.PRIMARY,
  border: 'none',
  borderRadius: '5px',
  color: themeColors.background.F0,
  cursor: 'pointer',
});

export const chatAppStyle = style({
  position: 'fixed',
  bottom: '80px',
  right: '20px',
  float: 'right',
  maxWidth: '400px',
  height: '300px',
  marginRight: '30px',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  zIndex: '10',
  backgroundColor: themeColors.background.FF,
});

export const chatAppTitleStyle = style({
  textAlign: 'center',
  marginBottom: '20px',
  fontSize: '1.125rem',
});
