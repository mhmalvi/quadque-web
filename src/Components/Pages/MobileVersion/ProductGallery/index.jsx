import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import products from "../../DesktopVersion/Products/productData.json";
import { Link } from "react-router-dom";

const ProductGallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* For SEO purpose */}
      {/* Meta Keywords */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`Products - Get The Best Online IT Services for Business - Quadque`}</title>
      </Helmet>

      <div className="min-h-full bg-black text-white  overflow-y-auto font_primary">
        <div className="text-3xl text-white mt-28 px-6 pb-10 font_title">
          Our Products
        </div>

        <div className="w-11/12 grid grid-cols-1 items-center justify-center gap-6 mx-auto">
          {products?.map((product, i) => (
            <div
              key={i}
              className="mx-auto cursor-pointer w-52 px-4 py-6 border border-brand-color/30 bg-gradient-to-tr from-brand-color/30 to-transparent"
            >
              <Link
                className="flex flex-col justify-center items-center gap-4"
                to={`../products/${product?.slug}`}
              >
                <img
                  className="w-3/4 m-auto rounded-md"
                  src={product?.logo}
                  alt="Company"
                />
                <div className="font_poppins text-lg font-semibold">
                  {product?.name}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductGallery;
