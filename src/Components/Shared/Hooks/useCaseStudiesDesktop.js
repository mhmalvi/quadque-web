import { useEffect, useState } from "react";
import { handleFetchCaseStudies } from "../services";

const useCaseStudiesDesktop = () => {
  const [caseStudies, setCaseStudies] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await handleFetchCaseStudies();
      console.log("response", response);
      if (response?.length) {
        setCaseStudies(response);
      }
    })();
  }, []);

  return [caseStudies, setCaseStudies];
};

export default useCaseStudiesDesktop;
