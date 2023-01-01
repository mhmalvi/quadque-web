import axios from "axios";

export const handleFetchServices = async () => {
  try {
    const result = await axios.get(
      `${process.env?.REACT_APP_SERVICE_URL}/api/services`
    );
    return result?.data;
  } catch (error) {
    return [];
  }
};

export const handleFetchCaseStudies = async () => {
  try {
    const result = await axios.get(
      `${process.env?.REACT_APP_SERVICE_URL}/api/case-studies`
    );
    return result?.data;
  } catch (error) {
    return [];
  }
};

export const handleFetchClientSpeaks = async () => {
  try {
    const result = await axios.get(
      `${process.env?.REACT_APP_SERVICE_URL}/api/client-speaks`
    );
    return result?.data;
  } catch (error) {
    return [];
  }
};
