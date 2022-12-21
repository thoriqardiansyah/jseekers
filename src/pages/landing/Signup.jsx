import axios from "axios";
import Cookies from "js-cookie";
import React, { useContext } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";

const Signup = () => {
  const { state } = useContext(GlobalContext);
  const navigate = useNavigate();
  let { setFetchStatus } = state;
  const [input, setInput] = useState({
    name: "",
    image_url: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;

    if (name === "name") {
      setInput({ ...input, name: value });
    } else if (name === "image") {
      setInput({ ...input, image_url: value });
    } else if (name === "email") {
      setInput({ ...input, email: value });
    } else if (name === "password") {
      setInput({ ...input, password: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(input);
    let { name, image_url, email, password } = input;

    axios
      .post(
        `https://dev-example.sanbercloud.com/api/register`,
        { name, image_url, email, password },
        { headers: { Authorization: "Bearer " + Cookies.get("token") } }
      )
      .then((res) => {
        setFetchStatus(true);
        navigate("/signin");
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <>
      <section id="signup" className="py-28 h-screen">
        <div className="flex flex-wrap justify-center">
          <div className="bg-white rounded-md shadow-lg p-4 w-[90%] mt-14 md:w-1/2">
            <h1 className="text-xl font-bold text-center my-5">Sign Up</h1>
            <span className="text-md text-gray-500 flex justify-center">
              Already have an account ?
              <Link
                to={"/signin"}
                className="text-sm text-blue-500 hover:text-blue-700 flex items-center"
              >
                Sign in
              </Link>
            </span>

            <div>
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Name :
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={input.name}
                    onChange={handleChange}
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="image"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Image :
                  </label>
                  <input
                    type="text"
                    name="image_url"
                    value={input.image_url}
                    onChange={handleChange}
                    id="image"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                </div>
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
                    min={8}
                    id="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                  />
                  <p className="text-sm font-thin text-gray-400">
                    Minimal 8 Karakter
                  </p>
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

export default Signup;
