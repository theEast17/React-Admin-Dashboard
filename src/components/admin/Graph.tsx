import { category } from "../../utils";

const Graph = () => {
  return (
    <section className="mb-5 border min-h-[50%] grid [grid-template-columns:3fr_1fr] gap-6">
      <div>
        <h2 className="uppercase border text-center -tracking-tighter bg-white rounded-md shadow-sm">
          Revenue and transaction
        </h2>
      </div>
      <div className="realtive pt-4 border flex flex-col justify-center items-center gap-4 bg-white rounded-md shadow-sm">
        <h3 className="uppercase text-center -tracking-tighter">inventory</h3>
        <div className="overflow-y-auto max-h-44 custom-scrollbar">
          {category.map((item) => {
            return (
              <div className="grid [grid-template-columns:1fr_2fr_1fr] ml-4 mb-3 capitalize">
                <h4 className="text-sm -tracking-tight">{item.name}</h4>
                <span className={`h-2 ml-3 mr-3 rounded-md top-2 bg-zinc-200 relative progress`} style={{
                    '--progress-width':`${item.percentage}%`
                }}></span>
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
