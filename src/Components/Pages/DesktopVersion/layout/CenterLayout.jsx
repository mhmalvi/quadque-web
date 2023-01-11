import ReactFullpage from "@fullpage/react-fullpage";
import React from "react";
import CaseStudy from "../CaseStudy";
import Cleints from "../Clients";
import ClientSpeak from "../ClientSpeak";
import Header from "../Header";
import Services from "../Services";
import "../../../../index.css";
import About from "../About";
import Blogs from "../Blogs";
import StartProject from "../StartProject";
import Footer from "../Footer";

const anchors = [
  "landing",
  "services",
  "clients",
  "case-study",
  "client-speak",
  "about",
  "blogs",
  "start-project",
  "footer",
];

const CenterLayout = () => {
  return (
    <div className='center_layout_container'>
      <ReactFullpage
        anchors={anchors}
        navigation
        navigationTooltips={anchors}
        render={({ state, fullpageApi }) => {
          return (
            <div>
              <div id='stars'></div>
              <div id='stars2'></div>
              <Header />
              <Services />
              <Cleints />
              <CaseStudy />
              <ClientSpeak />
              <About />
              <Blogs />
              <StartProject />
              <Footer />
            </div>
          );
        }}
      />
    </div>
  );
};

export default CenterLayout;
