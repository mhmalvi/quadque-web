import { useState, useEffect } from "react";
import { handleFetchClientSpeaks } from "../services";

const useClientSpeak= () => {
  const [clientSpeak, setClientSpeak] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await handleFetchClientSpeaks();
      if (response) {
        setClientSpeak(response);
      }
    })();
  }, []);

  return [clientSpeak, setClientSpeak];
};

export default useClientSpeak;