import { style } from '@vanilla-extract/css';
import { COLOR } from '../../constants/color';

export const sectionStyle = style({
  padding: '5rem 3rem',
});

export const titleWrapStyle = style({
  display: 'flex',
  gap: '2rem',
});

export const titleTextWrapStyle = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

export const titleStyle = style({
  fontSize: '2rem',
  lineHeight: '2.5rem',
  fontWeight: 'bold',
});

export const descriptionStyle = style({
  fontSize: '1.25rem',
  lineHeight: '1.5rem',
});

export const tableWrapStyle = style({
  maxWidth: '1000px',
  margin: '0 auto',
});

export const tableStyle = style({
  tableLayout: 'fixed',
  borderCollapse: 'collapse',
  width: '100%',
  marginTop: '3rem',
});

export const rankColumnStyle = style({
  width: '15%',
});

export const tableHeadRowStyle = style({
  borderBottom: `2px solid ${COLOR.TEXT[1]}`,
});

export const tableBodyStyle = style({
  textAlign: 'center',
});

export const tableBodyRowStyle = style({
  borderBottom: `1px solid ${COLOR.TEXT[9]}`,
});

export const tableCellStyle = style({
  padding: '0.5rem 0',
});

export const linkStyle = style({
  color: COLOR.PRIMARY,
  ':hover': {
    textDecoration: 'underline',
  },
});
