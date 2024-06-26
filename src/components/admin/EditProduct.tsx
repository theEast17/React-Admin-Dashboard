import { ChangeEvent, useState } from "react";

interface ProductData {
  username: string;
  price: number;
  stock: number;
  photo: string;
}

const EditProduct = () => {
  const [data, setData] = useState<ProductData>({
    username: "Puma Shoes",
    price: 1200,
    stock: 10,
    photo: "https://th.bing.com/th/id/OIP.Ze9Q83wRU9Ffy4871rcezgHaHa?w=198&h=197&c=7&r=0&o=5&dpr=1.5&pid=1.7",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const imageHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = e.target.files?.[0];
    const reader: FileReader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setData((prevData) => ({
            ...prevData,
            photo: reader.result,
          }));
        }
      };
    }
  };

  const handleForm = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // const { username, price, stock, photo } = data;
  };
  return (
    <section className="grid grid-cols-2 place-items-center w-full ">
      <section className="border p-5 flex flex-col h-[80%] shadow-md">
        {data.stock > 0 ? (
 <span className="text-right text-green">{data.stock} Available</span>
        ) : (
          <span className="text-right text-red">No Available</span>
        )}
        <strong className="mb-2">Id: abcd</strong>
        <img src={data.photo} alt="photo" className="h-1/2 w-full object-contain bg-center mb-2" />
        <p className="text-center mb-2 uppercase">{data.username}</p>
        <strong className="text-center">${data.price}</strong>

      </section>

      <section className="flex justify-center items-center h-[80%] border shadow-md">
      <form onSubmit={handleForm} className="rounded-lg p-6">
        <h1 className="text-center font-semibold -tracking-tight text-xl my-2">
          Manage a Product
        </h1>
        <div className="flex flex-col mb-2">
          <label htmlFor="name" className="text-sm">
            Name
          </label>
          <input
            type="text"
            placeholder="Enter Product Name"
            value={data.username}
            onChange={handleChange}
            name="username"
            className="border px-3 py-1 text-sm rounded-md outline-none"
            required
          />
        </div>
        <div className="flex flex-col mb-2">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            placeholder="Enter Price"
            value={data.price}
            onChange={handleChange}
            name="price"
            className="border px-3 py-1 text-sm rounded-md outline-none"
            required
          />
        </div>
        <div className="flex flex-col mb-2">
          <label htmlFor="stock">Stock</label>
          <input
            type="number"
            placeholder="Enter stock"
            value={data.stock}
            onChange={handleChange}
            className="border px-3 py-1 text-sm rounded-md outline-none"
            name="stock"
            required
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="photo">Photo</label>
          <input
            type="file"
            name="photo"
            onChange={imageHandleChange}
            className="border px-3 py-1 text-sm rounded-md outline-none"
            required
          />
          {data.photo && <img className="h-12 w-12 m-auto mt-6 rounded-full object-cover" src={data.photo} alt="productPhoto" />}
        </div>
        <button
          type="submit"
          className="bg-sky-500 w-full text-white font-bold hover:bg-sky-700 transition-all py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Update
        </button>
      </form>
    </section>

    </section>
  )
}

export default EditProduct