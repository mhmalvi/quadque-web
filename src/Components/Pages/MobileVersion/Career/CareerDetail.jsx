import React from 'react';
import Interface from "../../../../asstes/Images/advertise.png";
import Icons from "../../../Shared/Icons";

const CareerDetail = () => {
  return (
    <div className="w-full text-white">
      <img src={Interface} alt="" className="w-full relative z-50" />
      <div className="px-6">
        <div className="text-xl text-center py-6">
          Backend Software Developer
        </div>

        <div className="pb-5">
          <p className="text-sm text-zinc-400">Summary:</p> <br />
          <p className="text-sm">
            {" "}
            Quadque Tech Limited is looking for an experienced, well-connected
            and organized Project Manager-IT to join our Panthapath office and
            take the company to the next level! Education Hub supports future
            leaders from Bangladesh in their quest to study at the best global
            institutes. Our team guide students at every step of the way.
          </p>
        </div>

        <div className="pb-5">
          <p className="text-sm text-zinc-400">Job Responsibility:</p> <br />
          <ul className="list-disc text-justify pl-6">
            <li className="text-sm py-1">
              {/* <span className="w-1 h-1 rounded-full bg-white mr-2 mt-2"></span> */}
              Installs and configures computer hardware, software solutions,
              operating systems, and applications.
            </li>
            <li className="text-sm py-1">
              {/* <span className="w-1 h-1 rounded-full bg-white mr-2 mt-2"></span> */}
              Ability to 'think out the box' and when under pressure
            </li>
            <li className="text-sm py-1">
              {/* <span className="w-1 h-1 rounded-full bg-white mr-2 mt-2"></span> */}
              Deliver a CRM training session to our new team mates or associates
              in a constructive manner.
            </li>
            <li className="text-sm py-1">
              {/* <span className="w-1 h-1 rounded-full bg-white mr-2 mt-2"></span> */}
              Researching, Planning and executing SEO task in collaboration with
              Marketing Team.
            </li>
            <li className="text-sm py-1">
              {/* <span className="w-1 h-1 rounded-full bg-white mr-2 mt-2"></span> */}
              Maintain our hosting and domains and update them where necessary.
            </li>
            <li className="text-sm py-1">
              {/* <span className="w-1 h-1 rounded-full bg-white mr-2 mt-2"></span> */}
              Improve existing apps, website, CRM and database system.
            </li>
          </ul>
        </div>

        <div className="pb-5">
          <p className="text-sm text-zinc-400">Educational Requirements:</p>{" "}
          <br />
          <ul className="list-disc text-justify pl-6">
            <li className=" text-sm py-1">
              {/* <span className="w-1 h-1 rounded-full bg-white mr-2 mt-2"></span> */}
              Bachelor or Masters in Computer Science & Engineering from any
              reputed university
            </li>
          </ul>
        </div>

        <div className="pb-5">
          <p className="text-sm text-zinc-400">Salary:</p> <br />
          <ul className="list-disc text-justify pl-6">
            <li className=" text-sm py-1">
              {/* <span className="w-1 h-1 rounded-full bg-white mr-2 mt-2"></span> */}
              40000 BDT to 60000 BDT [Based on Updated Technological Knowledge &
              Apply Method]
            </li>
          </ul>
        </div>

        <div className="pb-5">
          <p className="text-sm text-zinc-400">
            Compensation & Other Benefits:
          </p>{" "}
          <br />
          <ul className="list-disc text-justify pl-6">
            <li className=" text-sm py-1">
              {/* <span className="w-1 h-1 rounded-full bg-white mr-2 mt-2"></span> */}
              Festival Bonus: Yearly 2
            </li>
            <li className=" text-sm py-1">
              {/* <span className="w-1 h-1 rounded-full bg-white mr-2 mt-2"></span> */}
              Yearly Salary Review
            </li>
            <li className=" text-sm py-1">
              {/* <span className="w-1 h-1 rounded-full bg-white mr-2 mt-2"></span> */}
              Additional Reward - Based on Company Policy
            </li>
          </ul>
        </div>

        <div className="bg-white bg-opacity-10 border border-zinc-700 backdrop-filter backdrop-blur-sm rounded-md p-3 text-sm">
          <div className="pt-0">
            <span className=" text-zinc-400"> Published on:</span> <br />{" "}
            12/01/2023
            <div className="h-0.5 bg-zinc-700 mt-2"></div>
          </div>

          <div className="pt-2">
            <span className=" text-zinc-400">Vacancy:</span> <br /> 2
            <div className="h-0.5 bg-zinc-700 mt-2"></div>
          </div>

          <div className="pt-2">
            <span className=" text-zinc-400">Employment Status:</span> <br />{" "}
            Full-time
            <div className="h-0.5 bg-zinc-700 mt-2"></div>
          </div>

          <div className="pt-2">
            <span className=" text-zinc-400">Office Time:</span> <br /> 8 AM -
            5:30 PM <br /> Sunday - Thursday
            <div className="h-0.5 bg-zinc-700 mt-2"></div>
          </div>

          <div className="pt-2">
            <span className=" text-zinc-400">Experience:</span> <br /> 1 year
            <div className="h-0.5 bg-zinc-700 mt-2"></div>
          </div>

          <div className="pt-2">
            <span className=" text-zinc-400">Application Deadline:</span> <br />{" "}
            22/01/2023
            {/* <div className="h-0.5 bg-zinc-700 mt-2"></div> */}
          </div>
          {/* <Link to={`/`}> */}
          <div className="w-40 border bg-black text-white text-sm text-center py-2 my-10 mx-auto px-6 spirit-bomb rounded-full relative z-50">
            Apply Now
          </div>
          {/* </Link> */}
        </div>

        {/* <Link to={`/`}> */}
        <div className="w-38 flex text-sm py-2 my-10 mx-auto px-6 rounded-full">
          <Icons.GoBackArrow width={20} className="mx-3 go-back-arrow" />
          Go Back
        </div>
        {/* </Link> */}
      </div>
    </div>
  );
}

export default CareerDetail