import { category } from "../../utils";
import { BarChart } from "../../charts/BarChart";

const Graph = () => {
  return (
    <section className="mb-5 min-h-[50%] grid [grid-template-columns:3fr_1fr] gap-6">
      <div className="bg-white rounded-md shadow-sm p-4">
        <h2 className="pt-3 pb-4 uppercase text-center -tracking-tighter">
          Revenue and transaction
        </h2>
        <BarChart
          data_1={[20, 300, 40, 50, 250, 89, 100, 200, 400, 45, 678, 400]}
          data_2={[50, 34, 678, 54, 67, 100, 300, 250, 89, 100, 200, 400]}
          title_1="Revenue"
          title_2="Transaction"
          bgColor_1="rgb(255,196,0)"
          bgColor_2="rgb(100,50,200)"
        />
      </div>
      <div className="realtive pt-4 flex flex-col justify-center items-center gap-4 bg-white rounded-md shadow-sm">
        <h3 className="uppercase text-center -tracking-tighter">inventory</h3>
        <div className="overflow-y-auto max-h-44 custom-scrollbar">
          {category.map((item) => {
            return (
              <div className="grid [grid-template-columns:1fr_2fr_1fr] ml-4 mb-3 capitalize">
                <h4 className="text-sm -tracking-tight">{item.name}</h4>
                <span
                  className={`h-2 ml-3 mr-3 rounded-md top-2 bg-zinc-200 relative progress`}
                  style={{
                    "--progress-width": `${item.percentage}%`,
                  }}
                ></span>
                <h4 className="text-sm -tracking-tight">{item.percentage}%</h4>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Graph;
