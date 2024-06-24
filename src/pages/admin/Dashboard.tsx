import Graph from "../../components/admin/Graph";
import SearchBar from "../../components/admin/SearchBar";
import Stat from "../../components/admin/Stat";
import Transaction from "../../components/admin/Transaction";


const Dashboard = () => {
  return (
    <section className="w-full py-3 pr-5 overflow-y-auto custom-scrollbar">
      <SearchBar/>
      <Stat/>
      <Graph/>
      <Transaction/>
    </section>
  );
};

export default Dashboard;
