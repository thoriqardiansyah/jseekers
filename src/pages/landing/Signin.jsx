import axios from "axios";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../router/Navbar";

const Signin = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    let { name, value } = e.target;

    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(input);

    let { email, password } = input;

    axios
      .post("https://dev-example.sanbercloud.com/api/login", {
        email,
        password,
      })
      .then((res) => {
        let { token, user } = res.data;
        Cookies.set("token", token, { expires: 7 });
        Cookies.set("user", JSON.stringify(user), { expires: 7 });
        navigate("/dashboard");
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <>
      <Navbar />
      <section id="signin" className="py-28 h-screen">
        <div className="flex flex-wrap justify-center">
          <div className="bg-white rounded-md shadow-lg p-4 w-[90%] mt-20 md:w-1/2">
            <h1 className="text-xl font-bold text-center my-5">Sign In</h1>
            <span className="text-md text-gray-500 flex justify-center">
              Create new a account
              <Link
                to={"/signup"}
                className="text-sm text-blue-500 hover:text-blue-700 flex items-center"
              >
                Sign Up
              </Link>
            </span>
            <div>
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email :
                  </label>
                  <input
                    type="text"
                    name="email"
                    value={input.email}
                    onChange={handleChange}
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="name@gmail.com"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Password :
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={input.password}
                    onChange={handleChange}
                    id="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signin;
