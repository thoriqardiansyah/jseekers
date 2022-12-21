import axios from "axios";
import Cookies from "js-cookie";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";

const ListJob = () => {
  const navigate = useNavigate();
  const [datas, setDatas] = useState(null);
  const { state, handleFunction } = useContext(GlobalContext);

  let {
    search,
    setSearch,
    fetchStatus,
    setFetchStatus,
    filter,
    setFilter,
    setInput,
    setCurrentId,
  } = state;

  let { truncate, handleStatus } = handleFunction;

  useEffect(() => {
    if (fetchStatus === true) {
      axios
        .get(`https://dev-example.sanbercloud.com/api/job-vacancy`)
        .then((res) => {
          let data = res.data.data;
          setDatas(data);
        });
      setFetchStatus(false);
    }
  }, [fetchStatus, setFetchStatus]);

  // Fitur Search Data
  const handleChangeSearch = (e) => setSearch(e.target.value);

  const handleSearch = (e) => {
    e.preventDefault();

    axios
      .get("https://dev-example.sanbercloud.com/api/job-vacancy")
      .then((res) => {
        setFetchStatus(true);
        let dataJob = res.data.data;
        let searchData = dataJob.filter((res) => {
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

        setDatas([...filterData]);
      });

    setFilter({
      company_city: "",
      job_tenure: "",
      title: "",
    });
  };

  const handleDelete = (e) => {
    let Id = e.currentTarget.value;
    axios
      .delete(`https://dev-example.sanbercloud.com/api/job-vacancy/${Id}`, {
        headers: { Authorization: "Bearer " + Cookies.get("token") },
      })
      .then((res) => {
        setFetchStatus(true);
      });
  };

  // handling edit
  const handleEdit = (e) => {
    let Id = parseInt(e.currentTarget.value);
    setCurrentId(Id);

    axios
      .get(`https://dev-example.sanbercloud.com/api/job-vacancy/${Id}`, {
        headers: { Authorization: "Bearer " + Cookies.get("token") },
      })
      .then((res) => {
        let data = res.data;
        setInput({
          title: data.title,
          job_description: data.job_description,
          job_qualification: data.job_qualification,
          job_type: data.job_type,
          job_tenure: data.job_tenure,
          job_status: data.job_status,
          company_name: data.company_name,
          company_image_url: data.company_image_url,
          company_city: data.company_city,
          salary_min: data.salary_min,
          salary_max: data.salary_max,
        });
        navigate(`/dashboard/list-job-vacancy/edit/${Id}`);
      });
  };

  return (
    <div className="bg-white rounded-md shadow-md p-4 mx-2">
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

      {/* List table */}
      <div className="overflow-x-auto relative shadow-md border rounded-lg bg-white md:w-[1200px]">
        <table className=" text-sm text-left text-gray-500  ">
          <thead className="text-xs text-white uppercase bg-sky-500">
            <tr>
              <th scope="col" className="py-1 px-3">
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
                Job Status
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
                  <tr className=" border-b" key={data.id}>
                    <th
                      scope="row"
                      className="py-1 px-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {index + 1}
                    </th>
                    <td className="py-4 px-6">{data.title}</td>
                    <td className="py-4 px-6">
                      {truncate(data.job_description, 10)}
                    </td>
                    <td className="py-4 px-6">
                      {truncate(data.job_qualification, 10)}
                    </td>
                    <td className="py-4 px-6">{data.job_type}</td>
                    <td className="py-4 px-6">{data.job_tenure}</td>
                    <td className="py-4 px-6">
                      {handleStatus(data.job_status)}
                    </td>
                    <td className="py-4 px-6">{data.company_name}</td>
                    <td className="py-4 px-6">
                      {truncate(data.company_image_url, 10)}
                    </td>
                    <td className="py-4 px-6">{data.company_city}</td>
                    <td className="py-4 px-6">{data.salary_min}</td>
                    <td className="py-4 px-4">{data.salary_max}</td>
                    <td className="flex pt-4 justify-center hover:text-yellow-300">
                      <button onClick={handleEdit} value={data.id}>
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
                      </button>
                    </td>
                    <td className="flex hover:text-red-500 py-4 justify-center">
                      <button onClick={handleDelete} value={data.id}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                          // value={data.id}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                        Delete
                      </button>
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
