import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";

const Dashboard = () => {
  const { state, handleFunction } = useContext(GlobalContext);

  let { search, setSearch, setFetchStatus, filter, setFilter } = state;

  let { truncate, formatRupiah, handleStatus } = handleFunction;
  // console.log(search);
  const [datas, setDatas] = useState(null);
  useEffect(() => {
    axios
      .get("https://dev-example.sanbercloud.com/api/job-vacancy")
      .then((res) => {
        let datas = res.data.data;
        setDatas(datas);
      });
  }, []);

  // Fitur Search Data
  const handleChangeSearch = (e) => setSearch(e.target.value);

  const handleSearch = (e) => {
    e.preventDefault();

    axios
      .get("https://dev-example.sanbercloud.com/api/job-vacancy")
      .then((res) => {
        setFetchStatus(true);
        let data = res.data.data;
        let searchData = data.filter((res) => {
          return Object.values(res)
            .join(" ")
            .toLowerCase()
            .includes(search.toLowerCase());
        });
        setDatas([...searchData]);
      });

    setSearch("");
  };

  // Fitur Filter Data
  const handleChangeFilter = (e) => {
    let { name, value } = e.target;

    setFilter({ ...filter, [name]: value });
  };

  const handleFilter = (e) => {
    e.preventDefault();
    // console.log(filter);

    axios
      .get("https://dev-example.sanbercloud.com/api/job-vacancy")
      .then((res) => {
        setFetchStatus(true);
        let dataJob = res.data.data;
        let filterData = dataJob.filter((res) => {
          return (
            res.company_city.toLowerCase() ===
              filter.company_city.toLowerCase() ||
            res.job_tenure.toLowerCase() === filter.job_tenure.toLowerCase() ||
            res.title.toLowerCase() === filter.title.toLowerCase()
          );
        });

        console.log(filterData);
        setDatas([...filterData]);
      });

    setFilter({
      company_city: "",
      job_tenure: "",
      title: "",
    });
  };

  return (
    <>
      <div className="bg-white rounded-md shadow-md p-4">
        <div>
          {/* Search */}
          <form onSubmit={handleSearch}>
            <div className="my-4">
              <label
                htmlFor="default-input"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Search :
              </label>
              <input
                type="text"
                value={search}
                onChange={handleChangeSearch}
                id="default-input"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 mb-10 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
            <button
              type="submit"
              onClick={() => setFetchStatus(true)}
              className="text-white bg-red-500 hover:bg-red-600 mb-10 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ml-2"
            >
              Reset
            </button>
          </form>

          {/* Filter */}
          <h1 className="mt-4 text-base font-semibold">Filter</h1>
          <form onSubmit={handleFilter}>
            <div className="my-4">
              <label
                htmlFor="default-input"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                City :
              </label>
              <input
                type="text"
                name="company_city"
                value={filter.company_city}
                onChange={handleChangeFilter}
                id="default-input"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="my-4">
              <label
                htmlFor="default-input"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Job Tenure :
              </label>
              <input
                type="text"
                name="job_tenure"
                value={filter.job_tenure}
                onChange={handleChangeFilter}
                id="default-input"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="my-4">
              <label
                htmlFor="default-input"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Position :
              </label>
              <input
                type="text"
                name="title"
                value={filter.title}
                onChange={handleChangeFilter}
                id="default-input"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 mb-10 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Find
            </button>
          </form>
        </div>

        {/* Display Data */}
        <div className="flex flex-wrap gap-5">
          {datas !== null &&
            datas.map((data) => {
              return (
                <Link
                  to={`/dashboard/${data.id}`}
                  key={data.id}
                  className="w-full max-w-xs p-6 overflow-hidden bg-white shadow-md rounded-xl dark:bg-gray-800 border"
                >
                  <div className="flex flex-col items-center justify-between md:flex-row">
                    <div className="flex items-center justify-start flex-grow w-full">
                      <div className="relative block">
                        <img
                          alt="profil"
                          src={data.company_image_url}
                          className="mx-auto object-cover rounded-full h-10 w-10 "
                        />
                      </div>
                      <div className="flex flex-col items-start ml-4">
                        <span className="text-gray-700 dark:text-white font-bold">
                          {data.company_name}
                        </span>
                        <span className="text-sm font-light text-gray-400 dark:text-gray-300">
                          {data.company_city}
                        </span>
                      </div>
                    </div>
                    <div className="flex-none hidden md:block ">
                      {handleStatus(data.job_status)}
                    </div>
                  </div>
                  <p className="mt-4 mb-2 text-lg text-gray-800 dark:text-white">
                    {data.title}
                  </p>

                  <p className="text-sm font-normal text-gray-400">
                    {truncate(data.job_description, 100)}
                  </p>
                  <div className="flex items-center justify-between p-2 my-6 bg-blue-100 rounded">
                    <div className="flex items-start justify-between w-full">
                      <p className="flex-grow w-full text-2xl text-gray-700">
                        <span className="font-light text-gray-400 text-md">
                          Rp
                        </span>
                        {formatRupiah(data.salary_min + "")}
                      </p>
                      <span className="flex-none px-3 py-1 text-sm text-indigo-500 border border-indigo-500 rounded-full">
                        {data.job_tenure}
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
