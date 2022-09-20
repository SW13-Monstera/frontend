import { COLOR } from '../constants/color';
import { IChartElement } from '../types/chart';

export const createCategoryChartData = (chartData: IChartElement[]) => {
  return {
    labels: chartData.map((e) => e.name),
    datasets: [
      {
        label: 'category',
        data: chartData.map((e) => e.value),
        backgroundColor: [COLOR.POINT1, COLOR.POINT2, COLOR.POINT3, COLOR.POINT4],
        borderColor: [COLOR.GRAY],
      },
    ],
  };
};
