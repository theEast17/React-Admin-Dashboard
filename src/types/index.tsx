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

export interface LineChartProps {
  data: number[];
  label: string;
  bgColor: string;
  borderColor: string;
  labels?: string[];
}

export interface DoughnutChartProps {
  data: number[];
  bgColor: string[];
  border_color: string[];
  labels?: string[];
  cutout?: number | string;
  offset?: number[];
}

export interface PieChartProps {
  data: number[];
  bgColor: string[];
  labels?: string[];
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

export interface CustomerTableDataType {
  avatar: ReactElement;
  name: string;
  gender: string;
  email: string;
  role: string;
  action: ReactElement;
}

export interface TransactionTableDataType {
  user: string;
  amount: number;
  discount: number;
  quantity: number;
  status: ReactElement;
  action: ReactElement;
}

export type OrderItemType = {
  name: string;
  _id: string;
  photo: string;
  price: number;
  quantity: number;
};

export type OrderType = {
  _id: string;
  name: string;
  city: string;
  state: string;
  country: string;
  address: string;
  pinCode: number;
  status: "Processing" | "shipped" | "Delivered";
  subTotal: number;
  discount: number;
  shippingCharges: number;
  tax: number;
  total: number;
  orderItems: OrderItemType[];
};
