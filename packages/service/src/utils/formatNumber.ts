export const formatNumber = (num: number | undefined) => {
  return num?.toLocaleString('ko-KR', { maximumFractionDigits: 2 });
};
