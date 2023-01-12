import { useEffect, useState } from "react";
import { handleFetchCaseStudiesDesktop } from "../services";

const useCaseStudiesDesktop = () => {
  const [caseStudies, setCaseStudies] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await handleFetchCaseStudiesDesktop();
      console.log("response", response);
      if (response?.status === 200) {
        setCaseStudies(response?.data);
      }
    })();
  }, []);

  return [caseStudies, setCaseStudies];
};

export default useCaseStudiesDesktop;
