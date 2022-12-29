import ReactFullpage from "@fullpage/react-fullpage";
import React from "react";
import CaseStudy from "../CaseStudy";
import Cleints from "../Clients";
import Header from "../Header";
import Services from "../Services";

class MySection extends React.Component {
  render() {
    return (
      <div className="section bg-green-300 text-white">
        <h3>{this.props.content}</h3>
      </div>
    );
  }
}

const anchors = ["landing", "services", "clients", "case-study"];

const CenterLayout = () => {
  return (
    <div className="center_layout_container">
      <ReactFullpage
        anchors={anchors}
        navigation
        navigationTooltips={anchors}
        // sectionsColor={["#282c34", "#ff5f45", "#0798ec"]}
        render={({ state, fullpageApi }) => {
          return (
            <div>
              <Header />
              <Services />
              <Cleints />
              <CaseStudy />
              <MySection content={"Slide up!"} />
            </div>
          );
        }}
      />
    </div>
  );
};

export default CenterLayout;
