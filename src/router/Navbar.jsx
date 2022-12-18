import Cookies from "js-cookie";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleSignout = (e) => {
    Cookies.remove("token");
    Cookies.remove("user");
    navigate("/");
  };

  return (
    <>
      <nav className="px-2 sm:px-4 py-3 w-full z-20 top-0 left-0 border-b border-gray-200 fixed backdrop-blur-sm bg-white/30">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Link to={"/"}>
            <h1 className="text-xl font-bold">
              <span className="text-sky-500">J</span>Seekers
            </h1>
          </Link>
          <div className="flex">
            <ul className="flex self-center">
              <li>
                <Link
                  to={"/"}
                  className="py-1 pl-2 pr-2 md:py-2 md:pl-3 md:pr-4 text-black "
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"/job-vacancy"}
                  className=" py-1 pl-2 pr-2 md:py-2 md:pl-3 md:pr-4 text-black "
                >
                  Find Job
                </Link>
              </li>
              <li>
                <Link
                  to={"/signup"}
                  className="py-1 pl-2 pr-2 md:py-2 md:pl-3 md:pr-4 text-black"
                >
                  Sign Up
                </Link>
              </li>
            </ul>

            {!Cookies.get("token") && (
              <button
                type="button"
                className="text-white bg-sky-500 hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md  px-2 md:px-5 py-1.5 md:py-2.5 text-center mr-2 md:mr-3 "
              >
                <Link to={"/signin"}>Sign In</Link>
              </button>
            )}
            {Cookies.get("token") && (
              <button
                type="button"
                onClick={handleSignout}
                className="text-white bg-sky-500 hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md  px-2 md:px-5 py-1.5 md:py-2.5 text-center mr-2 md:mr-3 "
              >
                Sign Out
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
