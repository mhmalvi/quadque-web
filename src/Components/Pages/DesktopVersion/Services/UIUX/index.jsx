import React from "react";
import Lottie from "lottie-react";
import UI_UX from "../../../../../asstes/Lotties/ux.json";

const UIUX = () => {
  return (
    <div>
      <section id="category" class="section d-none d-xl-block">
        <div class="category-content">
          <div class="category-content-body">
            <div class="ping-row">
              <div>
                <a class="ping d-inline-block" href="#startProject"></a>
              </div>
            </div>
            <div class="category-bg"></div>

            <div class="category-image">
              <Lottie width={"40%"} animationData={UI_UX} loop={true} />
            </div>

            <h1 class="category-heading">ui/ux</h1>

            <p class="category-details">
              Outstanding visuals and aesthetic designs to take your brand to
              the next level.
            </p>
            <div class="project-btn">
              <button type="button">start project</button>
            </div>
            <div class="project-menu-list">
              <ul>
                <li>
                  <a
                    href="/"
                    type="ui"
                    id="ui_category"
                    class="category_list_active"
                  >
                    UI & UX
                  </a>
                </li>
                <li>
                  <a href="/" type="web" id="web_category">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="/" type="dm" id="dm_category">
                    Digital Marketing
                  </a>
                </li>
                <li>
                  <a href="/" type="ad" id="ad_category">
                    App Development
                  </a>
                </li>
                <li>
                  <a href="/" type="ai" id="ai_category">
                    AI & IOT Solutions
                  </a>
                </li>
                <li>
                  <a href="/" type="sd" id="sd_category">
                    Software Development
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UIUX;
