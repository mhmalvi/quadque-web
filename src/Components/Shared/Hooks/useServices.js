import { useState, useEffect } from "react";
import { handleFetchServices } from "../services";

const useServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await handleFetchServices();
      if (response) {
        setServices(response);
      }
    })();
  }, []);

  return [services, setServices];
};

export default useServices;
