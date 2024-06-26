import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
    ChartData,
    ChartOptions,
    LineElement,
    Filler
  } from "chart.js";
  import { Line } from "react-chartjs-2";
  import { LineChartProps } from "../types";
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement,
    Filler
  );
  
  const months = ["January", "February", "March", "April", "May", "June", "July","August","September","October","November","December"];
  
  export function LineChart({
    data,
    label,
    bgColor,
    borderColor,
    labels = months,
  }: LineChartProps) {
    const options: ChartOptions<"line"> = {
      responsive: true,
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
  
    const lineData: ChartData<"line", number[], string> = {
      labels,
      datasets: [
        {
          fill:true,
          label,
          data,
          backgroundColor: bgColor,
          borderColor
        }
      ],
    };
    return <Line options={options} data={lineData} />;
  }
  