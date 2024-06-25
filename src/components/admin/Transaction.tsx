import { BiMaleFemale } from "react-icons/bi";
import { DoughnutChart } from "../../charts/DoughnutChart";
import Table from "./Table";
import data from '../../data.json'

const Transaction = () => {
  return (
    <section className="mb-5 grid [grid-template-columns:1fr_3fr] max-md:[grid-template-columns:1fr] gap-6">
      <div className="bg-white rounded-md relative shadow-sm pb-4 max-md:overflow-x-auto">
        <h2 className="pt-3 pb-4 uppercase text-center -tracking-tighter">
          Gender ration
        </h2>
        <div className="relative flex justify-center items-center">
        <DoughnutChart
          data={[12, 19]}
          title="ratio"
          bgColor={["rgba(255, 99, 132)", "rgba(54, 162, 235)"]}
          border_color={['rgba(255, 99, 132, 1)','rgba(54, 162, 235, 1)']}
        //   you can dynamically add labels 
       />
        <p className="text-2xl absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-0%]">
          <BiMaleFemale />
        </p>
        </div>
      </div>

      <div className="bg-white rounded-md shadow-sm max-md:overflow-x-auto">
        <Table data={data.transaction} />
      </div>
    </section>
  );
};

export default Transaction;
