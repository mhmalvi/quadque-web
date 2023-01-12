import { useState, useEffect } from "react";
import { handleFetchCaseStudies } from "../services";

const useCaseStudy= () => {
  const [caseStudy, setCaseStudy] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await handleFetchCaseStudies();
      if (response) {
        setCaseStudy(response);
      }
    })();
  }, []);

  return [caseStudy, setCaseStudy];
};

export default useCaseStudy;