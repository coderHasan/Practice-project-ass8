import React, { useEffect, useState } from "react";
import { BiCart, BiLike } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { useLoaderData, useParams } from "react-router-dom";
import {
  getProduct,
  setProductToLocalStoreg,
  setProductToWishlist,
} from "../utils/storage";

const Dtails = () => {
  const detailsData = useLoaderData();
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const [widhList, setWidhList] = useState([]);

  useEffect(() => {
    const detailsFind = detailsData.find((p) => p.id == id);
    const detailsFind2 = detailsData.find((p) => p.id == id);
    setDetails(detailsFind);
    setWidhList(detailsFind2);
  }, [detailsData, id]);

  const { name, image, price, specification, description, rating } = details;

  const handleProduct = (details) => {
    setProductToLocalStoreg(details);
  };
  const handleFevorate = (details) => {
    setProductToWishlist(details);
  };

  return (
    <div>
      <div className="w-[800px] mx-auto border-2 border-white p-3 rounded-xl relative -top-28">
        <div className="card card-side px-6 bg-base-100 shadow-xl">
          <figure>
            <img src={image} alt={name} />
          </figure>
          <div className="card-body ml-7">
            <h2 className="card-title text-2xl">{name}</h2>
            <p className="text-xl font-semibold">Price: ${price}</p>
            <p className="text-gray-400 mb-5">{description}</p>
            <p className="font-bold mb-5">Specification:</p>
            <ul>
              {specification?.map((item, index) => (
                <li
                  className="list-decimal font-semibold text-gray-400"
                  key={index}
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className=" flex gap-2 items-center font-bold ">
              Rating <input className="w-9" type="color" />
            </p>
            <p className="flex gap-2 items-center text-xl">
              <FaStar color="gold" />
              <FaStar color="gold" />
              <FaStar color="gold" />
              <FaStar color="gold" />
              <FaRegStarHalfStroke />

              <span className="text-sm bg-gray-200 text-gray-500 py-1 px-2 font-bold rounded-full">
                {rating}
              </span>
            </p>

            <div className="flex items-center gap-3">
              <button
                onClick={() => handleProduct(details)}
                className="bg-privetColor px-4 py-2 rounded-full flex items-center gap-2 font-bold text-[16px] text-white"
              >
                Add To Card <BiCart size={28} />
              </button>
              <button
                onClick={() => handleFevorate(widhList)}
                className="border rounded-full p-3"
              >
                <BiLike size={28} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dtails;
