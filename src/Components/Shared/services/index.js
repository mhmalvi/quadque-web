import axios from "axios";

export const handleFetchHomeVideo = async () => {
  try {
    const result = await axios.get(
      `${process.env?.REACT_APP_SERVICE_URL}/api/home-videos/1`
    );
    return result?.data;
  } catch (error) {
    console.log(error.response?.data);
    return [];
  }
};

export const handleFetchServices = async () => {
  try {
    const result = await axios.get(
      `${process.env?.REACT_APP_SERVICE_URL}/api/services`
    );
    return result?.data;
  } catch (error) {
    console.log(error.response?.data);
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
    console.log(error.response?.data);
    return [];
  }
};