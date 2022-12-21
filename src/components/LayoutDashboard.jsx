import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LayoutDashboard = (props) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const handleSignout = (e) => {
    Cookies.remove("token");
    Cookies.remove("user");
    navigate("/");
  };

  useEffect(() => {
    if (user === null) {
      setUser(JSON.parse(Cookies.get("user")));
    }
  }, [user, setUser]);

  return (
    <>
      <main className="relative h-screen overflow-hidden bg-gray-100">
        <div className="flex items-start justify-between">
          {/* Sidebar */}
          <div className="relative hidden h-screen shadow-lg lg:block w-80">
            <div className="h-full bg-white">
              <div className="flex items-center justify-start pt-6 ml-8">
                <p className="text-xl font-bold dark:text-white">Dashboard</p>
              </div>
              <nav className="mt-6">
                <div>
                  <Link
                    className="flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-400 transition-colors duration-200 border-l-4 border-transparent hover:text-gray-800 focus:text-gray-800"
                    to={"/dashboard"}
                  >
                    <span className="text-left">
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
                          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                        />
                      </svg>
                    </span>
                    <span className="mx-4 text-sm font-normal">Dashboard</span>
                  </Link>
                  <Link
                    className="flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-400 transition-colors duration-200 border-l-4 border-transparent hover:text-gray-800 focus:text-gray-800"
                    to={"/dashboard/list-job-vacancy"}
                  >
                    <span className="text-left">
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
                          d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                        />
                      </svg>
                    </span>
                    <span className="mx-4 text-sm font-normal">List Job</span>
                  </Link>
                  <Link
                    className="flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-400 transition-colors duration-200 border-l-4 border-transparent hover:text-gray-800 focus:text-gray-800"
                    to={"/dashboard/list-job-vacancy/form"}
                  >
                    <span className="text-left">
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
                          d="M15 13.5H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                        />
                      </svg>
                    </span>
                    <span className="mx-4 text-sm font-normal">Data Form</span>
                  </Link>
                  <Link
                    className="flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-400 transition-colors duration-200 border-l-4 border-transparent hover:text-gray-800 focus:text-gray-800"
                    to={"/dashboard/profile"}
                  >
                    <span className="text-left">
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
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>
                    </span>
                    <span className="mx-4 text-sm font-normal">Profile</span>
                  </Link>
                  <Link
                    className="flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-400 transition-colors duration-200 border-l-4 border-transparent hover:text-gray-800 focus:text-gray-800"
                    to={"/dashboard/change-password"}
                  >
                    <span className="text-left">
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
                          d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                        />
                      </svg>
                    </span>
                    <span className="mx-4 text-sm font-normal">
                      Change Password
                    </span>
                  </Link>
                  <Link
                    onClick={handleSignout}
                    className="flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-400 transition-colors duration-200 border-l-4 border-transparent hover:text-red-600 focus:text-red-600"
                    to={"/"}
                  >
                    <span className="text-left">
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
                          d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                        />
                      </svg>
                    </span>
                    <span className="mx-4 text-sm font-normal">Sign Out</span>
                  </Link>
                </div>
              </nav>
            </div>
          </div>
          <div className="flex flex-col w-full md:space-y-4">
            <header className="z-40 flex items-center justify-between w-full h-16 bg-white px-6 shadow-md text-xl font-semibold">
              Selamat Datang, {user?.name ?? "undefined"}
            </header>
            <div className="h-screen px-4 pb-24 overflow-auto md:px-6">
              {props.children}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default LayoutDashboard;
