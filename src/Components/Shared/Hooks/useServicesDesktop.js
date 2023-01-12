import { useEffect, useState } from "react";
import { handleFetchServicesForDes } from "../services";

const useServicesDesktop = () => {
  const [servicesDesktop, setServicesDesktop] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await handleFetchServicesForDes();
      if (response?.status === 200) {
        setServicesDesktop(response?.data);
      }
    })();
  }, []);

  return [servicesDesktop, setServicesDesktop];
};

export default useServicesDesktop;
