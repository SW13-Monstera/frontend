import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface IChart {
  data: any;
}

export const DoughnutChart = ({ data }: IChart) => {
  const options = {
    responsive: true,
    interaction: {
      mode: 'index' as const,
      intersect: true,
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: (context: any) => context.formattedValue + '%',
        },
      },
    },
  };
  return <Doughnut data={data} options={options} />;
};
