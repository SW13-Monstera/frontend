import { COLOR } from '../constants/color';
import { IChartElement } from '../types/chart';

export const createCategoryChartData = (chartData: IChartElement[]) => {
  return {
    labels: chartData.map((e) => e.name),
    datasets: [
      {
        label: 'category',
        data: chartData.map((e) => e.value),
        backgroundColor: Object.values(COLOR.CHART),
      },
    ],
  };
};
