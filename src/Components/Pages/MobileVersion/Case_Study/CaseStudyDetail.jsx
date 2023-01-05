import React from "react";
import PhoneOuterBody from "../../../../asstes/Images/PhoneBody.svg";
import Marble from "../../../../asstes/Images/marble.png";

const CaseStudyDetail = () => {
  return (
    <div className="w-full text-white pt-30 px-6">
      {/* TOP SECTION  */}
      <div>
        <div className="text-2xl text-center pb-3">
          Creative Digital Marketing Agency
        </div>
        <div className="text-sm text-center">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur sadipscing
          elitr
        </div>

        <img src={PhoneOuterBody} alt="" className="m-auto py-13" />

        <div className="text-sm text-center pb-5">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur sadipscing
          elitr
        </div>
        <div className="w-32 flex justify-center mx-auto bg-[#0793FF] rounded-full text-black text-sm font-semibold px-3 py-2">
          Contact Us
        </div>
      </div>

      {/* SECTION 2 */}
      <div className="pb-13">
        {/* sub-section 1 */}
        <div className="text-2xl pt-13 pb-3">
          Creative Digital Marketing Agency
        </div>
        <div className="text-base">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur sadipscing
          elitr
        </div>
        {/* sub-section 2 */}
        <div className="text-2xl pt-13 pb-3">
          Creative Digital Marketing Agency
        </div>
        <div className="text-base">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur sadipscing
          elitr
        </div>
        {/* sub-section 3 */}
        <div className="text-2xl pt-13 pb-3">
          Creative Digital Marketing Agency
        </div>
        <div className="text-base">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur sadipscing
          elitr
        </div>
        {/* sub-section 4 */}
        <div className="text-2xl pt-13 pb-3">
          Creative Digital Marketing Agency
        </div>
        <div className="text-base">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur sadipscing
          elitr
        </div>
      </div>

      {/* SECTION 3 */}
      <div>
        <div className="text-2xl text-center pb-13">
          Our Content: Creative Digital Marketing Agency Creative Digital
          Marketing
        </div>
        {/* sub-section 1 */}
        <div className="flex-col pb-13">
          <img src={Marble} alt="" />
          <div className="text-base py-3">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur
            sadipscing elitr
          </div>
        </div>
        {/* sub-section 2 */}
        <div className="flex-col pb-13">
          <img src={Marble} alt="" />
          <div className="text-base py-3">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur
            sadipscing elitr
          </div>
        </div>
        {/* sub-section 3 */}
        <div className="flex-col pb-13">
          <img src={Marble} alt="" />
          <div className="text-base py-3">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur
            sadipscing elitr
          </div>
        </div>
      </div>

      {/* SECTION 4 */}
      <div className="pb-13">
        <div className="text-2xl text-center pb-13">
          Creative Digital Marketing Agency
        </div>   
        <div className="flex flex-wrap justify-center gap-2">
          <div className="w-28 h-20 flex justify-center items-center bg-[#0E0E0E] rounded-lg text-[#0060B5] font-extrabold p-2">ASUS</div>
          <div className="w-28 h-20 flex justify-center items-center bg-[#0E0E0E] rounded-lg text-[#0060B5] font-extrabold p-2">Allianz</div>
          <div className="w-28 h-20 flex justify-center items-center bg-[#0E0E0E] rounded-lg text-[#0060B5] font-extrabold p-2">The New York Times</div>
          <div className="w-28 h-20 flex justify-center items-center bg-[#0E0E0E] rounded-lg text-[#0060B5] font-extrabold p-2">Allianz</div>
          <div className="w-28 h-20 flex justify-center items-center bg-[#0E0E0E] rounded-lg text-[#0060B5] font-extrabold p-2">The New York Times</div>
          <div className="w-28 h-20 flex justify-center items-center bg-[#0E0E0E] rounded-lg text-[#0060B5] font-extrabold p-2">ASUS</div>
          <div className="w-28 h-20 flex justify-center items-center bg-[#0E0E0E] rounded-lg text-[#0060B5] font-extrabold p-2">The New York Times</div>
          <div className="w-28 h-20 flex justify-center items-center bg-[#0E0E0E] rounded-lg text-[#0060B5] font-extrabold p-2">ASUS</div>
          <div className="w-28 h-20 flex justify-center items-center bg-[#0E0E0E] rounded-lg text-[#0060B5] font-extrabold p-2">Allianz</div>
        </div>     
      </div>

      {/* BOTTOM SECTION  */}
      <div>

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
      </div>
    </div>
  );
};

export default CaseStudyDetail;
