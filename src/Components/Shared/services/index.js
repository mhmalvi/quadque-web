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

export const handleFetchServicesForDes = async () => {
  try {
    const result = await axios.get(
      `${process.env?.REACT_APP_SERVICE_URL}/api/services-desktop`
    );
    return result?.data;
  } catch (error) {
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

export const handleFetchCaseStudiesDesktop = async () => {
  try {
    const result = await axios.get(
      `${process.env?.REACT_APP_SERVICE_URL}/api/case-studies-desktop`
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

export const handleFetchBlogs = async () => {
  try {
    const result = await axios.get(
      `${process.env?.REACT_APP_SERVICE_URL}/api/manage-blogs`
    );
    return result?.data;
  } catch (error) {
    console.log(error.response?.data);
    return [];
  }
};

export const handleFetchBlogBySlug = async (slug) => {
  try {
    const result = await axios.get(
      `${process.env?.REACT_APP_SERVICE_URL}/api/manage-blogs/${slug}`
    );
    return result?.data;
  } catch (error) {
    console.log(error.response?.data);
    return [];
  }
};

export const handleFetchServiceById = async (slug) => {
  try {
    const result = await axios.get(
      `${process.env?.REACT_APP_SERVICE_URL}/api/services/${slug}`
    );
    if (result?.status === 200) {
      return result?.data?.data;
    }
  } catch (error) {
    console.log(error.response?.message);
    return [];
  }
};

export const handleFetchServiceForDesktopById = async (slug) => {
  try {
    const result = await axios.get(
      `${process.env?.REACT_APP_SERVICE_URL}/api/services-desktop/${slug}`
    );

    console.log("resss", result.data);

    if (result.data?.status === 200) {
      return result?.data?.data;
    }
  } catch (error) {
    console.log(error.response?.message);
    return [];
  }
};

export const handleFetchServiceBySlugInDesk = async (slug) => {
  try {
    const result = await axios.get(
      `${process.env?.REACT_APP_SERVICE_URL}/api/services-desktop/${slug}`
    );
    if (result?.status === 200) {
      return result?.data?.data;
    }
  } catch (error) {
    console.log(error.response?.message);
    return [];
  }
};

export const handleFetchBlogById = async (id) => {
  try {
    const result = await axios.get(
      `${process.env?.REACT_APP_SERVICE_URL}/api/manage-blogs/${id}`
    );
    return result?.data;
  } catch (error) {
    console.log(error.response?.data);
    return [];
  }
};

export const handleFetchClientSpeak = async () => {
  try {
    const result = await axios.get(
      `${process.env?.REACT_APP_SERVICE_URL}/api/client-speaks`
    );
    return result?.data;
  } catch (error) {
    console.log(error.response?.data);
    return [];
  }
};
