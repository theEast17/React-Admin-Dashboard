import { Column } from "react-table";
import { TableDataType } from "../types";
import ReactTableHOC from "../components/admin/ReactTableHOC";

const columns: Column<TableDataType>[] = [
  {
    Header: "Id",
    accessor: "id",
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "Discount",
    accessor: "discount",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Status",
    accessor: "status",
  },
];

const Table = ({ data = [] }: { data: TableDataType[] }) => {
  return ReactTableHOC<TableDataType>(columns, data, "Top Transactions")();
};

export default Table
