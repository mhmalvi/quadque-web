import ReactFullpage from "@fullpage/react-fullpage";
import React from "react";
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

// const anchors = ["firstPage", "secondPage", "thirdPage"];

const CenterLayout = () => {
  return (
    <div className="center_layout_container">
      <ReactFullpage
        navigation
        // sectionsColor={["#282c34", "#ff5f45", "#0798ec"]}
        render={({ state, fullpageApi }) => {
          return (
            <div>
              <Header />
              <Services />
              <MySection content={"Slide up!"} />
              <MySection content={"Slide Dow!"} />
              <MySection content={"Slide up!"} />
            </div>
          );
        }}
      />
    </div>
  );
};

export default CenterLayout;
