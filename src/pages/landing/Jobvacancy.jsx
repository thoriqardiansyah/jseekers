import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Jobvacancy = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("https://dev-example.sanbercloud.com/api/job-vacancy")
      .then((res) => {
        let data = res.data.data;
        setData(data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  const handleStatus = (status) => {
    if (status === 1) {
      return (
        <span className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">
          Dibuka
        </span>
      );
    } else if (status === 0) {
      return (
        <span className="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">
          Ditutup
        </span>
      );
    }
  };

  // const truncate = (str, length) => {
  //   if (str.length > length) {
  //     return str.slice(0, length) + "...";
  //   } else {
  //     return str;
  //   }
  // };

  const handleSubmit = (e) => {
    console.log(e.target.value);
  };

  console.log(data);
  return (
    <>
      <section id="job-vacancy" className="pt-36 pb-32 bg-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2">
          <div className="mb-12 px-4 py-4">
            <div className="w-full bg-white p-4 rounded-md shadow-md">
              {/* Search Position */}
              <form>
                <label
                  htmlFor="default-search"
                  className="text-base font-semibold text-gray-900"
                >
                  Search
                </label>
                <div className="relative mt-3">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search Position"
                    required
                  />
                </div>
              </form>

              <h1 className="mt-4 text-base font-semibold">Filter</h1>

              <form action="" onSubmit={handleSubmit}>
                <div className="my-6">
                  <label
                    htmlFor="default-input"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    City :
                  </label>
                  <div>
                    <select
                      id="countries"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option defaultValue={""}>Choose a city</option>
                      {data !== null &&
                        data.map((city) => {
                          return (
                            <option key={city.id}>{city.company_city}</option>
                          );
                        })}
                    </select>
                  </div>
                </div>
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search Company Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search company name"
                    required
                  />
                </div>
                <div className="my-6">
                  <label
                    htmlFor="default-search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white mt-6"
                  >
                    Search Salary
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                    <input
                      type="search"
                      id="default-search"
                      className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Search Salary"
                      required
                    />
                  </div>
                </div>
              </form>
              {/* <div className="my-6">
                <label
                  htmlFor="default-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Company :
                </label>
                <div>
                  <label
                    htmlFor="countries"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Select an option
                  </label>
                  <select
                    id="countries"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Choose a country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                </div>
              </div>
              <div className="my-6">
                <label
                  htmlFor="default-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Jenis Pekerjaan :
                </label>
                <div>
                  <label
                    htmlFor="countries"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Select an option
                  </label>
                  <select
                    id="countries"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Choose a country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                </div>
              </div> */}

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base md:w-48 sm:w-auto px-5 py-2.5 text-center"
                >
                  Find
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-10 px-4 justify-center">
            {data !== null &&
              data.map((res) => {
                return (
                  <Link
                    // to="/read-more"
                    key={res.id}
                    className="flex flex-col items-center w-[500px] bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100"
                  >
                    <img
                      className="object-cover rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                      src={res.company_image_url}
                      alt=""
                    />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {res.company_name} ({res.job_tenure})
                      </h5>
                      <h5 className="text-base font-bold my-2">
                        {res.company_city}
                      </h5>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {res.job_type}
                      </p>
                      <h2>Status : {handleStatus(res.job_status)}</h2>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Jobvacancy;
