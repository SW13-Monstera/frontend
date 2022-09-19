export const formatNumber = (num: number) => {
  return num.toLocaleString('ko-KR', { maximumFractionDigits: 2 });
};
