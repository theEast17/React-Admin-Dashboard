import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/admin/Dashboard";





// client routes
const Home = lazy(() => import("./pages/client/Home"));
const Search = lazy(() => import("./pages/client/Search"));
const Cart = lazy(() => import("./pages/client/Cart"));

// admin routes
const Product = lazy(() => import("./pages/admin/Product"));
const Transaction = lazy(() => import("./pages/admin/Transaction"));
const Customer = lazy(() => import("./pages/admin/Customer"));
const NewProduct = lazy(() => import("./components/admin/NewProduct"));
const EditProduct = lazy(() => import("./components/admin/EditProduct"));
const ManageTransaction = lazy(() => import("./components/admin/ManageTransaction"));
const Bar = lazy(() => import("./pages/admin/Bar"));
const Pie = lazy(() => import("./pages/admin/Pie"));
const Line = lazy(() => import("./pages/admin/Line"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: "/search",
    element: (
      <Suspense fallback={<Loader />}>
        <Search />
      </Suspense>
    ),
  },
  {
    path: "/cart",
    element: (
      <Suspense fallback={<Loader />}>
        <Cart />
      </Suspense>
    ),
  },

  // admin routes
  {
    path: "/admin",
    element: <DashboardLayout />,
    children: [
      {
        path: "dashboard",
        element: (
          <Suspense fallback={<Loader />}>
            <Dashboard />
          </Suspense>
        ),
      },
      {
        path: "product",
        element: (
          <Suspense fallback={<Loader />}>
            <Product />
          </Suspense>
        ),
      },
      {
        path: "product/new",
        element: (
          <Suspense fallback={<Loader />}>
            <NewProduct />
          </Suspense>
        ),
      },
      {
        path: "product/:id",
        element: (
          <Suspense fallback={<Loader />}>
            <EditProduct />
          </Suspense>
        ),
      },
      {
        path: "transaction",
        element: (
          <Suspense fallback={<Loader />}>
            <Transaction />
          </Suspense>
        ),
      },
      {
        path: "transaction/:id",
        element: (
          <Suspense fallback={<Loader />}>
            <ManageTransaction />
          </Suspense>
        ),
      },
      {
        path: "customer",
        element: (
          <Suspense fallback={<Loader />}>
            <Customer />
          </Suspense>
        ),
      },
      {
        path:'chart/bar',
        element:(
          <Suspense fallback={<Loader />}>
          <Bar />
        </Suspense>
        )
      },
      {
        path:'chart/pie',
        element:(
          <Suspense fallback={<Loader />}>
          <Pie />
        </Suspense>
        )
      },
      {
        path:'chart/line',
        element:(
          <Suspense fallback={<Loader />}>
          <Line />
        </Suspense>
        )
      },
      {
        path:'app/toss',
        element:(
          <Suspense fallback={<Loader />}>
          <Line />
        </Suspense>
        )
      },
      {
        path:'app/coupan',
        element:(
          <Suspense fallback={<Loader />}>
          <Line />
        </Suspense>
        )
      },
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
