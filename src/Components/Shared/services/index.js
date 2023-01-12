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

// export const handleFetchServicesForDes = async () => {
//   try {
//     const result = await axios.get(
//       `${process.env?.REACT_APP_SERVICE_URL}/api/services-desktop`
//     );
//     console.log(result);
//     return result?.data;
//   } catch (error) {
//     return [];
//   }
// };

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

// export const handleFetchServiceForDesktopById = async (slug) => {
//   try {
//     const result = await axios.get(
//       `${process.env?.REACT_APP_SERVICE_URL}/api/services-desktop/${slug}`
//     );

//     console.log("resss", result.data);

//     if (result.data?.status === 200) {
//       return result?.data?.data;
//     }
//   } catch (error) {
//     console.log(error.response?.message);
//     return [];
//   }
// };

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

export const handleFetchBlogById = async (slug) => {
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
      {
        category: "UI/UX",
        email: "loucchristensen78@gmail.com",
        help: "asdasdasd asd ad as asd asd as",
        name: "Sourav",
        phone: "01756414858",
        sub_category:
          "UX Design,User Research & Analysis,Customer Journey Mapping",
      }
    );
    if (result?.status === 200) {
      return result?.data?.data;
    }
  } catch (error) {
    console.log(error.response?.data);
    return [];
  }
};
