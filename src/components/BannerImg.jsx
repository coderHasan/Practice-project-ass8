import React from "react";

const BannerImg = () => {
  return (
    <div className="w-[600px] h-[300px] mx-auto border-2 border-white p-3 rounded-xl relative -top-28">
      <img
        src="../assets/banner.jpg"
        className=" w-full h-full rounded-xl object-cover"
      />
    </div>
  );
};

export default BannerImg;
