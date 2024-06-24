import { RiCoupon3Fill, RiDashboardFill, RiShoppingBag3Fill } from "react-icons/ri";
import { AiFillFileText } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { FaChartBar, FaChartLine, FaChartPie, FaGamepad, FaStopwatch } from "react-icons/fa";


export const dashboardNavigation = [
    {
        title: "Dashboard",
        icon: <RiDashboardFill />,
        navigate: "dashboard",
    },
    {
        title: "Product",
        icon: <RiShoppingBag3Fill />,
        navigate: "product",
    },
    {
        title: "Customer",
        icon: <AiFillFileText />,
        navigate: "customer",
    },
    {
        title: "Transaction",
        icon: <IoIosPeople />,
        navigate: "transaction",
    },
];

export const chartNavigation = [
    {
        title: "Bar",
        icon: <FaChartBar />,
        navigate: "/admin/chart/bar",
    },
    {
        title: "Pie",
        icon: <FaChartPie />,
        navigate: "/admin/chart/pie",
    },
    {
        title: "Line",
        icon: <FaChartLine />,
        navigate: "/admin/chart/line",
    }
];

export const appsNavigation = [
    {
        title: "Stopwatch",
        icon: <FaStopwatch />,
        navigate: "/admin/app/stopwatch",
    },
    {
        title: "Coupan",
        icon: <RiCoupon3Fill />,
        navigate: "/admin/app/coupan",
    },
    {
        title: "Toss",
        icon: <FaGamepad />,
        navigate: "/admin/app/toss",
    }
];

export const statistics=[
    {
        title:'Revenue',
        total:'$34000',
        percentage:`40`,
        bgColor:'rgb(0,115,255)'
    },
    {
        title:'Users',
        total:'400',
        percentage:`-30`,
         bgColor:'rgb(255,89,09)'
    },
    {
        title:'Transactions',
        total:'2300',
        percentage:`50`,
         bgColor:'rgb(255,196,0)'
    },
    {
        title:'Products',
        total:'1000',
        percentage:`30`,
         bgColor:'rgb(100,50,200)'
    },
]

export const category=[
    {
        name:'laptop',
        percentage:40
    },
    {
        name:'mobile',
        percentage:30
    },
    {
        name:'earbuds',
        percentage:20
    },
    {
        name:'Cameras',
        percentage:80
    },
    {
        name:'laptop',
        percentage:40
    },
    {
        name:'mobile',
        percentage:30
    },
    {
        name:'earbuds',
        percentage:20
    },
    {
        name:'Cameras',
        percentage:80
    },
    {
        name:'laptop',
        percentage:40
    },
    {
        name:'mobile',
        percentage:30
    },
    {
        name:'earbuds',
        percentage:20
    },
    {
        name:'Cameras',
        percentage:80
    },
]