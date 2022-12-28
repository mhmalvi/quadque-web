import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Services from "./Services";
import OurCustomer from "./OurCustomer";
import CaseStudy from "./CaseStudy";
import Testimony from "./Testimony";
import OurTeam from "./OurTeam";
import Aboutus from "./Aboutus";
import FAQ from "./FAQ";
import StartProject from "./StartProject";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <div id="stars"></div>
      <div id="stars2"></div>
      {/* <div id="stars3"></div> */}
      <div id="main">
        <Navbar />
        <Header />
        <Services />
        <OurCustomer/>
        <CaseStudy/>
        <Testimony/>
        <OurTeam/>
        <Aboutus/>
        <FAQ/>
        <StartProject/>
        <Footer/>
      </div>
    </>
  );
};

export default Layout;
