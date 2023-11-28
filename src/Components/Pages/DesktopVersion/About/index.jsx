import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";

const About = () => {
  const location = useLocation();
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const [triggerTitleAnimation, setTriggerTitleAnimation] = useState(false);
  const [loader, setLoader] = useState(true);
  const synth = window.speechSynthesis;

  useEffect(() => {
    console.log(location);
    if (location === "about") {
      synth.cancel();
      setTimeout(() => {
        setLoader(false);
        setTriggerAnimation(true);
        setTriggerTitleAnimation(true);
      }, 800);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <>
      <FirstSection
        triggerTitleAnimation={triggerTitleAnimation}
        triggerAnimation={triggerAnimation}
        loader={loader}
        setLoader={setLoader}
      />
      <SecondSection
        triggerTitleAnimation={triggerTitleAnimation}
        triggerAnimation={triggerAnimation}
        loader={loader}
        setLoader={setLoader}
      />
    </>
  );
};

export default About;

// const banners = [
//   whoWerAre,
//   ourVission,
//   ourMission,
//   ourGoal,
//   ourObjective,
//   whoWerAre,
//   whyChooseUs,
// ];
