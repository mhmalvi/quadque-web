import React from "react";
import { Route, Routes } from "react-router-dom";
import NavigationBar from "./NavigationBar"
import Header from "./Header";
import Services from "../Service/Services";
import OurCustomer from "./OurCustomer";
import CaseStudy from "../Case_Study/CaseStudy";
import ClientSpeaks from "./ClientSpeaks";
import OurTeam from "./OurTeam";
import Aboutus from "./Aboutus";
import FAQ from "../faq/FAQ"
import StartProject from "./StartProject";
import Footer from "./Footer";
import BlogGallery from "../Blog/BlogGallery";
import BlogDetail from "../Blog/BlogDetail";
import ServiceDetails from "../Service/ServiceDetails";
import CaseStudyDetail from "../Case_Study/CaseStudyDetail";

const Layout = () => {
  return (
    <>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div id="main">
        <NavigationBar />
      <Routes>
        <Route path="/" element={
        <>
        <Header />
        <Services />
        <OurCustomer/>
        <CaseStudy/>
        <ClientSpeaks/>
        <OurTeam/>
        <Aboutus/>
        <StartProject/>
        </>
        }/>
        <Route path={"blogs/blog-detail/:id"} element={<BlogDetail/>}/>
        <Route path="blogs" element={<BlogGallery/>}/>
        {/* <Route path={"blogs/:id"} element={<BlogDetail/>}/> */}
        {/* <Route path={"blog-detail/:id"} element={<BlogDetail/>}/> */}
        <Route path={"service/service-detail"} element={<ServiceDetails/>}/>
        <Route path={"case-study"} element={<CaseStudyDetail/>}/>
        <Route path={"faq"} element={<FAQ/>}/>
        </Routes>
        <Footer/>
      </div>
    </>
  );
};

export default Layout;
