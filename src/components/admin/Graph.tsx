import { category } from "../../utils";
import { BarChart } from "../../charts/BarChart";

const Graph = () => {
  return (
    <section className="mb-5 grid [grid-template-columns:3fr_1fr] max-md:[grid-template-columns:1fr] gap-6">
      <div className="bg-white rounded-md shadow-sm p-4 max-md:overflow-x-auto">
        <h2 className="pt-3 pb-4 uppercase text-center -tracking-tighter">
          Revenue and transaction
        </h2>
        <BarChart
          data_1={[200, 300, 340, 550, 250, 839, 100, 200, 400, 45, 678, 400]}
          data_2={[500, 340, 678, 594, 697, 100, 300, 250, 89, 100, 200, 400]}
          title_1="Revenue"
          title_2="Transaction"
          bgColor_1="rgb(255,196,0)"
          bgColor_2="rgb(100,50,200)"
        />
      </div>
      <div className="max-md:overflow-x-auto relative pt-4 flex flex-col justify-center items-center gap-4 bg-white rounded-md shadow-sm">
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
