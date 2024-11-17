import { Link, useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const CardsPage = () => {
  const data = useLoaderData();
  const { cardspage } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    if (cardspage) {
      const filterProduct = [...data].filter(
        (p) => p.category === cardspage || p.sub_name === cardspage
      );
      setProduct(filterProduct);
    } else {
      setProduct(data);
    }
  }, [cardspage, data]);

  return (
    <div className="grid gap-6">
      {product.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {product?.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className=" h-[500px] w-[500px] mx-auto mt-5 ">
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-center mb-5">
              Opps! That page cant be found
            </h1>
            <Link
              className=" text-white font-semibold bg-red-600 py-2 px-5 rounded-md"
              to={"/"}
            >
              Go To Shopping
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardsPage;
