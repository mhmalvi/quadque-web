import ReactFullpage from "@fullpage/react-fullpage";
import React from "react";
import "../../../../index.css";
import About from "../About";
import Blogs from "../Blogs";
import CaseStudy from "../CaseStudy";
import ClientSpeak from "../ClientSpeak";
import Cleints from "../Clients";
import Footer from "../Footer";
import Header from "../Header";
import Services from "../Services";
import StartProject from "../StartProject";

const anchors = [
  "landing",
  "services",
  "about",
  "who-we-are",
  "clients",
  "case-study",
  "client-speak",
  "blogs",
  "start-project",
  "contacts",
];

const CenterLayout = () => {
  // This the main landing page of Desktop
  return (
    <div className="center_layout_container bg-black">
      <ReactFullpage
        anchors={anchors}
        scrollingSpeed={1900}
        easing={"ease-out"}
        navigation
        fadingEffect={"slides"}
        animateAnchor={true}
        fitToSectionDelay={5000}
        waterEffect={true}
        fitToSection={true}
        parallax={"slides"}
        parallaxOptions={{
          type: "reveal",
          percentage: 62,
          property: "translate",
        }}
        waterEffectOptions={{ animateContent: true, animateOnMouseMove: true }}
        render={({ state, fullpageApi }) => {
          return (
            <div>
              <div id="stars"></div>
              <div id="stars2"></div>
              <Header />
              <Services />
              <About />
              <Cleints />
              <CaseStudy />
              <ClientSpeak />
              <Blogs />
              <StartProject />
              <Footer />
              <>
                <div className="h-40" id="extra" name="extra">
                  &nbsp;
                </div>
              </>
            </div>
          );
        }}
      />
    </div>
  );
};

export default CenterLayout;
