import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { Id } = useParams();
  const [dataJob, setDataJob] = useState(null);

  useEffect(() => {
    if (Id !== undefined) {
      axios
        .get(`https://dev-example.sanbercloud.com/api/job-vacancy/${Id}`)
        .then((res) => {
          setDataJob([res.data]);
        });
    }
  }, [Id]);

  const handleStatus = (status) => {
    if (status === 1) {
      return (
        <span className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900">
          Dibuka
        </span>
      );
    } else if (status === 0) {
      return (
        <span className="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-lg dark:bg-red-200 dark:text-red-900">
          Ditutup
        </span>
      );
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

  return (
    <>
      <div className="bg-white px-6 py-20">
        {dataJob !== null &&
          dataJob.map((res) => {
            return (
              <div
                className="pb-32 md:pt-28 md:grid grid-cols-2 items-center"
                key={res.id}
              >
                <div className="md:mr-8 p-5">
                  <img
                    src={res.company_image_url}
                    alt=""
                    width={400}
                    height={400}
                  />
                </div>
                <div className="font-semibold px-4">
                  <h5 className="py-2">Company Name: {res.company_name}</h5>
                  <h5 className="py-2">Position : {res.title}</h5>
                  <h5 className="py-2">City : {res.company_city}</h5>
                  <h5 className="py-2">Job Tenure : {res.job_tenure}</h5>
                  <h5 className="py-2">
                    Status : {handleStatus(res.job_status)}
                  </h5>
                  <h5 className="py-2">Job Type : {res.job_type}</h5>
                  <div className="py-2">
                    <label>Job Description : </label>
                    <p className="font-medium">{res.job_description}</p>
                  </div>
                  <div className="py-2">
                    <label>Job Qualification : </label>
                    <p className="font-medium">{res.job_qualification}</p>
                  </div>
                  <h5 className="py-2">
                    Salary : Rp.{formatRupiah(res.salary_min + "")} - Rp.
                    {formatRupiah(res.salary_max + "")}{" "}
                  </h5>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Detail;
