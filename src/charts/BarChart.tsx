import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { BarChartProps } from "../types";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const months = ["January", "February", "March", "April", "May", "June", "July","August","September","October","November","December"];

export function BarChart({
  data_1,
  data_2,
  title_1,
  title_2,
  bgColor_1,
  bgColor_2,
  horizontal = false,
  labels = months,
}: BarChartProps) {
  const options: ChartOptions<"bar"> = {
    responsive: true,
    indexAxis: horizontal ? "y" : "x",
    plugins: {
      legend: {
        display:false,
        position: "top" as const,
      },
      title: {
        display: false,
        text: "Chart.js Bar Chart",
      },
    },
    scales:{
        y:{
            beginAtZero:true,
            grid:{
                display:true
            }
        },
        x:{
            beginAtZero:true,
            grid:{
                display:false
            }
        },
    }
  };

  const data: ChartData<"bar", number[], string> = {
    labels,
    datasets: [
      {
        label: title_1,
        data: data_1,
        backgroundColor: bgColor_1,
      },
      {
        label: title_2,
        data: data_2,
        backgroundColor: bgColor_2,
      },
    ],
  };
  return <Bar options={options} data={data} />;
}
