import { Column } from "react-table";
import { CustomerTableDataType} from "../types";
import ReactTableHOC from "../components/admin/ReactTableHOC";
import { useCallback, useState } from "react";
import user from '../assets/user.jpg'
import { FaTrash } from "react-icons/fa";


const columns: Column<CustomerTableDataType>[] = [
  {
    Header: "Avatar",
    accessor: "avatar",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Gender",
    accessor: "gender",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Role",
    accessor: "role",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const arr: CustomerTableDataType[] = [
    {
        avatar: <img src={user} alt="image" className="h-14 w-14 rounded-full object-cover border border-zinc"  />,
        name: "Pushpa Raj",
        gender:"male",
        email:"pushpa@gmail.com",
        role:'user',
        action: <button className="text-red"><FaTrash/></button>
    },
    {
        avatar: <img src={user} alt="image" className="h-14 w-14 rounded-full object-cover border border-zinc"  />,
        name: "Bahubali",
        gender:"male",
        email:"amrendrabahubali@gmail.com",
        role:'user',
        action: <button className="text-red"><FaTrash/></button>
    },
    
];

const CustomerTable = () => {
  const [data] = useState<CustomerTableDataType[]>(arr);

  return useCallback(
    ReactTableHOC<CustomerTableDataType>(columns, data, "Customers",true),
    []
  )();
};

export default CustomerTable;
