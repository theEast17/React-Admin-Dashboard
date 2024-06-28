import { Column } from "react-table";
import { ProductTableDataType } from "../types";
import ReactTableHOC from "../components/admin/ReactTableHOC";
import { useCallback, useState } from "react";
import shoes from '../assets/shoes.jpg'
import { Link } from "react-router-dom";


const columns: Column<ProductTableDataType>[] = [
  {
    Header: "Photo",
    accessor: "photo",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Price",
    accessor: "price",
  },
  {
    Header: "Stock",
    accessor: "stock",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const arr: ProductTableDataType[] = [
    {
        photo: <img src={shoes} alt="image" className="h-14 w-14 object-contain" />,
        name: "Puma shoes",
        price:690,
        stock:3,
        action:<Link to={'/admin/product/:id'} className="border p-3 bg-sky-400 rounded-md hover:bg-sky-300 transition-all">Manage</Link>
    },
    {
        photo: <img src={shoes} alt="image" className="h-14 w-14 object-contain" />,
        name: "nike shoes",
        price:800,
        stock:6,
        action:<Link to={'/admin/product/:id'} className="border p-3 bg-sky-400 rounded-md hover:bg-sky-300 transition-all">Manage</Link>
    },
    {
        photo: <img src={shoes} alt="image" className="h-14 w-14 object-contain" />,
        name: "abc shoes",
        price:1000,
        stock:70,
        action:<Link to={'/admin/product/:id'} className="border p-3 bg-sky-400 rounded-md hover:bg-sky-300 transition-all">Manage</Link>
    },
    {
        photo: <img src={shoes} alt="image" className="h-14 w-14 object-contain" />,
        name: "Puma shoes",
        price:690,
        stock:3,
        action:<Link to={'/admin/product/:id'} className="border p-3 bg-sky-400 rounded-md hover:bg-sky-300 transition-all">Manage</Link>
    },
    {
        photo: <img src={shoes} alt="image" className="h-14 w-14 object-contain" />,
        name: "nike shoes",
        price:800,
        stock:6,
        action:<Link to={'/admin/product/:id'} className="border p-3 bg-sky-400 rounded-md hover:bg-sky-300 transition-all">Manage</Link>
    },
    {
        photo: <img src={shoes} alt="image" className="h-14 w-14 object-contain" />,
        name: "abc shoes",
        price:1000,
        stock:70,
        action:<Link to={'/admin/product/:id'} className="border p-3 bg-sky-400 rounded-md hover:bg-sky-300 transition-all">Manage</Link>
    },
    {
        photo: <img src={shoes} alt="image" className="h-14 w-14 object-contain" />,
        name: "Puma shoes",
        price:690,
        stock:3,
        action:<Link to={'/admin/product/:id'} className="border p-3 bg-sky-400 rounded-md hover:bg-sky-300 transition-all">Manage</Link>
    },
    {
        photo: <img src={shoes} alt="image" className="h-14 w-14 object-contain" />,
        name: "nike shoes",
        price:800,
        stock:6,
        action:<Link to={'/admin/product/:id'} className="border p-3 bg-sky-400 rounded-md hover:bg-sky-300 transition-all">Manage</Link>
    },
    {
        photo: <img src={shoes} alt="image" className="h-14 w-14 object-contain" />,
        name: "abc shoes",
        price:1000,
        stock:70,
        action:<Link to={'/admin/product/:id'} className="border p-3 bg-sky-400 rounded-md hover:bg-sky-300 transition-all">Manage</Link>
    },
    {
        photo: <img src={shoes} alt="image" className="h-14 w-14 object-contain" />,
        name: "Puma shoes",
        price:690,
        stock:3,
        action:<Link to={'/admin/product/:id'} className="border p-3 bg-sky-400 rounded-md hover:bg-sky-300 transition-all">Manage</Link>
    },
    {
        photo: <img src={shoes} alt="image" className="h-14 w-14 object-contain" />,
        name: "nike shoes",
        price:800,
        stock:6,
        action:<Link to={'/admin/product/:id'} className="border p-3 bg-sky-400 rounded-md hover:bg-sky-300 transition-all">Manage</Link>
    },
];

const ProductTable = () => {
  const [data] = useState<ProductTableDataType[]>(arr);

  return useCallback(
    ReactTableHOC<ProductTableDataType>(columns, data, "Products",true),
    []
  )();
};

export default ProductTable;
