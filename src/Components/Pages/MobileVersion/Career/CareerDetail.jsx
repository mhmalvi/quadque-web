import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Icons from "../../../Shared/Icons";
import Career from "./Career.json";

const CareerDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [careerData, setCareerData] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (Career.find((career) => career.id === id)) {
      const fetchCareer = Career.find((career) => career.id === id);
      console.log("fetch", fetchCareer);
      setCareerData(fetchCareer);
    } else {
      navigate("/404");
    }
  }, [id]);

  return (
    <div className="w-full text-white font_primary">
      <img
        src="https://i.ibb.co/1GxDBSp/jobpost.png"
        alt=""
        className="w-full relative z-50"
      />
      <div className="px-6">
        <div className="text-xl text-center py-6">
          {/* Backend Software Developer */}
          {careerData?.position}
        </div>

        <div className="pb-5">
          <p className="text-lg text-zinc-400">Summary:</p>
          <p className="text-sm">
            {" "}
            {/* Quadque Tech Limited is looking for an experienced, well-connected
            and organized Project Manager-IT to join our Panthapath office and
            take the company to the next level! Education Hub supports future
            leaders from Bangladesh in their quest to study at the best global
            institutes. Our team guide students at every step of the way. */}
            {careerData?.summary}
          </p>
        </div>

        <div className="pb-5">
          <p className="text-lg text-zinc-400">Job Responsibility:</p>
          <ul className="list-disc text-justify pl-6">
            {careerData?.responsibility?.map((resp) => (
              <li className="text-sm py-1">{resp}</li>
            ))}
            {/* <li className="text-sm py-1">
              Ability to 'think out the box' and when under pressure
            </li>
            <li className="text-sm py-1">
              Deliver a CRM training session to our new team mates or associates
              in a constructive manner.
            </li>
            <li className="text-sm py-1">
              Researching, Planning and executing SEO task in collaboration with
              Marketing Team.
            </li>
            <li className="text-sm py-1">
              Maintain our hosting and domains and update them where necessary.
            </li>
            <li className="text-sm py-1">
              Improve existing apps, website, CRM and database system.
            </li> */}
          </ul>
          {/* <div> {careerData?.responsibility}</div> */}
        </div>

        <div className="pb-5">
          <p className="text-lg text-zinc-400">Educational Requirements:</p>{" "}
          <ul className="list-disc text-justify pl-6">
            {careerData?.edu_requirement?.map((resp) => (
              <li className="text-sm py-1">{resp}</li>
            ))}
          </ul>
        </div>

        <div className="pb-5">
          <p className="text-lg text-zinc-400">Salary:</p>
          <ul className="list-disc text-justify pl-6">
            <li className=" text-sm py-1">{careerData?.salary}</li>
          </ul>
        </div>

        <div className="pb-5">
          <p className="text-lg text-zinc-400">
            Compensation & Other Benefits:
          </p>{" "}
          <ul className="list-disc text-justify pl-6">
            {careerData?.additional?.map((resp) => (
              <li className="text-sm py-1">{resp}</li>
            ))}
          </ul>
        </div>

        <div className="bg-white bg-opacity-10 border border-zinc-700 backdrop-filter backdrop-blur-sm rounded-md p-3 text-sm">
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
            <span className=" text-zinc-400">Application Deadline:</span> <br />{" "}
            {careerData?.app_deadline}
          </div>
          {/* <Link to={`/`}> */}
          <div className="w-40 bg-black text-white text-sm text-center py-2 my-10 mx-auto px-6 spirit-bomb rounded-full relative z-50 font_title">
            Apply
          </div>
          {/* </Link> */}
        </div>

        <Link to={`/career`}>
          <div className="w-44 flex text-sm py-2 my-10 mx-auto px-6 rounded-full">
            <Icons.GoBackArrow width={20} className="mx-3 go-back-arrow" />
            Go Back
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CareerDetail;
