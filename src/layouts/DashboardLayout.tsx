import { Outlet } from "react-router-dom";
import Sidebar from "../components/admin/Sidebar";
import { Suspense, useEffect, useState } from "react";
import Loader from "../components/Loader";


const DashboardLayout = () => {
  const [show,setShow]=useState<boolean>(true)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 760) {
        setShow(false);
      } else {
        setShow(true);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <main className={`grid [grid-template-columns:1fr_4fr] max-md:grid-cols-1 gap-6 h-full bg-[rgb(247,247,247)]`}>  
      {show && <Sidebar />}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default DashboardLayout;
