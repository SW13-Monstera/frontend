import { themeColors } from './../../styles/theme.css';
import { style, styleVariants } from '@vanilla-extract/css';
import { COLOR } from '../../constants/color';
import baseFontStyle from '../../styles/font.css';

export const boxStyle = style({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: themeColors.background.F3,
  gap: '1rem',

  width: '35%',
  height: 'fit-content',

  borderRadius: '20px',

  marginTop: '2rem',
  padding: '2rem',

  '@media': {
    'screen and (max-width: 1000px)': {
      width: '88%',
    },
  },
});

export const section1Style = style({
  display: 'flex',
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
  gap: '0.5rem',
});

export const imageWrapperStyle = style({
  width: '100px',
  height: '100px',
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '50%',
});

export const imageStyle = style({
  display: 'inline',
  margin: '0 auto',
  height: '100%',
  width: 'auto',
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

export const section1NumericDataStyle = style({
  display: 'flex',
  gap: '0.5rem',
});

export const labelTitleStyle = style([
  baseFontStyle.medium,
  {
    color: themeColors.text[1],
  },
]);

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
  width: '25px',
  height: '25px',
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
