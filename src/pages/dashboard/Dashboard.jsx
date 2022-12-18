import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [datas, setDatas] = useState(null);
  useEffect(() => {
    axios
      .get("https://dev-example.sanbercloud.com/api/job-vacancy")
      .then((res) => {
        let datas = res.data.data;
        setDatas(datas);
      });
  }, []);

  const truncate = (str, length) => {
    if (str.length > length) {
      return str.slice(0, length) + "...";
    } else {
      return str;
    }
  };
  // console.log(datas);

  const formatRupiah = (angka, prefix) => {
    var number_string = angka.replace(/[^,\d]/g, "").toString(),
      split = number_string.split(","),
      sisa = split[0].length % 3,
      rupiah = split[0].substr(0, sisa),
      ribuan = split[0].substr(sisa).match(/\d{3}/gi);
    // tambahkan titik jika yang di input sudah menjadi angka ribuan
    if (ribuan) {
      let separator = sisa ? "." : "";
      rupiah += separator + ribuan.join(".");
    }
    rupiah = split[1] !== undefined ? rupiah + "," + split[1] : rupiah;
    return prefix === undefined ? rupiah : rupiah ? "Rp. " + rupiah : "";
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

  return (
    <>
      <div className="bg-white rounded-md shadow-md p-4">
        <div>
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
        </div>
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
                      <a href="/" className="relative block">
                        <img
                          alt="profil"
                          src={data.company_image_url}
                          className="mx-auto object-cover rounded-full h-10 w-10 "
                        />
                      </a>
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
