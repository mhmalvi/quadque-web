import React from "react";
import Office from "../../../../asstes/Images/office.png"
import Gallery1 from "../../../../asstes/Images/gallery1.jpg"
import Gallery2 from "../../../../asstes/Images/gallery2.jpg"

const Gallery = () => {

  return (
    <div className="w-full relative pt-30">
      <img src={Office} alt="" className="absolute top-0 w-full h-81"/>
      <h1 className="absolute w-full flex items-end h-56 bg-gradient-to-b from-transparent to-black text-2xl text-white px-6 pb-10">Gallery</h1>
    
    {/* IMAGES GALLERY START */}
        <div className="flex flex-wrap justify-center mt-64 gap-4">
            <img src={Gallery1} alt="" className="w-40 rounded-xl"/>
            <img src={Gallery2} alt="" className="w-40 rounded-xl"/>
            <img src={Gallery2} alt="" className="w-40 rounded-xl"/>
            <img src={Gallery1} alt="" className="w-40 rounded-xl"/>
            <img src={Gallery1} alt="" className="w-40 rounded-xl"/>
            <img src={Gallery2} alt="" className="w-40 rounded-xl"/>
        </div>
    </div>
  );
};

export default Gallery;
