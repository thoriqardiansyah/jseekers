import React from "react";
import Navbar from "../router/Navbar";

const Layout = (props) => {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
};

export default Layout;
