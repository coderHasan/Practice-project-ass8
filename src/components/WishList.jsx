import { useEffect, useState } from "react";
import { getProduct2 } from "../utils/storage";

const WishList = () => {
  const [productsWishlist, setProductToWishlist] = useState([]);
  const product = getProduct2();
  useEffect(() => {
    setProductToWishlist(product);
  }, []);
  return (
    <div>
      <div className="mt-5">
        {productsWishlist?.map((item, index) => (
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishList;
