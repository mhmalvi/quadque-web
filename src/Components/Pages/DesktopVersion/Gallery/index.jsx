import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Fade } from "react-reveal";
import { useLocation } from "react-router-dom";
import Office from "../../../../asstes/Images/office.png";
import allbum from "../../../../asstes/Images/photo_gallery.png";

const Gallery = ({ setLoader }) => {
  const location = useLocation();
  const [activeAccordion, setactiveAccordion] = useState(0);
  // const [triggerTitleAnimation, setTriggerTitleAnimation] = useState(false);
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const synth = window.speechSynthesis;

  useEffect(() => {
    if (location.pathname === "/gallery") {
      synth.cancel();

      setTimeout(() => {
        setTriggerAnimation(true);
        // setTriggerTitleAnimation(true);
      }, 800);

      setTimeout(() => {
        setLoader(false);
      }, 1000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.hash]);

  return (
    <>
      {/* For SEO */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Gallery - Quadque Technologies Limited</title>
        <meta name="description" content={"gallery"} />
        <meta name="keywords" content={"gallery"} />
      </Helmet>

      <div className="gallery min-h-full bg-black text-white pb-20 h-[90vh] overflow-y-auto font-poppins">
        <img src={Office} alt="" className="w-full h-96" />
        {/* <h1 className="absolute w-full flex items-end h-56 bg-gradient-to-b from-transparent to-black text-2xl text-white px-6 pb-10"> */}
        <h1 className="text-center text-white text-4xl font_title">Gallery</h1>

        {/* IMAGES GALLERY START */}
        <div className="mt-10 2xl:mt-20 px-28 gap-4">
          <div className="faq w-10/12 mx-auto pb-4 px-6 mt-6">
            <Fade left cascade spy={triggerAnimation}>
              {Images?.map((image, i) => (
                <div key={i}>
                  <div
                    className="flex items-center text-2xl font-semibold my-6 cursor-pointer mb-8"
                    onClick={() =>
                      setactiveAccordion(activeAccordion === i ? null : i)
                    }
                  >
                    <div className="whitespace-nowrap flex items-center">
                      <img src={allbum} className="w-6 mr-2" alt="" />
                      <h1>{image?.event}</h1>
                    </div>
                    <div className="h-0.5 ml-8 w-full bg-white bg-opacity-60"></div>
                  </div>
                  {activeAccordion === i ? (
                    <div className="flex flex-wrap justify-center items-center gap-8">
                      {image?.images?.map((img, i) => (
                        <img key={i} src={img} alt="" className="rounded-xl" />
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}

              {/* <Collapse accordion ghost>
                <Panel
                  className="text-xl mb-4"
                  header="What services does Quadque Technologies offer?"
                  key="1"
                >
                  <p className="text-base font-light text-white text-opacity-95 text-justify ml-8">
                    <div className="flex flex-wrap justify-center gap-8">
                      <img src={Gallery1} alt="" className="w-40 rounded-xl" />
                      <img src={Gallery2} alt="" className="w-40 rounded-xl" />
                      <img src={Gallery2} alt="" className="w-40 rounded-xl" />
                      <img src={Gallery1} alt="" className="w-40 rounded-xl" />
                      <img src={Gallery1} alt="" className="w-40 rounded-xl" />
                      <img src={Gallery2} alt="" className="w-40 rounded-xl" />
                    </div>
                  </p>
                </Panel>

                <Panel
                  className="text-xl mb-4"
                  header="Does Quadque Technologies offer IT support services?"
                  key="4"
                >
                  <p className="text-base font-light text-white text-opacity-95 text-justify ml-8">
                    <div className="flex flex-wrap justify-center gap-8">
                      <img src={Gallery1} alt="" className="w-40 rounded-xl" />
                      <img src={Gallery2} alt="" className="w-40 rounded-xl" />
                      <img src={Gallery2} alt="" className="w-40 rounded-xl" />
                      <img src={Gallery1} alt="" className="w-40 rounded-xl" />
                      <img src={Gallery1} alt="" className="w-40 rounded-xl" />
                      <img src={Gallery2} alt="" className="w-40 rounded-xl" />
                    </div>
                  </p>
                </Panel>

                <Panel
                  className="text-xl mb-4"
                  header="How can I contact Quadque Technologies for more information?"
                  key="5"
                >
                  <p className="text-base font-light text-white text-opacity-95 text-justify ml-8">
                    <div className="flex flex-wrap justify-center gap-8">
                      <img src={Gallery1} alt="" className="w-40 rounded-xl" />
                      <img src={Gallery2} alt="" className="w-40 rounded-xl" />
                      <img src={Gallery2} alt="" className="w-40 rounded-xl" />
                      <img src={Gallery1} alt="" className="w-40 rounded-xl" />
                      <img src={Gallery1} alt="" className="w-40 rounded-xl" />
                      <img src={Gallery2} alt="" className="w-40 rounded-xl" />
                    </div>
                  </p>
                </Panel>
              </Collapse> */}
            </Fade>
          </div>

          {/* <img src={Gallery1} alt="" className="w-40 rounded-xl" />
          <img src={Gallery2} alt="" className="w-40 rounded-xl" />
          <img src={Gallery2} alt="" className="w-40 rounded-xl" />
          <img src={Gallery1} alt="" className="w-40 rounded-xl" />
          <img src={Gallery1} alt="" className="w-40 rounded-xl" />
          <img src={Gallery2} alt="" className="w-40 rounded-xl" /> */}
        </div>
      </div>
    </>
  );
};

export default Gallery;

const Images = [
  {
    key: 0,
    event: "Random Memories",
    images: [
      "https://lh3.googleusercontent.com/p/AF1QipM4PIEGDxgTmwAgDZLFqfEVgPGAtl0EytEtTsZY=s680-w680-h510",
      "https://lh3.googleusercontent.com/p/AF1QipPDn6C6wcRFQ_vBivFeBJ7TohWecpxiSf2gOpCM=s680-w680-h510",
      "https://lh3.googleusercontent.com/p/AF1QipMmNDzYrA7oFTxwsdKCxFm7QQrCW7UvOwEPqMD6=s680-w680-h510",
      "https://lh3.googleusercontent.com/p/AF1QipMDA5xEDmyyhTRDPShfOn8SrlmuW7Y8xG_WwIJ5=s680-w680-h510",
      "https://lh3.googleusercontent.com/p/AF1QipM2DxHcpjqKC4dPY9oh1xmKVjP_NUJQj3c-lr_k=s680-w680-h510",
      "https://lh3.googleusercontent.com/p/AF1QipOHV334A6WNEpaBwm9aAiyPqXu5aw6iLlZPm1Fz=s680-w680-h510",
      "https://lh3.googleusercontent.com/p/AF1QipOkGzbnDk0JOYgnkxy1HBiTKcToXcdhFHnrTevp=s680-w680-h510",
      "https://lh3.googleusercontent.com/p/AF1QipOHV334A6WNEpaBwm9aAiyPqXu5aw6iLlZPm1Fz=s680-w680-h510",
      "https://lh3.googleusercontent.com/p/AF1QipOkGzbnDk0JOYgnkxy1HBiTKcToXcdhFHnrTevp=s680-w680-h510",
    ],
  },
  {
    key: 1,
    event: "QQQ Party",
    images: [
      "https://lh3.googleusercontent.com/p/AF1QipMmNDzYrA7oFTxwsdKCxFm7QQrCW7UvOwEPqMD6=s680-w680-h510",
      "https://lh3.googleusercontent.com/p/AF1QipPDn6C6wcRFQ_vBivFeBJ7TohWecpxiSf2gOpCM=s680-w680-h510",
      "https://lh3.googleusercontent.com/p/AF1QipOkGzbnDk0JOYgnkxy1HBiTKcToXcdhFHnrTevp=s680-w680-h510",
      "https://lh3.googleusercontent.com/p/AF1QipOHV334A6WNEpaBwm9aAiyPqXu5aw6iLlZPm1Fz=s680-w680-h510",
      "https://lh3.googleusercontent.com/p/AF1QipOkGzbnDk0JOYgnkxy1HBiTKcToXcdhFHnrTevp=s680-w680-h510",
      "https://lh3.googleusercontent.com/p/AF1QipM2DxHcpjqKC4dPY9oh1xmKVjP_NUJQj3c-lr_k=s680-w680-h510",
      "https://lh3.googleusercontent.com/p/AF1QipM4PIEGDxgTmwAgDZLFqfEVgPGAtl0EytEtTsZY=s680-w680-h510",
      "https://lh3.googleusercontent.com/p/AF1QipMDA5xEDmyyhTRDPShfOn8SrlmuW7Y8xG_WwIJ5=s680-w680-h510",
      "https://lh3.googleusercontent.com/p/AF1QipOHV334A6WNEpaBwm9aAiyPqXu5aw6iLlZPm1Fz=s680-w680-h510",
    ],
  },
  {
    key: 2,
    event: "XYZ Party",
    images: [
      "https://lh3.googleusercontent.com/p/AF1QipM4PIEGDxgTmwAgDZLFqfEVgPGAtl0EytEtTsZY=s680-w680-h510",
      "https://lh3.googleusercontent.com/p/AF1QipPDn6C6wcRFQ_vBivFeBJ7TohWecpxiSf2gOpCM=s680-w680-h510",
      "https://lh3.googleusercontent.com/p/AF1QipOkGzbnDk0JOYgnkxy1HBiTKcToXcdhFHnrTevp=s680-w680-h510",
      "https://lh3.googleusercontent.com/p/AF1QipMDA5xEDmyyhTRDPShfOn8SrlmuW7Y8xG_WwIJ5=s680-w680-h510",
      "https://lh3.googleusercontent.com/p/AF1QipOkGzbnDk0JOYgnkxy1HBiTKcToXcdhFHnrTevp=s680-w680-h510",
      "https://lh3.googleusercontent.com/p/AF1QipOHV334A6WNEpaBwm9aAiyPqXu5aw6iLlZPm1Fz=s680-w680-h510",
      "https://lh3.googleusercontent.com/p/AF1QipMmNDzYrA7oFTxwsdKCxFm7QQrCW7UvOwEPqMD6=s680-w680-h510",
      "https://lh3.googleusercontent.com/p/AF1QipOHV334A6WNEpaBwm9aAiyPqXu5aw6iLlZPm1Fz=s680-w680-h510",
      "https://lh3.googleusercontent.com/p/AF1QipM2DxHcpjqKC4dPY9oh1xmKVjP_NUJQj3c-lr_k=s680-w680-h510",
    ],
  },
];
