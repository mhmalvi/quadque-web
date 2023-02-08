import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Icons from "../../../../Shared/Icons";
import Career from "../../../MobileVersion/Career/Career.json";
import Footer from "../../Footer";

const CareerDetails = ({ setLoader }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [careerData, setCareerData] = useState();

  useEffect(() => {
    const fetchCareer = Career.find((career) => career.id === id);

    if (fetchCareer) {
      setTimeout(() => {
        setLoader(false);
      }, 1000);
      setCareerData(fetchCareer);
    }
  }, [id, setLoader]);

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
          src={"https://i.ibb.co/1GxDBSp/jobpost.png"}
          alt=""
          className="w-8/12 mx-auto relative"
        />
        <div className="px-6">
          <div className="text-3xl font-semibold text-center pb-6 pt-20 font_title">
            {careerData?.position}
          </div>

          <div className="pb-8">
            <p className="text-lg text-zinc-400">Summary:</p> <br />
            <p className="text-lg">{careerData?.summary}</p>
          </div>

          <div className="pb-8">
            <p className="text-lg text-zinc-400">Job Responsibility:</p> <br />
            <ul className="list-disc text-justify pl-6">
              {careerData?.responsibility?.map((resp) => (
                <li className="text-lg py-1">{resp}</li>
              ))}
            </ul>
          </div>

          <div className="pb-8">
            <p className="text-lg text-zinc-400">Educational Requirements:</p>{" "}
            <br />
            <ul className="list-disc text-justify pl-6">
              {careerData?.edu_requirement?.map((resp) => (
                <li className="text-lg py-1">{resp}</li>
              ))}
            </ul>
          </div>

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

            <div className="pt-2">
              <span className=" text-zinc-400">Experience:</span> <br />{" "}
              {careerData?.experience_req}
              <div className="h-0.5 bg-zinc-700 mt-2"></div>
            </div>

            <div className="pt-2">
              <span className=" text-zinc-400">Application Deadline:</span>{" "}
              <br /> {careerData?.app_deadline}
            </div>
            {/* <Link to={`/`}> */}
            <div className="w-40 border cursor-pointer bg-black text-white text-lg text-center py-2 my-10 mx-auto px-6 spirit-bomb rounded-full relative z-50">
              Apply
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
