import React from "react";
import { BiCart, BiLike } from "react-icons/bi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="mt-5">
      <div className="container  mx-auto px-3 md:px-5">
        <div className="navbar text-white bg-privetColor px-8 rounded-t-xl">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/static">Static</Link>
                </li>
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
              </ul>
            </div>
            <Link to={"/"} className=" text-xl">
              Gadget Heaven
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/static">Static</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end flex gap-4 ">
            <button className="bg-white relative p-2 border rounded-full text-2xl  text-black">
              <Link to="/dashboard">
                <span className="bg-amber-600 text-white rounded-full px-1 text-sm absolute -top-2 right-0">
                  0
                </span>
                <span>
                  <BiCart />
                </span>
              </Link>
            </button>
            <button className="bg-white p-2 border relative rounded-full text-2xl  text-black">
              <Link to="/dashboard">
                <span className="bg-amber-600 text-white rounded-full px-1 text-sm absolute -top-2 right-0">
                  0
                </span>
                <span>
                  <BiLike />
                </span>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
