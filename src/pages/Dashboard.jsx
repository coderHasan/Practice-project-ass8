import React from "react";
import Heading from "../components/Heading";
import { NavLink, Outlet, useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();

  const isCartActive =
    location.pathname === "/dashboard/productCard" ||
    location.pathname === "/dashboard";

  return (
    <section>
      <div className="container mx-auto px-3 md:px5">
        <div>
          <div className="bg-privetColor text-center pb-28 rounded-b-xl">
            <Heading
              subTitle={"Product Details"}
              desc=" Explore the latest gadgets that will take your experience to the
                next level. From smart devices to the coolest accessories, we
                have it all!"
            />

            <div className="flex items-center gap-5 justify-center">
              <NavLink
                to="productCard"
                className={({ isActive }) =>
                  `${
                    isActive || isCartActive ? "active" : ""
                  } px-8 border border-white py-2 rounded-full block text-xl font-bold text-white`
                }
              >
                {" "}
                Cart
              </NavLink>
              <NavLink
                to="wishlist"
                className={({ isActive }) =>
                  ` ${
                    isActive ? "active" : ""
                  } text-white px-8 border border-white py-2 rounded-full block text-xl font-bold
                  `
                }
              >
                Wishlist
              </NavLink>
            </div>
          </div>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
