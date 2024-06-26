import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartOptions } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import {ChartData} from 'chart.js'
import { PieChartProps } from '../types';

ChartJS.register(ArcElement, Tooltip, Legend);

export function PieChart({data,bgColor,labels=['Boys','Girls'],offset}:PieChartProps) {

    const pieChartData: ChartData<"pie",number[],string>={
        labels,
        datasets:[
            {
                data:data,
                backgroundColor:bgColor,
                offset
            }
        ], 
    }

    const options: ChartOptions<'pie'> = {
        responsive: true,
        plugins: {
            legend: {
                display:false,
            },
        },
    };  

  return <Pie data={pieChartData} options={options} />;
}
