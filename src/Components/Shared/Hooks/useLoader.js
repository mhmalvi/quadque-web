import { useState } from "react";

const useLoader = () => {
  const [loader, setLoader] = useState(true);

  return [loader, setLoader];
};

export default useLoader;
