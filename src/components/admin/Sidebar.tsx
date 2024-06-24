import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import logoname from "../../assets/logoname.svg";
import { appsNavigation, chartNavigation, dashboardNavigation } from "../../utils";


const Sidebar = () => {
  return (
    <aside className="w-full bg-white z-10 p-4 overflow-y-auto custom-scrollbar">
      <div>
        <Link
          to={"/admin/dashboard"}
          className="flex h-12 w-full overflow-hidden"
        >
          <img src={logo} alt="logo" className="h-full object-cover" />
          <img
            src={logoname}
            alt="logoname"
            className="h-full w-full scale-[4.5] object-contain"
          />
        </Link>
      </div>

      <ul className="px-3 mt-9 flex flex-col gap-3">
        <h5 className="uppercase opacity-85 text-sm -tracking-tighter text-zinc-400">
          Dashboard
        </h5>
        {dashboardNavigation.map((item) => (
          <NavLink
            to={item.navigate}
            key={item.title}
            className={({ isActive }) =>
              isActive
                ? "border hover:bg-slate-100 bg-sky-100 p-2 rounded-lg cursor-pointer flex-start gap-4 transition-all "
                : "border hover:bg-slate-100 bg-transparent p-2 rounded-lg cursor-pointer flex-start gap-4 transition-all "
            }
          >
            <span>{item.icon}</span>
            <p>{item.title}</p>
          </NavLink>
        ))}

        <h5 className="uppercase opacity-85 mt-4 text-sm -tracking-tighter text-zinc-400">
          Charts
        </h5>
        {chartNavigation.map((item) => (
          <NavLink
            to={item.navigate}
            key={item.title}
            className={({ isActive }) =>
              isActive
                ? "border hover:bg-slate-100 bg-sky-100 p-2 rounded-lg cursor-pointer flex-start gap-4 transition-all "
                : "border hover:bg-slate-100  p-2 rounded-lg cursor-pointer flex-start gap-4 transition-all "
            }
          >
            <span>{item.icon}</span>
            <p>{item.title}</p>
          </NavLink>
        ))}

        <h5 className="uppercase opacity-85 mt-4 text-sm -tracking-tighter text-zinc-400">
          Apps
        </h5>
        {appsNavigation.map((item) => (
          <NavLink
            to={item.navigate}
            key={item.title}
            className={({ isActive }) =>
              isActive
                ? "border hover:bg-slate-100 bg-sky-100 p-2 rounded-lg cursor-pointer flex-start gap-4 transition-all "
                : "border hover:bg-slate-100  p-2 rounded-lg cursor-pointer flex-start gap-4 transition-all "
            }
          >
            <span className="">{item.icon}</span>
            <p>{item.title}</p>
          </NavLink>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
