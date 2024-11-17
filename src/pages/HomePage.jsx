import React from "react";
import Banner from "../components/Banner";
import BannerImg from "../components/BannerImg";
import Heading from "../components/Heading";
import CategoryCard from "../components/CategoryCard";
import { useLoaderData } from "react-router-dom";

const HomePage = () => {
  const category = useLoaderData();

  return (
    <>
      {/* Banner */}
      <Banner />
      <BannerImg />
      <Heading title={"Explore Cutting-Edge Gadgets"} />
      <CategoryCard categorys={category} />
    </>
  );
};

export default HomePage;
