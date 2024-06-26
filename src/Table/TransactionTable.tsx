import { Column } from "react-table";
import { TransactionTableDataType} from "../types";
import ReactTableHOC from "../components/admin/ReactTableHOC";
import { useCallback, useState } from "react";
import { Link } from "react-router-dom";


const columns: Column<TransactionTableDataType>[] = [
  {
    Header: "User",
    accessor: "user",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Discount",
    accessor: "discount",
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const arr: TransactionTableDataType[] = [
    {
        user: "Pushpa Raj",
        amount:10000,
        discount:1000,
        quantity:2,
        status: <span className="text-red">Processing</span>,
        action:<Link to={'/admin/transaction/:id'} className="border px-1 py-1 bg-sky-400 rounded-md hover:bg-sky-300 transition-all">Manage</Link>
    },
    {
        user: "Bahubali",
        amount:50000,
        discount:4000,
        quantity:4,
        status:<span className="text-green">Shipped</span>,
        action:<Link to={'/admin/transaction/:id'} className="border px-1 py-1 bg-sky-400 rounded-md hover:bg-sky-300 transition-all">Manage</Link>
    }
    
    
];

const TransactionTable = () => {
  const [data] = useState<TransactionTableDataType[]>(arr);

  return useCallback(
    ReactTableHOC<TransactionTableDataType>(columns, data, "Transactions",true),
    []
  )();
};

export default TransactionTable;
