import { useState } from "react";
import { createContext } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const [currentId, setCurrentId] = useState(-1);
  const [fetchStatus, setFetchStatus] = useState(true);
  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState({
    company_city: "",
    job_tenure: "",
    title: "",
  });

  const [input, setInput] = useState({
    title: "",
    job_description: "",
    job_qualification: "",
    job_type: "",
    job_tenure: "",
    job_status: 1,
    company_name: "",
    company_image_url: "",
    company_city: "",
    salary_min: 0,
    salary_max: 0,
  });

  const truncate = (str, length) => {
    if (str.length > length) {
      return str.slice(0, length) + "...";
    } else {
      return str;
    }
  };

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

  let state = {
    input,
    setInput,
    currentId,
    setCurrentId,
    fetchStatus,
    setFetchStatus,
    search,
    setSearch,
    filter,
    setFilter,
  };

  let handleFunction = {
    truncate,
    formatRupiah,
    handleStatus,
  };

  return (
    <GlobalContext.Provider
      value={{
        state,
        handleFunction,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
