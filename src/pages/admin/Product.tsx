import { Link } from "react-router-dom";
import ProductTable from "../../Table/ProductTable";
import { FaPlus } from "react-icons/fa";

const Product = () => {
  return (
    <section className="w-[80%] max-md:w-full mx-auto relative bg-[rgb(247,247,247)]">
      <ProductTable />
      <Link to={"/admin/product/new"} className="absolute right-2 top-2 bg-red text-white p-2 hover:bg-orange-600 transition-all rounded-full">
        <FaPlus />
      </Link>
    </section>
  );
};

export default Product;
