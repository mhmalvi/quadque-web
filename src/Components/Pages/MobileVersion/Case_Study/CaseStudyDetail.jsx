import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import loaderFile from "../../../../asstes/Lotties/loader.json";
import Icons from "../../../Shared/Icons";
import { handleFetchCaseStudyBySlug } from "../../../Shared/services";
import Marble from "../../../../asstes/Images/marble.png"

const CaseStudyDetail = () => {
  const { slug } = useParams();
  const [caseData, setCaseData] = useState();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    (async () => {
      const fetchCaseStudy = await handleFetchCaseStudyBySlug(slug);
      console.log("fetch", fetchCaseStudy);
      if (fetchCaseStudy.status === 200) {
        setTimeout(() => {
          setLoader(false);
          setCaseData(fetchCaseStudy.data);
        }, 5000);
      }
    })();
  }, [slug]);
  console.log("case data", caseData);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{caseData?.our_content_header + ` – Quadque Tech`}</title>
        <meta name="keywords" content={caseData?.meta_keyword} />
      </Helmet>


      <div
        className="w-full min-h-[700px] text-white pt-30 font_primary"
        >
        {loader ? (
          <div className="w-full h-full z-40 flex flex-col justify-center items-center m-auto absolute bg-gradient-to-b from-black via-transparent to-black backdrop-blur-sm">
            <div className="absolute top-32">
              <Lottie
                className="w-1/2 mx-auto"
                animationData={loaderFile}
                loop={true}
              />
  
              <div className="font_title text-white animate-pulse flex justify-center">
                Loading...
              </div>
            </div>
          </div>
        ) : null}
        {/* TOP SECTION  */}
        <div className="px-6">
          <h1 className="font_title text-2xl text-center pb-3">
            {caseData?.com_name}
          </h1>
          <div className="text-sm text-center">{caseData?.summary1}</div>

          <img
            src={
              process.env.REACT_APP_ASSETS_URL + "/" + caseData?.group_images
            }
            alt=""
            className="m-auto py-13"
          />

          <div className="text-sm text-center pb-5">{caseData?.summary2}</div>
          <div className="w-40 flex justify-center bg-black text-white py-2 my-10 mx-auto px-6 spirit-bomb rounded-full relative z-10 font_title">
            <a href="#Footer">Contact Us</a>
          </div>
        </div>

        {/* SECTION 2 */}
        <div className="px-6">
          <img
            src={
              process.env.REACT_APP_ASSETS_URL + "/" + caseData?.short_banner
            }
            alt=""
            className="m-auto pt-13"
          />
          <div className="text-2xl pt-13 pb-3">
            <div
              className="case_editor"
              dangerouslySetInnerHTML={{ __html: caseData?.content }}
            ></div>
          </div>
          {/* sub-section 1 */}
          {/* <div className="text-2xl pt-13 pb-3">
          Creative Digital Marketing Agency
        </div>
        <div className="text-base">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur sadipscing
          elitr
        </div> */}
          {/* sub-section 2 */}
          {/* <div className="text-2xl pt-13 pb-3">
          Creative Digital Marketing Agency
        </div>
        <div className="text-base">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur sadipscing
          elitr
        </div> */}
          {/* sub-section 3 */}
          {/* <div className="text-2xl pt-13 pb-3">
          Creative Digital Marketing Agency
        </div>
        <div className="text-base">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur sadipscing
          elitr
        </div> */}
          {/* sub-section 4 */}
          {/* <div className="text-2xl pt-13 pb-3">
          Creative Digital Marketing Agency
        </div>
        <div className="text-base">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur sadipscing
          elitr
        </div> */}
        </div>

        {/* SECTION 3 */}
        <div className="px-6">
          <div className="text-2xl text-center">Our Content:</div>
          <div className="text-2xl text-center pb-13">
            {caseData?.our_content_header}
          </div>
          {/* sub-section 1 */}
          <div className="flex-col pb-13">
            <img
              src={process.env.REACT_APP_ASSETS_URL + "/" + caseData?.image_1}
              alt=""
              className="w-2/3 m-auto pb-13"
            />
            <div className="text-lg font-semibold">{caseData?.title_1}</div>
            <div className="text-base py-3">{caseData?.description_1}</div>
          </div>
          {/* sub-section 2 */}
          <div className="flex-col pb-13">
            <img
              src={process.env.REACT_APP_ASSETS_URL + "/" + caseData?.image_2}
              alt=""
              className="w-2/3 m-auto pb-13"
            />
            <div className="text-lg font-semibold">{caseData?.title_2}</div>
            <div className="text-base py-3">{caseData?.description_2}</div>
          </div>
          {/* sub-section 3 */}
          <div className="flex-col pb-13">
            <img
              src={process.env.REACT_APP_ASSETS_URL + "/" + caseData?.image_3}
              alt=""
              className="w-2/3 m-auto pb-13"
            />
            <div className="text-lg font-semibold">{caseData?.title_3}</div>
            <div className="text-base py-3">{caseData?.description_3}</div>
          </div>
        </div>

        {/* SECTION 4 */}
        <div className={`pb-13 ${!caseData?.agency ? "hidden" : "block"}`}>
          <div className="text-2xl text-center pb-13">
            Creative Digital Marketing Agency
          </div>
          <div className="flex flex-wrap justify-center gap-1">
            <img
              src={process.env.REACT_APP_ASSETS_URL + "/" + caseData?.agency}
              alt=""
              className="w-[90%]"
            />
            {/* <img src={Brand2} alt="" className="w-1/4" />
            <img src={Brand3} alt="" className="w-1/4" />
            <img src={Brand4} alt="" className="w-1/4" />
            <img src={Brand1} alt="" className="w-1/4" />
            <img src={Brand2} alt="" className="w-1/4" />
            <img src={Brand3} alt="" className="w-1/4" />
            <img src={Brand4} alt="" className="w-1/4" />
            <img src={Brand1} alt="" className="w-1/4" /> */}
          </div>
        </div>

        {/* BOTTOM SECTION  */}
        {/* <div>
          <img src={Marble} alt="" className="m-auto pb-13" />

          <div className="text-sm text-center pb-8">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur
            sadipscing elitr
          </div>
          <div className="flex justify-evenly">
            <div className="w-40 flex justify-center bg-black text-white py-2 mx-auto px-3 spirit-bomb rounded-full relative z-50 font_title">
              Contact Us
            </div>
          </div>
        </div> */}

        <Link to={`/`}>
          <div className="w-44 flex justify-center  bg-black text-white py-2 my-10 mx-auto px-6 rounded-full relative z-50">
            <Icons.GoBackArrow width={20} className="mx-3 go-back-arrow" />
            Go Back
          </div>
        </Link>
      </div>
    </>
  );
};

export default CaseStudyDetail;
