import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Fade from "react-reveal/Fade";
import { useLocation, useNavigate } from "react-router-dom";
import Office from "../../../../assets/Images/office.png";
import allbum from "../../../../assets/Images/photo_gallery.png";
import Icons from "../../../Shared/Icons";
import { handleFetchGallery } from "../../../Shared/services";

const Gallery = ({ setLoader }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [galleryImages, setGalleryImages] = useState([]);
  const [activeAccordion, setActiveAccordion] = useState(0);
  const [triggerTitleAnimation, setTriggerTitleAnimation] = useState(false);
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const synth = window.speechSynthesis;

  useEffect(() => {
    if (location.pathname === "/gallery") {
      synth.cancel();

      setTimeout(() => {
        setTriggerAnimation(true);
        setTriggerTitleAnimation(true);
      }, 800);

      setTimeout(() => {
        setLoader(false);
      }, 1000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.hash]);

  useEffect(() => {
    (async () => {
      const galleryImages = await handleFetchGallery();
      if (galleryImages?.message === "success") {
        console.log(galleryImages?.data);
        setGalleryImages(galleryImages?.data);
      }
    })();
  }, []);

  return (
    <>
      {/* For SEO */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Gallery - Get The Best Online IT Services for Business - Quadque
        </title>
        <meta
          name="description"
          content="Take a look at our vibrant team in action, who work hard to ensure the best possible results for your digital and IT requirements. Our achievements are possible because of them."
        />
        <meta
          name="keywords"
          content="web development services, Software Development services , web and mobile app development services , digital marketing services, ui ux design and development services, online it support services, it services online, it services online "
        />
      </Helmet>

      <div className="gallery min-h-full bg-black text-white pb-20 h-[90vh] font_primary overflow-y-scroll">
        <div className="relative">
          <img src={Office} alt="Office" className="w-full h-96" />
          <div className="absolute top-20 left-40 z-50">
            <Icons.GoBackArrow
              className="w-6 font-semibold cursor-pointer"
              onClick={() => {
                navigate(`../#contacts`, { replace: true });
              }}
            />
          </div>
        </div>

        {/* <h1 className="absolute w-full flex items-end h-56 bg-gradient-to-b from-transparent to-black text-2xl text-white px-6 pb-10"> */}
        <h1 className="text-center text-white text-4xl font_title">Gallery</h1>

        {/* IMAGES GALLERY START */}
        <div className="mt-10 2xl:mt-20 px-28 gap-4">
          <div className="faq w-10/12 mx-auto pb-4 px-6 mt-6">
            {galleryImages?.map((event, i) => (
              <Fade left cascade spy={triggerTitleAnimation}>
                <div key={i}>
                  <div
                    className="flex items-center text-2xl font-semibold my-6 cursor-pointer mb-8"
                    onClick={() => {
                      setActiveAccordion(
                        activeAccordion === event?.id ? null : event?.id
                      );
                      setTriggerAnimation();
                    }}
                  >
                    <div className="whitespace-nowrap flex items-center">
                      <img src={allbum} className="w-6 mr-2" alt="allbum" />
                      <h1>{event?.album_title}</h1>
                    </div>
                    <div className="h-0.5 ml-8 w-full bg-white bg-opacity-60 my-auto"></div>
                  </div>
                  <div>
                    {activeAccordion === event?.id ? (
                      <div>
                        <Fade spy={triggerAnimation}>
                          <div className="text-white mb-4 mt-2 ml-8">
                            {event?.album_caption}
                          </div>
                        </Fade>
                        <div
                          className={`flex flex-wrap justify-center items-center gap-8 relative`}
                        >
                          {event?.gallery_images?.map((img, index) => (
                            <Fade left cascade spy={triggerAnimation}>
                              <div className="w-1/3" key={index}>
                                <img
                                  src={
                                    process.env.REACT_APP_ASSETS_URL +
                                    "/" +
                                    img?.images
                                  }
                                  alt="Img"
                                  className="rounded-xl"
                                />
                              </div>
                            </Fade>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;

// const Images = [
//   {
//     key: 0,
//     event: "Random Memories",
//     images: [
//       "https://lh3.googleusercontent.com/p/AF1QipM4PIEGDxgTmwAgDZLFqfEVgPGAtl0EytEtTsZY=s680-w680-h510",
//       "https://lh3.googleusercontent.com/p/AF1QipPDn6C6wcRFQ_vBivFeBJ7TohWecpxiSf2gOpCM=s680-w680-h510",
//       "https://lh3.googleusercontent.com/p/AF1QipMmNDzYrA7oFTxwsdKCxFm7QQrCW7UvOwEPqMD6=s680-w680-h510",
//       "https://lh3.googleusercontent.com/p/AF1QipMDA5xEDmyyhTRDPShfOn8SrlmuW7Y8xG_WwIJ5=s680-w680-h510",
//       "https://lh3.googleusercontent.com/p/AF1QipM2DxHcpjqKC4dPY9oh1xmKVjP_NUJQj3c-lr_k=s680-w680-h510",
//       "https://lh3.googleusercontent.com/p/AF1QipOHV334A6WNEpaBwm9aAiyPqXu5aw6iLlZPm1Fz=s680-w680-h510",
//       "https://lh3.googleusercontent.com/p/AF1QipOkGzbnDk0JOYgnkxy1HBiTKcToXcdhFHnrTevp=s680-w680-h510",
//       "https://lh3.googleusercontent.com/p/AF1QipOHV334A6WNEpaBwm9aAiyPqXu5aw6iLlZPm1Fz=s680-w680-h510",
//       "https://lh3.googleusercontent.com/p/AF1QipOkGzbnDk0JOYgnkxy1HBiTKcToXcdhFHnrTevp=s680-w680-h510",
//     ],
//   },
//   {
//     key: 1,
//     event: "QQQ Party",
//     images: [
//       "https://lh3.googleusercontent.com/p/AF1QipMmNDzYrA7oFTxwsdKCxFm7QQrCW7UvOwEPqMD6=s680-w680-h510",
//       "https://lh3.googleusercontent.com/p/AF1QipPDn6C6wcRFQ_vBivFeBJ7TohWecpxiSf2gOpCM=s680-w680-h510",
//       "https://lh3.googleusercontent.com/p/AF1QipOkGzbnDk0JOYgnkxy1HBiTKcToXcdhFHnrTevp=s680-w680-h510",
//       "https://lh3.googleusercontent.com/p/AF1QipOHV334A6WNEpaBwm9aAiyPqXu5aw6iLlZPm1Fz=s680-w680-h510",
//       "https://lh3.googleusercontent.com/p/AF1QipOkGzbnDk0JOYgnkxy1HBiTKcToXcdhFHnrTevp=s680-w680-h510",
//       "https://lh3.googleusercontent.com/p/AF1QipM2DxHcpjqKC4dPY9oh1xmKVjP_NUJQj3c-lr_k=s680-w680-h510",
//       "https://lh3.googleusercontent.com/p/AF1QipM4PIEGDxgTmwAgDZLFqfEVgPGAtl0EytEtTsZY=s680-w680-h510",
//       "https://lh3.googleusercontent.com/p/AF1QipMDA5xEDmyyhTRDPShfOn8SrlmuW7Y8xG_WwIJ5=s680-w680-h510",
//       "https://lh3.googleusercontent.com/p/AF1QipOHV334A6WNEpaBwm9aAiyPqXu5aw6iLlZPm1Fz=s680-w680-h510",
//     ],
//   },
//   {
//     key: 2,
//     event: "XYZ Party",
//     images: [
//       "https://lh3.googleusercontent.com/p/AF1QipM4PIEGDxgTmwAgDZLFqfEVgPGAtl0EytEtTsZY=s680-w680-h510",
//       "https://lh3.googleusercontent.com/p/AF1QipPDn6C6wcRFQ_vBivFeBJ7TohWecpxiSf2gOpCM=s680-w680-h510",
//       "https://lh3.googleusercontent.com/p/AF1QipOkGzbnDk0JOYgnkxy1HBiTKcToXcdhFHnrTevp=s680-w680-h510",
//       "https://lh3.googleusercontent.com/p/AF1QipMDA5xEDmyyhTRDPShfOn8SrlmuW7Y8xG_WwIJ5=s680-w680-h510",
//       "https://lh3.googleusercontent.com/p/AF1QipOkGzbnDk0JOYgnkxy1HBiTKcToXcdhFHnrTevp=s680-w680-h510",
//       "https://lh3.googleusercontent.com/p/AF1QipOHV334A6WNEpaBwm9aAiyPqXu5aw6iLlZPm1Fz=s680-w680-h510",
//       "https://lh3.googleusercontent.com/p/AF1QipMmNDzYrA7oFTxwsdKCxFm7QQrCW7UvOwEPqMD6=s680-w680-h510",
//       "https://lh3.googleusercontent.com/p/AF1QipOHV334A6WNEpaBwm9aAiyPqXu5aw6iLlZPm1Fz=s680-w680-h510",
//       "https://lh3.googleusercontent.com/p/AF1QipM2DxHcpjqKC4dPY9oh1xmKVjP_NUJQj3c-lr_k=s680-w680-h510",
//     ],
//   },
// ];
