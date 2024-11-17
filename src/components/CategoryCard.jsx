import React from "react";

import Category from "./Category";
import { Link, Outlet } from "react-router-dom";

const CategoryCard = ({ categorys }) => {
  return (
    <section>
      <div className="container mx-auto px-3 md:px-5">
        <div className="md:flex gap-6">
          <div className="w-3/12 border p-3 rounded-lg">
            <div className="text-center bg-gray-200 cursor-pointer rounded-full py-3 my-3">
              <Link to={"/"}>All Product</Link>
            </div>
            {categorys.map((category) => (
              <Link key={category.name} to={`/cardspage/${category.name}`}>
                <Category category={category} />
              </Link>
            ))}
          </div>
          <div className="">
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryCard;
