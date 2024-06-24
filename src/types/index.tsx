export interface BarChartProps {
  horizontal?: boolean;
  data_1: number[];
  data_2: number[];
  title_1: string;
  title_2: string;
  bgColor_1: string;
  bgColor_2: string;
  labels?: string[];
}

export interface DoughnutChartProps {
  data: number[];
  title: string;
  bgColor: string[];
  border_color: string[];
  labels?: string[];
  width?: number;
  height?: number;
  cutout?: number | string;
  offset?: number[];
}
