import ReactFullpage from "@fullpage/react-fullpage";
import React from "react";
import "../../../../index.css";
import About from "../About";
import Blogs from "../Blogs";
import CaseStudy from "../CaseStudy";
import Cleints from "../Clients";
import ClientSpeak from "../ClientSpeak";
import Footer from "../Footer";
import Header from "../Header";
import Navbar from "../Navbar";
import Services from "../Services";
import StartProject from "../StartProject";

const anchors = [
  "landing",
  "services",
  "about",
  "clients",
  "case-study",
  "client-speak",
  "blogs",
  "start-project",
  "contacts",
];

const CenterLayout = () => {
  return (
    <div className="center_layout_container">
      <ReactFullpage
        anchors={anchors}
        scrollingSpeed={1700}
        easing={"ease-out"}
        navigation
        // navigationTooltips={anchors}
        render={({ state, fullpageApi }) => {
          return (
            <div>
              <div id="stars"></div>
              <div id="stars2"></div>
              <div className="hidden">
                <Navbar fullpageApi={fullpageApi} />
              </div>
              <Header />
              <Services />
              <About />
              <Cleints />
              <CaseStudy />
              <ClientSpeak />
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
