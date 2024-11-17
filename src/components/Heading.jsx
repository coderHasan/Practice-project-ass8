import React from "react";

const Heading = ({ title, subTitle, desc }) => {
  return (
    <div>
      <h1 className="text-4xl font-semibold text-center mb-8">{title}</h1>
      <h1 className="text-4xl text-center font-semibold text-white mb-4 pt-3 leading-tight">
        {subTitle}
      </h1>
      <p className="w-6/12 mx-auto text-white mb-4">{desc}</p>
    </div>
  );
};

export default Heading;
