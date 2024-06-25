import { Outlet } from "react-router-dom";
import Sidebar from "../components/admin/Sidebar";
import { Suspense } from "react";
import Loader from "../components/Loader";

const DashboardLayout = () => {
  return (
    <main className="grid [grid-template-columns:1fr_4fr] max-md:[grid-template-columns:1fr] gap-6 h-screen bg-[rgb(247,247,247)]">
      <Sidebar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default DashboardLayout;
