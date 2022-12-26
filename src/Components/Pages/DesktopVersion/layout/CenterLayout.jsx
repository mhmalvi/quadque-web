import React, { useEffect } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Header from "../Header";
import Services from "../Services";

class MySection extends React.Component {
  render() {
    return (
      <div className="section">
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
            </div>
          );
        }}
      />
    </div>
  );
};

export default CenterLayout;

{
  /* <p>Section 1 (welcome to fullpage.js)</p>
                  <button onClick={() => fullpageApi.moveSectionDown()}>
                    Click me to move down
                  </button> */
}
