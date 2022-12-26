import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Services from "./Services";

const Layout = () => {
  return (
    <>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div id="main">
        <Navbar />
        <Header />
        <Services />
      </div>
    </>
  );
};

export default Layout;
