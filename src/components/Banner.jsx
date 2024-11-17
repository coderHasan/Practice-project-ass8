import React from "react";

const Banner = () => {
  return (
    <div className=" container mx-auto px-3 md:px-5">
      <div className="bg-privetColor text-center pb-28 rounded-b-xl">
        <h1 className="text-4xl text-center font-semibold text-white mb-4 pt-3 leading-tight">
          Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
        </h1>
        <p className="w-6/12 mx-auto text-white mb-4">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>

        <button className="btn hover:bg-inherit mb-6">Shop Now</button>
      </div>
    </div>
  );
};

export default Banner;
