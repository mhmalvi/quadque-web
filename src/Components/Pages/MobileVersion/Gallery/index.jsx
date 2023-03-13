import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Office from "../../../../asstes/Images/office.png";
import allbum from "../../../../asstes/Images/photo_gallery.png";
import Icons from "../../../Shared/Icons";
import { handleFetchGallery } from "../../../Shared/services";

const Gallery = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [galleryImages, setGalleryImages] = useState([]);
  const [activeAccordion, setActiveAccordion] = useState(0);
  // const [triggerTitleAnimation, setTriggerTitleAnimation] = useState(false);
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const [loader, setLoader] = useState(true);
  const synth = window.speechSynthesis;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (location.pathname === "/gallery") {
      synth.cancel();

      setTimeout(() => {
        setTriggerAnimation(true);
      }, 800);

      setTimeout(() => {
        setLoader(false);
      }, 2000);
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

  // console.log("activeAccordion", activeAccordion);

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

      <div className="gallery min-h-full bg-black text-white pb-20 h-[120vh] overflow-y-auto">
        <img src={Office} alt="Office" className="w-full h-96" />

        {/* <h1 className="absolute w-full flex items-end h-56 bg-gradient-to-b from-transparent to-black text-2xl text-white px-6 pb-10"> */}
        <h1 className="text-center text-white text-4xl font_title">Gallery</h1>

        {/* IMAGES GALLERY START */}
        <div className="mt-10 2xl:mt-20">
          {loader ? (
            <div className="absolute w-[100%] h-[500px] bg-black z-40 flex justify-center items-center m-auto backdrop-blur-md">
              <div className="flex lds-dual-ring animate-pulse"> </div>
              <div className="font_title text-white text-sm font-thin px-2">
                Loading...
              </div>
            </div>
          ) : null}
          <div className="faq w-10/12 mx-auto pb-4 mt-6">
            {galleryImages?.map((event, i) => (
              <div>
                <div
                  className="flex items-center text-2xl font-semibold my-6 cursor-pointer mb-8"
                  onClick={() =>
                    setActiveAccordion(
                      activeAccordion === event?.id ? null : event?.id
                    )
                  }
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
                      <div className="text-white text-xs mb-6 mt-2">
                        {event?.album_caption}
                      </div>
                      <div
                        className={`flex flex-wrap justify-center items-center gap-8`}
                      >
                        {event?.gallery_images?.map((img, index) => (
                          <div>
                            <img
                              src={
                                process.env.REACT_APP_ASSETS_URL +
                                "/" +
                                img?.images
                              }
                              alt="Gallery Images"
                              className="rounded-xl"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Link to={`/`}>
        <div className="w-44 flex justify-center text-white py-2 my-10 mx-auto px-6 spirit-bomb rounded-full font_title">
          <Icons.GoBackArrow width={20} className="mx-3 go-back-arrow" />
          Go Back
        </div>
      </Link>
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
