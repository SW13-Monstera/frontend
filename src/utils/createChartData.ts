import { COLOR } from '../constants/color';

export const createCategoryChartData = (chartData: number[]) => {
  return {
    labels: ['OS', 'DB', 'Data Structure', 'Network'],
    datasets: [
      {
        label: 'category',
        data: chartData,
        backgroundColor: [COLOR.POINT1, COLOR.POINT2, COLOR.POINT3, COLOR.POINT4],
        borderColor: [COLOR.GRAY],
      },
    ],
  };
};
