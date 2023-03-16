import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Icons from "../../../../Shared/Icons";
import Career from "../../../MobileVersion/Career/Career.json";
import Footer from "../../Footer";

const CareerDetails = ({ setLoader }) => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [careerData, setCareerData] = useState();

  useEffect(() => {
    if (Career.find((career) => career.slug === slug)) {
      const fetchCareer = Career.find((career) => career.slug === slug);

      if (fetchCareer) {
        setTimeout(() => {
          setLoader(false);
        }, 1000);
        setCareerData(fetchCareer);
      }
    } else {
      navigate("404");
    }
  }, [slug, setLoader, navigate]);

  return (
    <div className="min-h-full bg-black text-white pt-20 px-36 h-[90vh] overflow-y-auto font_primary">
      {/* Go Back */}
      <div className="mb-20">
        <Icons.GoBackArrow
          className="w-6 font-semibold cursor-pointer"
          onClick={() => {
            navigate(`../career`, { replace: true });
          }}
        />
      </div>

      <div className="w-full text-white font_primary mb-16">
        <img
          src={careerData?.thumbnail}
          alt="Job Thumbnail"
          className="w-8/12 mx-auto relative"
        />
        <div className="px-6">
          <div className="text-3xl font-semibold text-center pb-6 pt-20 font_title">
            {careerData?.position}
          </div>

          {careerData?.summary ? (
            <div className="pb-8">
              <p className="text-lg text-zinc-400">Summary:</p> <br />
              <p className="text-lg">{careerData?.summary}</p>
            </div>
          ) : null}

          <div className="pb-8">
            <p className="text-lg text-zinc-400">Job Responsibility:</p> <br />
            <ul className="list-disc text-justify pl-6">
              {careerData?.responsibility?.map((resp) => (
                <li className="text-lg py-1">{resp}</li>
              ))}
            </ul>
          </div>

          <div className="pb-8">
            <p className="text-lg text-zinc-400">Job Requirements:</p> <br />
            <ul className="list-disc text-justify pl-6">
              {careerData?.requirements?.map((requirement) => (
                <li className="text-lg py-1">{requirement}</li>
              ))}
            </ul>
          </div>

          {careerData?.edu_requirement?.length ? (
            <div className="pb-8">
              <p className="text-lg text-zinc-400">Educational Requirements:</p>{" "}
              <br />
              <ul className="list-disc text-justify pl-6">
                {careerData?.edu_requirement?.map((resp) => (
                  <li className="text-lg py-1">{resp}</li>
                ))}
              </ul>
            </div>
          ) : null}

          <div className="pb-8">
            <p className="text-lg text-zinc-400">Salary:</p> <br />
            <ul className="list-disc text-justify pl-6">
              <li className=" text-lg py-1">{careerData?.salary}</li>
            </ul>
          </div>

          <div className="pb-8">
            <p className="text-lg text-zinc-400">
              Compensation & Other Benefits:
            </p>{" "}
            <br />
            <ul className="list-disc text-justify pl-6">
              {careerData?.additional?.map((resp) => (
                <li className="text-lg py-1">{resp}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white bg-opacity-10 border border-zinc-700 backdrop-filter backdrop-blur-sm rounded-md p-3 text-lg">
            <div className="pt-0">
              <span className=" text-zinc-400"> Published on:</span> <br />{" "}
              {careerData?.published_on}
              <div className="h-0.5 bg-zinc-700 mt-2"></div>
            </div>

            <div className="pt-2">
              <span className=" text-zinc-400">Vacancy:</span> <br />{" "}
              {careerData?.vacancy}
              <div className="h-0.5 bg-zinc-700 mt-2"></div>
            </div>

            <div className="pt-2">
              <span className=" text-zinc-400">Employment Status:</span> <br />{" "}
              {careerData?.employment_status}
              <div className="h-0.5 bg-zinc-700 mt-2"></div>
            </div>

            <div className="pt-2">
              <span className=" text-zinc-400">Office Time:</span> <br />{" "}
              {careerData?.office_time}
              <br /> {careerData?.office_days}
              <div className="h-0.5 bg-zinc-700 mt-2"></div>
            </div>

            {careerData?.experience_req ? (
              <div className="pt-2">
                <span className=" text-zinc-400">Experience:</span> <br />{" "}
                {careerData?.experience_req}
                <div className="h-0.5 bg-zinc-700 mt-2"></div>
              </div>
            ) : null}

            {careerData?.app_deadline ? (
              <div className="pt-2">
                <span className=" text-zinc-400">Application Deadline:</span>{" "}
                <br /> {careerData?.app_deadline}
              </div>
            ) : null}

            <div className="text-sm font-light italic py-4">
              <span className="font-semibold text-red-500 text-lg mr-1">*</span>
              <span>
                Only shortlisted candidates will be contacted for the next step
                of the selection process. Thank you!
              </span>
            </div>
            <div className="flex justify-center items-center">
              <a
                href={careerData?.appying_url}
                target="_blank"
                rel="noreferrer"
              >
                <div className="w-40 border cursor-pointer bg-black text-white text-lg text-center py-2 my-10 mx-auto px-6 spirit-bomb rounded-full relative z-50">
                  Apply
                </div>
              </a>
            </div>

            {/* </Link> */}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CareerDetails;
