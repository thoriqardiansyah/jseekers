import axios from "axios";
import Cookies from "js-cookie";
import React, { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";

const ChangePassword = () => {
  const { state } = useContext(GlobalContext);
  let { setFetchStatus } = state;
  const [input, setInput] = useState({
    current_password: "",
    new_password: "",
    new_confirm_password: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;

    if (name === "current_password") {
      setInput({ ...input, current_password: value });
    } else if (name === "new_password") {
      setInput({ ...input, new_password: value });
    } else if (name === "new_confirm_password") {
      setInput({ ...input, new_confirm_password: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    let { current_password, new_password, new_confirm_password } = input;

    axios
      .post(
        `https://dev-example.sanbercloud.com/api/change-password`,
        { current_password, new_password, new_confirm_password },
        { headers: { Authorization: "Bearer " + Cookies.get("token") } }
      )
      .then((res) => {
        setFetchStatus(true);
        alert(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });

    setInput({
      current_password: "",
      new_password: "",
      new_confirm_password: "",
    });
  };

  return (
    <div className="bg-white rounded-md shadow-md p-4 h-full">
      <h1 className="text-xl font-bold text-center my-5">Change Password</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Current Password:
            </label>
            <input
              type="password"
              name="current_password"
              value={input.current_password}
              onChange={handleChange}
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
              min={8}
            />
            <p className="text-slate-400 text-sm my-2">Minimal 8 digit</p>
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              New Password:
            </label>
            <input
              type="password"
              name="new_password"
              value={input.new_password}
              onChange={handleChange}
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
              min={8}
            />
            <p className="text-slate-400 text-sm my-2">Minimal 8 digit</p>
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Confirm New Password:
            </label>
            <input
              type="password"
              name="new_confirm_password"
              value={input.new_confirm_password}
              onChange={handleChange}
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
              min={8}
            />
            <p className="text-slate-400 text-sm my-2">Minimal 8 digit</p>
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Change
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
