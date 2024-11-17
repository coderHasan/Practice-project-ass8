import React, { useEffect, useState } from "react";
import { getProduct } from "../utils/storage";
import { RxCross2 } from "react-icons/rx";

const Product = () => {
  const [productsCatd, setproductsCatd] = useState([]);
  const [count, setCount] = useState(0);
  // const [sort, setSort]=useState(data)

  const data = getProduct();

  useEffect(() => {
    setproductsCatd(data);
    const totalCount = data.reduce(
      (sum, count) => sum + parseInt(count.price),
      0
    );
    setCount(totalCount);
  }, []);

  const handleSorted = (sorted) => {
    if (sorted === "price") {
      const sort = [...data].sort((a, b) => a.price - b.price);
      setproductsCatd(sort);
    }
  };

  return (
    <div className="container mx-auto px-3 md:px-5 mt-9">
      <div className="">
        <div className="flex justify-between items-center ">
          <h2 className="font-bold text-xl">Cart</h2>
          <div className=" flex gap-5 items-center">
            <p className="font-bold text-xl">
              Total cost: <span>${count}</span>
            </p>
            <button
              onClick={() => handleSorted("price")}
              className="py-2 px-5 border border-[#9538E2] rounded-full font-semibold text-textColor"
            >
              Sort by price
            </button>
            <button className="py-2 px-5 bg-privetColor border border-[#9538E2] rounded-full font-semibold text-white">
              Purchase
            </button>
          </div>
        </div>
        <div className="mt-5">
          {productsCatd?.map((item, index) => (
            <div
              key={index}
              className="card card-side bg-base-100 shadow-xl my-5"
            >
              <figure className="p-7 ">
                <img src={item.image} className="" alt="Movie" />
              </figure>
              <div className="flex items-center justify-between">
                <div className="card-body">
                  <h2 className="card-title">{item.name}</h2>
                  <p>{item.description}</p>
                  <p className="font-bold">Price: ${item.price}</p>
                </div>
                <div className="card-actions">
                  <button className="btn btn-primary">
                    <RxCross2 />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
