import Graph from "../../components/admin/Graph";
import SearchBar from "../../components/admin/SearchBar";
import Stat from "../../components/admin/Stat";
import Transaction from "../../components/admin/Transaction";


const Dashboard = () => {
  return (
    <section className="w-full max-md:p-4 py-3 pr-5 max-md:overflow-x-hidden overflow-y-auto custom-scrollbar">
      <SearchBar/>
      <Stat/>
      <Graph/>
      <Transaction/>
    </section>
  );
};

export default Dashboard;
