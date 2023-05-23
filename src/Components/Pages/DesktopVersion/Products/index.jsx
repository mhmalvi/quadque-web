import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Footer from "../Footer";

const Products = ({ setLoader }) => {
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* For SEO purpose */}
      {/* Meta Keywords */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`Products - Get The Best Online IT Services for Business - Quadque`}</title>
      </Helmet>

      <div className="min-h-full bg-black text-white py-20 px-36 h-[90vh] overflow-y-auto font_primary">
        <div className="text-3xl text-white mt-10 px-6 pb-14 font_title">
          Our Products
        </div>

        <div className="min-h-full">
          <div className="flex justify-center items-center gap-6">
            <div className="cursor-pointer w-60 px-4 py-6 border border-brand-color/30 bg-gradient-to-tr from-brand-color/30 to-transparent">
              <a
                className="flex flex-col justify-center items-center gap-4"
                href="https://www.queleadscrm.com"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="w-3/4 m-auto rounded-md"
                  src="https://i.ibb.co/NtJj0py/Screenshot-1-removebg-preview.png"
                  alt="Company"
                />
                <div className="font_poppins text-lg font-semibold">
                  QueLeadsCRM
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="-mb-20">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Products;
