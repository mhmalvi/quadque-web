import axios from "axios";

export const handleFetchHomeVideo = async () => {
  try {
    const result = await axios.get(
      `${process.env?.REACT_APP_SERVICE_URL}/api/home-videos/1`
    );
    return result?.data?.data;
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
    if (result?.status === 200) {
      return result?.data?.data;
    }
  } catch (error) {
    return [];
  }
};

export const handleFetchServiceBySlug = async (slug) => {
  try {
    const result = await axios.get(
      `${process.env?.REACT_APP_SERVICE_URL}/api/services/${slug}`
    );
    /* console.log("netwooooork", result?.data); */
    return result?.data;
  } catch (error) {
    console.log(error.response?.message);
    return [];
  }
};

export const handleFetchCaseStudies = async () => {
  try {
    const result = await axios.get(
      `${process.env?.REACT_APP_SERVICE_URL}/api/case-studies`
    );
    if (result?.status === 200) {
      return result?.data?.data;
    }
  } catch (error) {
    return [];
  }
};

export const handleFetchCaseStudyBySlug = async (slug) => {
  try {
    const result = await axios.get(
      `${process.env?.REACT_APP_SERVICE_URL}/api/case-studies/${slug}`
    );
    console.log("netwooork", result?.data);
    return result?.data;
  } catch (error) {
    console.log(error.response?.data);
    return [];
  }
};

export const handleFetchClientSpeaks = async () => {
  try {
    const result = await axios.get(
      `${process.env?.REACT_APP_SERVICE_URL}/api/client-speaks`
    );
    if (result?.status === 200) {
      return result?.data?.data;
    }
  } catch (error) {
    return [];
  }
};

export const handleFetchBlogs = async () => {
  try {
    const result = await axios.get(
      `${process.env?.REACT_APP_SERVICE_URL}/api/manage-blogs`
    );
    if (result?.status === 200) {
      return result?.data?.data;
    }
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

export const handleFetchCompanyGoals = async (id) => {
  try {
    const result = await axios.get(
      `${process.env?.REACT_APP_SERVICE_URL}/api/about-us/${id}`
    );
    if (result?.status === 200) {
      return result?.data?.data;
    }
  } catch (error) {
    console.log(error.response?.data);
    return [];
  }
};

export const handleFetchClients = async () => {
  try {
    const result = await axios.get(
      `${process.env?.REACT_APP_SERVICE_URL}/api/clients`
    );
    //console.log("network client", result?.data);
    if (result?.status === 200) {
      return result?.data?.data;
    }
  } catch (error) {
    console.log(error.response?.data);
    return [];
  }
};

export const handleSendMail = async (data) => {
  console.log(data);
  try {
    const result = await axios.post(
      `${process.env?.REACT_APP_SERVICE_URL}/api/send-mail`,
      data
    );
    console.log("result", result);
    if (result?.status === 200) {
      return result?.data?.message;
    }
  } catch (error) {
    console.log("error", error.response?.data);
    return [];
  }
};

export const handleFetchCaseStudyById = async (slug) => {
  try {
    const result = await axios.get(
      `${process.env?.REACT_APP_SERVICE_URL}/api/case-studies/${slug}`
    );
    if (result?.status === 200) {
      return result?.data?.data;
    }
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

export const handleFetchCaseStudiesDesktop = async () => {
  try {
    const result = await axios.get(
      `${process.env?.REACT_APP_SERVICE_URL}/api/case-studies-desktop`
    );
    return result?.data;
  } catch (error) {
    console.log(error.response?.data);
    return [];
  }
};

export const handleFetchGallery = async () => {
  try {
    const result = await axios.get(
      `${process.env?.REACT_APP_SERVICE_URL}/api/gallery`
    );
    return result?.data;
  } catch (error) {
    console.log(error.response?.data);
    return [];
  }
};
