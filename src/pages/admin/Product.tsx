import { Link } from "react-router-dom";
import ProductTable from "../../Table/ProductTable";
import { FaPlus } from "react-icons/fa";

const Product = () => {
  return (
    <section>
      <ProductTable />
      <Link to={"/admin/product/new"} className="absolute border right-0 mr-4 bg-red text-white p-2 hover:bg-orange-600 transition-all rounded-full top-2 border-red">
        <FaPlus />
      </Link>
    </section>
  );
};

export default Product;
