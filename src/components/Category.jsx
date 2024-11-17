import React from "react";

const Category = ({ category }) => {
  return (
    <div className="">
      <div className="text-center bg-gray-200 cursor-pointer rounded-full py-3 my-3">
        {category.name}
      </div>
    </div>
  );
};

export default Category;
