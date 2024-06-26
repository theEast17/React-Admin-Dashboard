import { LineChart } from "../../charts/LineChart";

const Line = () => {
  return (
    <section className="w-full max-md:p-4 py-3 pr-5 max-md:overflow-x-hidden overflow-y-auto custom-scrollbar">
      <div>
        <h1 className="text-2xl font-bold mb-3">Line Charts</h1>
        <div className="w-[80%] m-auto mb-5">
          <LineChart
            data={[200, 340, 250, 239, 150, 300, 200, 200, 400, 205, 178, 140]}
            label="Users"
            bgColor={`hsla(360,40%,60%,.4)`}
            borderColor={`hsl(360,40%,60%)`}
          />
          <h1 className="capitalize text-2xl mt-3 -tracking-tight text-center">
            Active Users
          </h1>
        </div>
      </div>

      <div className="w-[80%] m-auto mb-5">
        <LineChart
          data={[
            200, 340, 205, 290, 500, 30, 200, 200, 340, 405, 178,
            1140,
          ]}
          label="Product"
          bgColor={`hsla(160,40%,30%,.4)`}
          borderColor={`hsl(160,40%,30%)`}
        />
        <h1 className="capitalize text-2xl mt-3 -tracking-tight text-center">
          Total Products
        </h1>
      </div>

      
        <div className="w-[80%] m-auto mb-5">
          <LineChart
            data={[ 2000, 3040, 2050, 2390, 1500, 3000, 1200, 2200, 3400, 4205, 3178,
              1140,]}
            label="Revenue"
            bgColor={`hsla(90,40%,60%,.4)`}
            borderColor={`hsl(90,40%,60%)`}
          />
          <h1 className="capitalize text-2xl mt-3 -tracking-tight text-center">
          Total Revenue
        </h1>
        </div>
    </section>
  );
};

export default Line;
