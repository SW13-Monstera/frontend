import { styleVariants } from '@vanilla-extract/css';

const baseFontStyle = styleVariants({
  title: {
    fontFamily: 'inherit',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '2.5rem',
    lineHeight: '3rem',
  }, // 제목
  xlarge: {
    fontFamily: 'inherit',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '1.5rem',
    lineHeight: '1.8125rem',
  }, // 서브 제목 등
  large: {
    fontFamily: 'inherit',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '1.5rem',
    lineHeight: '1.75rem',
  }, // 버튼 등
  medium: {
    fontFamily: 'inherit',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '1.25rem',
    lineHeight: '1.75rem',
  }, // 일반 텍스트
  small: {
    fontFamily: 'inherit',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '1rem',
    lineHeight: '1.5rem',
  },
  xsmall: {
    fontFamily: 'inherit',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '0.65rem',
    lineHeight: '0.9375rem',
  }, //태그 등
});

export default baseFontStyle;
