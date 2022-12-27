import axios from "axios";

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
