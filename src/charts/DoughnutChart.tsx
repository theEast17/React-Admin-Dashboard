import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartOptions } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import {ChartData} from 'chart.js'
import { DoughnutChartProps } from '../types';

ChartJS.register(ArcElement, Tooltip, Legend);

export function DoughnutChart({data,title,bgColor,border_color,labels=['Boys','Girls'],width = 100, height = 100,cutout=80}:DoughnutChartProps) {

    const doughnutData: ChartData<"doughnut",number[],string>={
        labels,
        datasets:[
            {
                label:title,
                data:data,
                backgroundColor:bgColor,
                borderColor:border_color
            }
        ], 
    }

    const options: ChartOptions<'doughnut'> = {
        responsive: true,
        plugins: {
            legend: {
                position: "top" as const,
            },
        },
        cutout
    };

  return <Doughnut data={doughnutData} options={options} width={width} height={height} />;
}
