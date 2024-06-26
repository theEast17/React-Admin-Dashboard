import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartOptions } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import {ChartData} from 'chart.js'
import { DoughnutChartProps } from '../types';

ChartJS.register(ArcElement, Tooltip, Legend);

export function DoughnutChart({data,bgColor,border_color,labels=['Boys','Girls'],cutout=80,offset}:DoughnutChartProps) {

    const doughnutData: ChartData<"doughnut",number[],string>={
        labels,
        datasets:[
            {
                data:data,
                backgroundColor:bgColor,
                borderColor:border_color,
                offset
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

  return <Doughnut data={doughnutData} options={options}/>;
}
