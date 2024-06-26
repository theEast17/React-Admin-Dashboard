import { BarChart } from "../../charts/BarChart";

const Bar = () => {
  return (
    <section className="w-full max-md:p-4 py-3 pr-5 max-md:overflow-x-hidden overflow-y-auto custom-scrollbar">
      <div className="mb-10 ">
        <h1 className="text-2xl font-bold mb-3">Bar Charts</h1>
        <div className="w-[80%] m-auto">
        <BarChart
          data_1={[
            2000, 340, 2250, 8239, 5150, 1300, 2003, 3200, 400, 4205, 6178,
            1400,
          ]}
          data_2={[
            5000, 3140, 6748, 1594, 6397, 1100, 3300, 3250, 890, 100, 1200, 400,
          ]}
          title_1="Products"
          title_2="Users"
          bgColor_1={`hsl(260,50%,30%)`}
          bgColor_2={`hsl(360,90%,90%)`}
        />
         <h1 className="capitalize text-2xl mt-3 -tracking-tight text-center">
          Top Selling Products and Top customer
        </h1>
        </div>
      </div>

      <div className="mb-6">
      <div className="w-[80%] m-auto">
        <BarChart
          data_1={[
            2000, 340, 2250, 8239, 5150, 1300, 2003, 3200, 400, 4205, 6178,
            1400,
          ]}
          data_2={[]}
          title_1="Products"
          title_2=""
          horizontal={true}
          bgColor_1={`hsl(260,50%,30%)`}
          bgColor_2={``}
        />
        </div>
      </div>
    </section>
  );
};

export default Bar;
