import { useState } from "react";
import { OrderItemType, OrderType } from "../../types";
import { Link } from "react-router-dom";

const ManageTransaction = () => {
  const image =
    "https://th.bing.com/th/id/OIP.Ze9Q83wRU9Ffy4871rcezgHaHa?w=198&h=197&c=7&r=0&o=5&dpr=1.5&pid=1.7";
  const orderItems: OrderItemType[] = [
    {
      name: "Puma shoes",
      photo: image,
      _id: "hshdjd",
      quantity: 4,
      price: 2000,
    },
  ];

  const [order, setOrder] = useState<OrderType>({
    _id: "dsdsd",
    name: "shubham",
    city: "ahmedabad",
    state: "Gujrat",
    country: "india",
    address: "124,Aqua square behind",
    pinCode: 1234,
    status: "Processing",
    subTotal: 4000,
    discount: 100,
    shippingCharges: 80,
    tax: 100,
    total: 4000 + 80 + 100 - 100,
    orderItems,
  });

  const handleStatus=()=>{
    setOrder((prev)=>({
        ...prev,
        status:prev.status==='Processing' ? "Shipped" : "Delivered",
    }))
  }

  return (
    <section className="grid grid-cols-2 place-items-center w-full gap-6">
      <div className="h-[80%] shadow-md w-full p-5 rounded-md">
        <h2 className="text-center text-xl -tracking-tighter mb-6 uppercase">
          Order Items
        </h2>
        <div className="flex items-center justify-between">
          {order.orderItems.map((order) => (
            <>
              <img
                src={order.photo}
                alt="picture"
                className="h-16 w-16 rounded-full"
              />
              <p className="text-lg">{order.name}</p>
              <Link to={`/product/${order._id}`}></Link>
              <span className="text-lg">
                ${order.price} X {order.quantity} = $
                {order.price * order.quantity}
              </span>
            </>
          ))}
        </div>
      </div>
      <div className="h-[80%] shadow-md w-full p-5 md:mr-8 rounded-md">
        <h2 className="text-center text-xl -tracking-tighter mb-6 uppercase">
          Order Info
        </h2>
        <div className="flex flex-col gap-4">
          <div className="capitalize">
            <strong>User Info</strong>
            <p>Name:{order.name}</p>
            <p>Address:{order.address}</p>
          </div>
          <div className="capitalize">
            <strong>Amount Info</strong>
            <p>SubTotal:{order.subTotal}</p>
            <p>Shipping Charges:{order.shippingCharges}</p>
            <p>Tax:{order.tax}</p>
            <p>Discount:{order.discount}</p>
            <p>Total:{order.total}</p>
          </div>
          <div className="capitalize">
            <strong>Status Info</strong>
            <p>
              Status:
              <span
                className={`${
                  order.status === "Processing" ? "text-green" : "text-red"
                } ml-1 `}
              >
                {order.status}
              </span>
            </p>
          </div>
        </div>
        <button
          className="block mt-5 text-center bg-sky-500 hover:bg-sky-600 transition-all rounded-lg text-white p-2 w-full border"
        onClick={handleStatus}
        >
          Status
        </button>
      </div>
    </section>
  );
};

export default ManageTransaction;
