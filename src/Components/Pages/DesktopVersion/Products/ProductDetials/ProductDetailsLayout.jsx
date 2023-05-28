import React, { useState } from "react";
import BaseLayout from "../../layout/BaseLayout";
import ProductDetails from ".";

const ProductDetailsLayout = () => {
  const [loader, setLoader] = useState(true);

  return (
    <>
      <BaseLayout>
        <ProductDetails loader={loader} setLoader={setLoader} />
      </BaseLayout>
    </>
  );
};

export default ProductDetailsLayout;
