import { ReactElement } from "react";

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

export interface TableDataType {
  id: string;
  quantity: number;
  discount: number;
  amount: number;
  status: string;
}

export interface ProductTableDataType {
  photo: ReactElement;
  name: string;
  price: number;
  stock: number;
  action: ReactElement;
}


export interface CustomerTableDataType{
  avatar:ReactElement;
  name:string;
  gender:string;
  email:string;
  role:string;
  action:ReactElement;
}

export interface TransactionTableDataType{
  user:string;
  amount:number;
  discount:number;
  quantity:number;
  status:ReactElement;
  action:ReactElement;
}
