import { DoughnutChart } from "../../charts/DoughnutChart";
import { PieChart } from "../../charts/PieChart";
import categories from "../../data.json";

const Pie = () => {
  return (
    <section className="w-full max-md:p-4 py-3 pr-5 max-md:overflow-x-hidden overflow-y-auto custom-scrollbar">
      <div>
        <h1 className="text-2xl font-bold mb-3">Pie and Doughnut Charts</h1>

        <div className="w-[40%] m-auto mb-5 max-md:w-[100%]">
          <PieChart
            labels={["Processing", "Shipped", "delivered"]}
            data={[12, 9, 3]}
            bgColor={[
              `hsl(110,80%,80%)`,
              `hsl(110,80%,50%)`,
              `hsl(110,40%,50%)`,
            ]}
            offset={[0, 0, 50]}
          />
          <h1 className="text-2xl text-center mb-10 -tracking-tight ">
            Order Fulfillment Ratio
          </h1>
        </div>

        <div>
          <div className="w-[40%] m-auto mb-5 max-md:w-[100%]">
            <DoughnutChart
              data={categories.categories.map((cat) => cat.value)}
              labels={categories.categories.map((cat) => cat.heading)}
              bgColor={[
                "rgba(255, 99, 132)",
                "rgba(54, 162, 235)",
                "rgba(154, 262, 35)",
                "rgba(244, 62, 35)",
              ]}
              border_color={[
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(154, 262, 35)",
                "rgba(244, 62, 35)",
              ]}
              offset={[0, 30, 50, 50]}
            />
            <h1 className="text-2xl text-center mb-10 -tracking-tight">
              Product Categories Ratio
            </h1>
          </div>
        </div>

        <div>
          <div className="w-[40%] m-auto mb-5 max-md:w-[100%]">
            <DoughnutChart
              data={[100, 60]}
              labels={["In Stock", "Out of Stocks"]}
              bgColor={["rgba(255, 99, 132)", "rgba(54, 162, 235)"]}
              border_color={["rgba(255, 99, 132)", "rgba(54, 162, 235)"]}
              offset={[0, 50]}
              cutout={"70%"}
            />
            <h1 className="text-2xl text-center mb-10 -tracking-tight">
              Stock Availability
            </h1>
          </div>
        </div>

        <div>
          <div className="w-[40%] m-auto mb-5 max-md:w-[100%]">
            <DoughnutChart
              data={[100, 60, 70, 200, 69]}
              labels={[
                "Marketing Cost",
                "Discount",
                "Burnt",
                "Production Cost",
                "Net Margin",
              ]}
              bgColor={["rgba(255, 99, 132)", "rgba(54, 162, 235)", "rgba(154, 262, 35)",
                "rgba(244, 62, 35)","rgb(34,56,78)"]}
              border_color={["rgba(255, 99, 132)", "rgba(54, 162, 235)","rgba(154, 262, 35)",
                "rgba(244, 62, 35)","rgb(34,56,78)"]}
              offset={[10,20,30,20,20]}
              cutout={"70%"}
            />
            <h1 className="text-2xl text-center mb-10 -tracking-tight">
              Revenue Distribition
            </h1>
          </div>
        </div>

        <div className="w-[40%] m-auto mb-5 max-md:w-[100%]">
          <PieChart
            labels={["Teenager(Below 20)",  "Adult(20-40)","Older(Above 40)"]}
            data={[9, 19, 30]}
            bgColor={[
              `hsl(210,80%,80%)`,
              `hsl(210,80%,50%)`,
              `hsl(210,40%,50%)`,
            ]}
            offset={[0, 0, 50]}
          />
          <h1 className="text-2xl text-center mb-10 -tracking-tight">
            Order Fulfillment Ratio
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Pie;
