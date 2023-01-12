import { useState, useEffect } from "react";
import { handleFetchServices } from "../services";

const useServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await handleFetchServices();
      if (response?.status === 200) {
        setServices(response?.data);
      }
    })();
  }, []);

  return [services, setServices];
};

export default useServices;
