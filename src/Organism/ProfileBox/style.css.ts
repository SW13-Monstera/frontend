import { themeColors } from './../../styles/theme.css';
import { style, styleVariants } from '@vanilla-extract/css';
import { COLOR } from '../../constants/color';
import baseFontStyle from '../../styles/font.css';

export const boxStyle = style({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: themeColors.background.FF,
  gap: '1rem',

  width: '100%',
  height: 'fit-content',

  border: '1px solid #DDDDDD',
  borderRadius: '8px',

  padding: '2rem',
});

export const section1Style = style({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '1rem',
});

export const section1LeftStyle = style({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: '1rem',
});

export const section2Style = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
});
export const section3Style = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem',
});

export const imageWrapperStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '7rem',
  height: '7rem',
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '50%',
  cursor: 'pointer',
  transition: '.3s linear',
});

export const imageStyle = style({
  position: 'absolute',
  display: 'inline',
  margin: '0 auto',
  height: '100%',
  width: '100%',
});

export const defaultImageStyle = style({
  position: 'absolute',
  display: 'inline',
  margin: '0 auto',
  height: '50%',
  width: '50%',
});

export const imageUploadBackgroundStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  borderRadius: '50%',
  backgroundColor: COLOR.TITLEACTIVE,
  opacity: '0%',
  transition: '.3s linear',
  color: COLOR.WHITE,
  fontSize: '1.5rem',
  fontWeight: 700,
  zIndex: 1,
  cursor: 'pointer',
  ':hover': {
    opacity: '30%',
  },
});

export const imageUploadButtonStyle = style({
  position: 'absolute',

  borderRadius: '50%',
  textAlign: 'center',
  opacity: '0',
  transform: 'scale(2)',
  transition: 'all .3s linear',
  ':hover': {
    opacity: '1',
    transform: 'scale(1)',
  },
});

export const section1DataStyle = style([
  baseFontStyle.medium,
  {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',

    fontWeight: 'bold',
  },
]);

export const userNameTextStyle = style({
  fontWeight: '400',
  fontSize: '1rem',
  lineHeight: '1.5rem',
});

export const section1NumericDataStyle = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.25rem',
  fontSize: '1.125rem',
  lineHeight: '1.5rem',
});

export const section1NumberStyle = style({
  fontWeight: '900',
  color: themeColors.text[1],
});

export const section1UnitStyle = style({
  fontWeight: '400',
  color: themeColors.text[9],
});

export const labelTitleStyle = style({
  color: themeColors.text[5],
  alignSelf: 'start',
  fontWeight: '400',
  fontSize: '1rem',
  lineHeight: '1.5rem',
});

export const editButtonListStyle = style({
  gap: '1rem',
});

export const editButtonStyle = style([
  baseFontStyle.medium,
  {
    padding: '0.5rem',
  },
]);

export const linkButtonListStyle = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
});

export const linkButtonStyle = style({
  width: '30px',
  height: '30px',
  borderRadius: '3px',
});

export const linkButtonByDomainStyle = styleVariants({
  linkedin: [linkButtonStyle],
  github: [linkButtonStyle, { backgroundColor: COLOR.TITLEACTIVE }],
});

export const coreTechListStyle = style({
  display: 'flex',
  gap: '0.2rem',
});

export const chartWrapperStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '70%',
  maxWidth: '50rem',
  maxHeight: '50rem',
  alignSelf: 'center',
});
