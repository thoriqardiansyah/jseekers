import React from "react";

const ChangePassword = () => {
  return (
    <div className="bg-white rounded-md shadow-md p-4 h-full">
      <h1 className="text-xl font-bold text-center my-5">Change Password</h1>
      <div>
        <form>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Password Baru:
            </label>
            <input
              type="password"
              name="password"
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
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
