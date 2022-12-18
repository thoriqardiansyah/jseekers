import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ListJob = () => {
  const [datas, setDatas] = useState(null);

  useEffect(() => {
    axios
      .get(`https://dev-example.sanbercloud.com/api/job-vacancy`)
      .then((res) => {
        let data = res.data.data;
        setDatas(data);
      });
  }, []);

  const truncate = (str, length) => {
    if (str.length > length) {
      return str.slice(0, length) + "...";
    } else {
      return str;
    }
  };

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

  console.log(datas);
  return (
    <div className="bg-white rounded-md shadow-md p-4 h-full">
      {/* Search Input */}
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

      <form action="">
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
              {datas !== null &&
                datas.map((city) => {
                  return <option key={city.id}>{city.company_city}</option>;
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

      {/* List table */}
      <div className="overflow-x-scroll relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-white uppercase bg-sky-500 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                ID
              </th>
              <th scope="col" className="py-3 px-6">
                Title
              </th>
              <th scope="col" className="py-3 px-6">
                Job Description
              </th>
              <th scope="col" className="py-3 px-6">
                Job Qualification
              </th>
              <th scope="col" className="py-3 px-6">
                Job Type
              </th>
              <th scope="col" className="py-3 px-6">
                Job Tenure
              </th>
              <th scope="col" className="py-3 px-6">
                Company Name
              </th>
              <th scope="col" className="py-3 px-6">
                Company Image URL
              </th>
              <th scope="col" className="py-3 px-6">
                Company City
              </th>
              <th scope="col" className="py-3 px-6">
                Salary Min
              </th>
              <th scope="col" className="py-3 px-6">
                Salary Max
              </th>
              <th scope="col" className="py-3 px-6">
                action
              </th>
            </tr>
          </thead>
          <tbody>
            {datas !== null &&
              datas.map((data, index) => {
                return (
                  <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {index + 1}
                    </th>
                    <td className="py-4 px-6">{data.title}</td>
                    <td className="py-4 px-6">
                      {truncate(data.job_description, 20)}
                    </td>
                    <td className="py-4 px-6">{data.job_qualification}</td>
                    <td className="py-4 px-6">{data.job_type}</td>
                    <td className="py-4 px-6">{data.job_tenure}</td>
                    <td className="py-4 px-6">
                      {handleStatus(data.job_status)}
                    </td>
                    <td className="py-4 px-6">{data.company_name}</td>
                    <td className="py-4 px-6">{data.company_image_url}</td>
                    <td className="py-4 px-6">{data.company_city}</td>
                    <td className="py-4 px-6">{data.company_city}</td>
                    <td className="py-4 px-6">{data.salary_min}</td>
                    <td className="py-4 px-6">{data.salary_max}</td>
                    <td>
                      <Link to={"/"}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                          />
                        </svg>
                        Edit
                      </Link>
                    </td>
                    <td>
                      <Link to={"/"}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                        Delete
                      </Link>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListJob;
