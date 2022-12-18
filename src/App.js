import Cookies from "js-cookie";
import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import LayoutDashboard from "./components/LayoutDashboard";
import ChangePassword from "./pages/dashboard/ChangePassword";
import Dashboard from "./pages/dashboard/Dashboard";
import DataForm from "./pages/dashboard/DataForm";
import ListJob from "./pages/dashboard/ListJob";
import Profile from "./pages/dashboard/Profile";
import Detail from "./pages/landing/Detail";
import Home from "./pages/landing/Home";
import Jobvacancy from "./pages/landing/Jobvacancy";
import Signin from "./pages/landing/Signin";
import Signup from "./pages/landing/Signup";

function App() {
  let AuthLogin = (param) => {
    if (Cookies.get("token") === undefined) {
      return param.children;
    } else if (Cookies.get("token") !== undefined) {
      return <Navigate to={"/"} />;
    }
  };

  let AuthDashboard = (param) => {
    if (Cookies.get("token") === undefined) {
      return <Navigate to={"/signin"} />;
    } else if (Cookies.get("token") !== undefined) {
      return param.children;
    }
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/job-vacancy"
            element={
              <Layout>
                <Jobvacancy />
              </Layout>
            }
          />
          <Route
            path="/signin"
            element={
              <AuthLogin>
                <Signin />
              </AuthLogin>
            }
          />
          <Route
            path="/signup"
            element={
              <Layout>
                <Signup />
              </Layout>
            }
          />
          <Route
            path="/dashboard"
            element={
              <AuthDashboard>
                <LayoutDashboard>
                  <Dashboard />
                </LayoutDashboard>
              </AuthDashboard>
            }
          />
          <Route
            path="/dashboard/:Id"
            element={
              <LayoutDashboard>
                <Detail />
              </LayoutDashboard>
            }
          />
          <Route
            path="/dashboard/list-job-vacancy"
            element={
              <LayoutDashboard>
                <ListJob />
              </LayoutDashboard>
            }
          />
          <Route
            path="/dashboard/list-job-vacancy/form"
            element={
              <LayoutDashboard>
                <DataForm />
              </LayoutDashboard>
            }
          />
          <Route
            path="/dashboard/profile"
            element={
              <LayoutDashboard>
                <Profile />
              </LayoutDashboard>
            }
          />
          <Route
            path="/dashboard/change-password"
            element={
              <LayoutDashboard>
                <ChangePassword />
              </LayoutDashboard>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
