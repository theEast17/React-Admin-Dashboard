import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import { statistics } from "../../utils";

const Stat = () => {
  return (
    <section className="mb-5">
      <div className="grid grid-cols-4 gap-4">
        {statistics.map((stat) => {
          const percent = stat.percentage.split("").join("");
          return (
            <article
              key={stat.title}
              className="flex justify-around items-center border p-3 rounded-lg shadow-md bg-white"
            >
              <div className="flex flex-col gap-2">
                <p className="text-sm text-zinc-400">{stat.title}</p>
                <h3 className="font-bold text-xl">{stat.total}</h3>
                <p
                  className={`text-sm ${
                    Number(percent) > 0 ? "text-green" : "text-red"
                  } flex items-center gap-2`}
                >
                  <span>
                    {Number(percent) > 0 ? (
               
                      <HiTrendingUp />
           
                      
                    ) : (
                      <HiTrendingDown />
                    )}
                  </span>
                  {Number(percent) > 0 ? `+${percent}` : percent}
                </p>
              </div>
              <div
                className={`rounded-full relative progress-circle  `}
                style={{
                  '--progress-value': Math.abs(Number(stat.percentage)),
                  '--progress-color': stat.bgColor,
                }}
              >
                <h1 className="centerElement text-sm font-semibold">{Number(percent) > 0 ? `+${percent}` : percent}</h1>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Stat;
