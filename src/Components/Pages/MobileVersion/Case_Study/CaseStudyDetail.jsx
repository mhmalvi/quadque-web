import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Icons from "../../../Shared/Icons";
import PhoneOuterBody from "../../../../asstes/Images/PhoneBody.svg";
import Marble from "../../../../asstes/Images/marble.png";
import Brand1 from "../../../../asstes/Images/brand11.png";
import Brand2 from "../../../../asstes/Images/brand22.png";
import Brand3 from "../../../../asstes/Images/brand33.png";
import Brand4 from "../../../../asstes/Images/brand44.png";
import { handleFetchCaseStudyBySlug } from "../../../Shared/services";

const CaseStudyDetail = () => {
  const { slug } = useParams();
  const [caseData, setCaseData] = useState();

  useEffect(() => {
    (async () => {
      const fetchCaseStudy = await handleFetchCaseStudyBySlug(slug);
      setCaseData(fetchCaseStudy);
    })();
  }, [slug]);
  console.log("case data", caseData);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`Services`}</title>
        {/* <meta name="keywords" content={blogDetails?.meta_keyword} /> */}
      </Helmet>
      <div className="w-full text-white pt-30 px-6">
        {/* TOP SECTION  */}
        <div>
          <div className="text-2xl text-center pb-3">{caseData?.com_name}</div>
          <div className="text-sm text-center">{caseData?.summary1}</div>

          <img src={caseData?.group_images} alt="" className="m-auto py-13" />

          <div className="text-sm text-center pb-5">{caseData?.summary2}</div>
          <div className="w-32 flex justify-center mx-auto bg-[#0793FF] rounded-full text-black text-sm font-semibold px-3 py-2">
            Contact Us
          </div>
        </div>

        {/* SECTION 2 */}
        <div className="">
          <img src={caseData?.short_banner} alt="" className="m-auto pt-13" />
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
        <div>
          <div className="text-2xl text-center">Our Content:</div>
          <div className="text-2xl text-center pb-13">
            {caseData?.our_content_header}
          </div>
          {/* sub-section 1 */}
          <div className="flex-col pb-13">
            <img
              src={caseData?.image_1}
              alt=""
              className="w-2/3 m-auto pb-13"
            />
            <div className="text-lg font-semibold">{caseData?.title_1}</div>
            <div className="text-base py-3">{caseData?.description_1}</div>
          </div>
          {/* sub-section 2 */}
          <div className="flex-col pb-13">
            <img
              src={caseData?.image_2}
              alt=""
              className="w-2/3 m-auto pb-13"
            />
            <div className="text-lg font-semibold">{caseData?.title_2}</div>
            <div className="text-base py-3">{caseData?.description_2}</div>
          </div>
          {/* sub-section 3 */}
          <div className="flex-col pb-13">
            <img
              src={caseData?.image_3}
              alt=""
              className="w-2/3 m-auto pb-13"
            />
            <div className="text-lg font-semibold">{caseData?.title_3}</div>
            <div className="text-base py-3">{caseData?.description_3}</div>
          </div>
        </div>

        {/* SECTION 4 */}
        <div className="pb-13">
          <div className="text-2xl text-center pb-13">
            Creative Digital Marketing Agency
          </div>
          <div className="flex flex-wrap justify-center gap-1">
            <img src={Brand1} alt="" className="w-1/4" />
            <img src={Brand2} alt="" className="w-1/4" />
            <img src={Brand3} alt="" className="w-1/4" />
            <img src={Brand4} alt="" className="w-1/4" />
            <img src={Brand1} alt="" className="w-1/4" />
            <img src={Brand2} alt="" className="w-1/4" />
            <img src={Brand3} alt="" className="w-1/4" />
            <img src={Brand4} alt="" className="w-1/4" />
            <img src={Brand1} alt="" className="w-1/4" />
          </div>
        </div>

        {/* BOTTOM SECTION  */}
        {/*       <div>

        <img src={Marble} alt="" className="m-auto pb-13" />

        <div className="text-sm text-center pb-5">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur sadipscing
          elitr
        </div>
        <div className="flex justify-evenly">
          <div className="w-32 bg-[#0793FF] rounded-full text-black text-sm font-semibold text-center px-3 py-2">
            Contact Us
          </div>
          or
          <div className="pt-1">
          +61405899496
          </div>
        </div>
      </div> */}
        <Link to={`/`}>
          <div className="flex text-white text-justify py-2 my-5 px-6">
            <Icons.GoBackArrow width={20} className="mx-3 go-back-arrow" />
            Go Back
          </div>
        </Link>
      </div>
    </>
  );
};

export default CaseStudyDetail;
